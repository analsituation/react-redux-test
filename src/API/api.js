import axios from 'axios'

export const APIFetches = {
    async getPosts() {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        return response
    },
}