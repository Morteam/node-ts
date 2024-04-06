const { httpClientAdapter } = require('../adapters')


const getPokemonNameById = async (id: number|string): Promise<string|undefined> => {
    const URL_REQUEST = `https://pokeapi.co/api/v2/pokemon/${id}`

    // Fetch is supported by Node 14 (aprox)
    try {
        const data = await httpClientAdapter.get(URL_REQUEST)
    
        // return Promise.resolve('Lotso Melotso'); // Sample of return data
        return data.name
    } catch (error) {
        console.error(error)
    }
}

export {
    getPokemonNameById
}
