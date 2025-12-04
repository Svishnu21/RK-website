#!/usr/bin/env node
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { spawnSync } from 'child_process'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const pidFile = path.join(__dirname, '..', 'server.pid')

if (!fs.existsSync(pidFile)) {
  console.error('PID file not found:', pidFile)
  process.exit(1)
}

const raw = fs.readFileSync(pidFile, 'utf8').trim()
const pid = Number(raw)
if (!pid || Number.isNaN(pid)) {
  console.error('Invalid PID in file:', raw)
  process.exit(1)
}

try {
  if (process.platform === 'win32') {
    // Use taskkill to ensure the whole process tree is terminated on Windows
    const res = spawnSync('taskkill', ['/PID', String(pid), '/F', '/T'], { stdio: 'inherit' })
    if (res.status !== 0) process.exit(res.status || 1)
  } else {
    process.kill(pid, 'SIGTERM')
  }
  try { fs.unlinkSync(pidFile) } catch (e) { /* ignore */ }
  console.log(`Stopped process ${pid}`)
} catch (err) {
  console.error('Failed to stop process', err)
  process.exit(1)
}
