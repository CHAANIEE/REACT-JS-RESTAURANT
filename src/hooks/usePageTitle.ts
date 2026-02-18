import { useEffect } from 'react'
import { siteConfig } from '../data/siteConfig'

const usePageTitle = (title: string): void => {
  useEffect(() => {
    document.title = title === 'Home'
      ? `${siteConfig.name} — ${siteConfig.tagline}`
      : `${title} | ${siteConfig.name}`
    return () => { document.title = siteConfig.name }
  }, [title])
}

export default usePageTitle