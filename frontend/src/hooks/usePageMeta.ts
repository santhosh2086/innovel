import { useEffect } from 'react'
// Sets the document title and meta description for a page and restores the previous values on leave.
export function usePageMeta(title: string, description: string) {
  useEffect(() => {
    const prevTitle = document.title
    let m = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    const created = !m
    if (!m) { m = document.createElement('meta'); m.name = 'description'; document.head.appendChild(m) }
    const prevDesc = m.content
    document.title = title; m.content = description
    return () => { document.title = prevTitle; if (created) m!.remove(); else m!.content = prevDesc }
  }, [title, description])
}
