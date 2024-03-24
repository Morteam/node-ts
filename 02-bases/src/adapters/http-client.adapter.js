const axios = require('axios')

const httpClientAdapter = {
    get: async (url) => {
        // FETCH
        // const response = await fetch(url)
        // const data = await response.json()

        // return data

        // AXIOS
        const response = await axios.get(url)
    
        return response.data
    },
    post: async (url, body) => {},
    put: async (url, body) => {},
    delete: async (url) => {},
}

module.exports = {
    httpClientAdapter
}