import React from 'react'

type MotionProps = React.ComponentProps<'div'> & {
  as?: string | React.ComponentType<any>
  initial?: unknown
  animate?: unknown
  transition?: unknown
  whileInView?: unknown
  viewport?: unknown
}

/**
 * Lightweight passthrough wrapper retained for backwards compatibility.
 * Consumers can still render a custom element via the `as` prop, while
 * external animation libraries (e.g. AOS) can act via data attributes.
 */
export default function NoSSRMotion({ children, as = 'div', ...props }: React.PropsWithChildren<MotionProps>) {
  const { initial: _i, animate: _a, transition: _t, whileInView: _w, viewport: _v, ...rest } = props as Record<string, unknown>
  const Tag = as as any

  return <Tag {...rest}>{children}</Tag>
}
