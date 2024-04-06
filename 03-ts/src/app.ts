import { findHeroById } from './services/hero.service'

const heroSample = findHeroById(3)

console.log(heroSample?.name ?? 'Not hero found')
