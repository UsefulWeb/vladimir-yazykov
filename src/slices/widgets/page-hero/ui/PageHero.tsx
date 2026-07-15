import { Hero } from '@entities'

interface PageHeroProps {
  title: string
  subtitle?: string
  image?: string
}

export function PageHero({ title, subtitle, image }: PageHeroProps) {
  return (
    <Hero
      title={title}
      subtitle={undefined}
      description={subtitle}
      image={image}
      sx={{ minHeight: { xs: 280, md: 360 }, py: { xs: 6, md: 8 } }}
    />
  )
}
