import { useEffect, useRef, useState } from 'react'

type MapEmbedProps = {
  src: string
  width?: string | number
  height?: string | number
  title?: string
}

export default function MapEmbed({ src, width = '100%', height = 400, title = 'Map' }: MapEmbedProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    if (!ref.current || typeof IntersectionObserver === 'undefined') {
      // if IO not available, load immediately
      setInView(true)
      return
    }

    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setInView(true)
          obs.disconnect()
        }
      })
    }, { rootMargin: '200px' })

    obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} className="w-full">
      {inView ? (
        <iframe
          src={src}
          width={width}
          height={height}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={title}
          className="w-full"
        />
      ) : (
        <div style={{ height }} className="w-full bg-gray-50 rounded flex items-center justify-center">
          <p className="text-sm text-[#222222]/60">Map will load when visible</p>
        </div>
      )}
    </div>
  )
}
