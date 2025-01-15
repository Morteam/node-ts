// With Axios
import axios from 'axios';

export const httpClientPlugin = {
    get: async (url:string) => {
        const response = await axios.get(url);
        const data = response.data;

        return data;
    },
    post: async () => {
        throw new Error('Not Implemented')
    },
    put: async () => {
        throw new Error('Not Implemented')
    },
    delete: async () => {
        throw new Error('Not Implemented')
    },
};

// With Fetch
// const httpClientPlugin = {
//     get: async (url) => {
//         const response = await fetch(url)
//         const data = await response.json()
    
//         return data
//     },
//     post: async () => {},
//     put: async () => {},
//     delete: async () => {},
// }
