import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    posts: []
}

export const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        addPost: (state, action) => {
            state.posts.push(action.payload)
        },
        removePost: (state, action) => {
            state.posts = state.posts.filter(p => p.id !== action.payload)
        }
    }
})

export const {addPost, removePost} = mainSlice.actions
export default mainSlice.reducer