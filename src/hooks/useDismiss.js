import { useEffect } from 'react'

// Calls onDismiss on Escape or on a pointer press outside `ref` while `active` is true.
export default function useDismiss(ref, active, onDismiss) {
  useEffect(() => {
    if (!active) return undefined
    const onPointer = (e) => {
      if (ref.current && !ref.current.contains(e.target)) onDismiss(false)
    }
    const onKey = (e) => {
      if (e.key === 'Escape') onDismiss(true)
    }
    document.addEventListener('pointerdown', onPointer)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onPointer)
      document.removeEventListener('keydown', onKey)
    }
  }, [ref, active, onDismiss])
}
