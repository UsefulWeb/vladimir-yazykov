export const siteUrl = 'https://i.u-w.me'

export const site = {
  ogImage: '/images/me.avif',
  heroImage: '/images/me.avif',
  /** Год запуска сайта — для строки копирайта в подвале */
  copyrightSince: 2025,
} as const

/** Текущий год или диапазон «2025–2026», если сайт работает несколько лет */
export function formatCopyrightYear(): string {
  const current = new Date().getFullYear()
  const { copyrightSince } = site
  return current > copyrightSince
    ? `${copyrightSince}–${current}`
    : String(current)
}
