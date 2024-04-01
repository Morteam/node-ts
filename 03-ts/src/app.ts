const heroes = [
    {
      id: 1,
      name: 'Ironman',
      owner: 'Marvel'
    },
    {
      id: 2,
      name: 'Spiderman',
      owner: 'Marvel'
    },
    {
      id: 3,
      name: 'Batman Jaja',
      owner: 'DC'
    },
]

const findHeroById = (id: number) => {
  return heroes.find(hero => hero.id === id)
}

const heroSample = findHeroById(3)

console.log(heroSample?.name ?? 'Not hero found')
