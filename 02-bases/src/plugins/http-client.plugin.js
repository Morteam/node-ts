const httpClientPlugin = {
    get: async (url) => {
        const response = await fetch(url)
        const data = await response.json()
    
        return data
    },
    post: async() => {},
    put: async() => {},
    delete: async() => {},
}

export {
    httpClientPlugin,
}
