// With Axios
import axios from 'axios';

export const httpClientPlugin = {
    get: async (url:string) => {
        const response = await axios.get(url);
        const data = response.data;

        return data;
    },
    post: async () => {},
    put: async () => {},
    delete: async () => {},
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
