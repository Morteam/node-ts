const cities = [
    {
        id: 1,
        name: 'Amsterdam',
        country: 'Netherlands'
    },
    {
        id: 2,
        name: 'Ghent',
        country: 'Belgium'
    },
    {
        id: 3,
        name: 'Rabat',
        country: 'Marroco'
    },
    {
        id: 4,
        name: 'Valparaiso',
        country: 'Chile'
    },
]

const getCityById = (id) => {
    return cities.find(city => city.id === id)
}

const city = getCityById(5)

console.log(city?.name ?? 'Hero undefined')
