// 🙂1
// const getPokemonById = async(id) => {
//     const API_URL = 'https://pokeapi.co/api/v2/pokemon/'

//     try {
//         const pokemon = await fetch(`${API_URL}${id}`)
//         const data = await pokemon.json()
    
//         return data
//     } catch(error) {
//         throw new Error('Error: Something go wrong')
//     }
// }

// 🙂2 With Adapter
const getPokemonById = async(id, httpClient) => {
    const API_BASE = 'https://pokeapi.co/api/v2/pokemon/'
    const API_URL = `${API_BASE}${id}`;

    try {
        const pokemon = await httpClient.get(API_URL);

        return pokemon;
    } catch(error) {
        throw new Error('Error: Something go wrong')
    }
}

export default getPokemonById;