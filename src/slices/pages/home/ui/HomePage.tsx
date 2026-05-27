import { Hero } from '@entities'

export interface HomePageProps {
  heroImage?: string
  heroTitle?: string
}

export function HomePage({
  heroImage = '/images/me.avif',
  heroTitle = 'Владимир Языков',
}: HomePageProps) {
  return (
    <main>
      <Hero image={heroImage} title={heroTitle} />
    </main>
  )
}
