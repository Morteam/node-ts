import { getCityById } from './services/city.service'

const city = getCityById(5)

console.log(city?.name ?? 'Hero undefined!!')
