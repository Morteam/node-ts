import { cities } from '../data/clities'

export const getCityById = (id: number) => {
    return cities.find(city => city.id === id)
}