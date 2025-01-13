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

interface HTTPClientProps {
    get: (url: string) => Promise<any>;
    post: () => Promise<void>;
    put: () => Promise<void>;
    delete: () => Promise<void>;
}

// 🙂2 With Adapter
export const getPokemonById = async(id:number|string, httpClient:HTTPClientProps) => {
    const API_BASE = 'https://pokeapi.co/api/v2/pokemon/'
    const API_URL = `${API_BASE}${id}`;

    try {
        const pokemon = await httpClient.get(API_URL);

        return pokemon;
    } catch(error) {
        throw new Error(`Error: the pokemon with the id ${id} does not exist`)
    }
}
