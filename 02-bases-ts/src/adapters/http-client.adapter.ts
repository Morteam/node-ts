import axios from 'axios'

const httpClientAdapter = {
    get: async (url: string) => {
        // FETCH
        // const response = await fetch(url)
        // const data = await response.json()

        // return data

        // AXIOS
        const response = await axios.get(url)
    
        return response.data
    },
    post: async (url: string, body: any) => {}, // Temporal Any
    put: async (url: string, body: any) => {}, // Temporal Any
    delete: async (url: string) => {},
}

export {
    httpClientAdapter
}