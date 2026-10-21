import { useState, type ReactNode } from 'react'

type SmartImageProps = {
  src: string
  alt: string
  className?: string
  loading?: 'eager' | 'lazy'
  fetchPriority?: 'high' | 'low' | 'auto'
  onError?: () => void
  fallback: ReactNode
}

/**
 * Renders an image and swaps in the fallback if the file fails to load,
 * which happens when a visitor is offline, a host is blocked, or a CDN
 * link stops working.
 */
export function SmartImage({
  src,
  alt,
  className,
  loading = 'lazy',
  fetchPriority,
  onError,
  fallback,
}: SmartImageProps) {
  const [failed, setFailed] = useState(false)

  if (failed) return <>{fallback}</>

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={loading}
      fetchPriority={fetchPriority}
      decoding="async"
      onError={() => {
        setFailed(true)
        onError?.()
      }}
    />
  )
}
