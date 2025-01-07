// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise

interface PokemonData {
    name: string;
    [key: string]: unknown;
}

export const getPokemonById = (id:number|string, callback?:Function):Promise<PokemonData> => {
    const API_URL = 'https://pokeapi.co/api/v2/pokemon/'

    // ❌1 Callback hell
    // fetch(`${API_URL}${id}`)
    //     .then( response => {
    //         response.json().then(
    //             data => {
    //                 console.log(data.name)
    //             }
    //         )
    //     } )

    // ❌2 Excesive return + Callback hell
    // return fetch(`${API_URL}${id}`)
    //     .then(response => {
    //         return response.json().then(
    //             data => {
    //                 return(data.name)
    //             }
    //         )
    //     })

    // ❌3 Excesive Callback hell
    // fetch(`${API_URL}${id}`)
    //     .then(response => {
    //         response.json().then(
    //             data => {
    //                 callback && callback(data)
    //             }
    //         )
    //     })

    // 🙂1
    return fetch(`${API_URL}${id}`)
        .then(response => response.json())
        .then(data => data)
}
