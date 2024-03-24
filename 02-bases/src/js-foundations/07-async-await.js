const getPokemonById = async (id) => {
    const URL_REQUEST = `https://pokeapi.co/api/v2/pokemon/${id}`

    // Fetch is supported by Node 14 (aprox)
    try {
        const request = await fetch(URL_REQUEST)
        const data = await request.json()
    
        // return Promise.resolve('Lotso Melotso'); // Sample of return data
        return data.name
    } catch (error) {
        console.error(error)
    }
}

module.exports = {
    getPokemonById
}
