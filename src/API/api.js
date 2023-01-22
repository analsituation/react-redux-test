import axios from 'axios'

export const APIFetches = {
    async getPosts(limit = 10, page = 1) {
        const fullResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`)
        const response = {
            totalCount: fullResponse.headers['x-total-count'],
            status: fullResponse.status,
            posts: fullResponse.data
        }
        return response
    },
}