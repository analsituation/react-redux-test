import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {APIFetches} from '../API/api'

const initialState = {
    posts: []
}

export const setPosts = createAsyncThunk(
    'main/setPosts',
    async (_, {rejectWithValue}) => {
        try {
            const response = await APIFetches.getPosts()
            if (response.status !== 200) {
                throw new Error()
            }
            return response.data

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        addPost: (state, action) => {
            state.posts.push(action.payload)
        },
        removePost: (state, action) => {
            state.posts = state.posts.filter(p => p.id !== action.payload)
        },
        // setPosts: (state, action) => {
        //     state.posts = action.payload
        // },
    },
    extraReducers: {
        [setPosts.pending]: (state, action) => {
            console.log('loading')
        },
        [setPosts.fulfilled]: (state, action) => {
            console.log('loaded')
            // setPosts(action.payload)
            state.posts = action.payload
        },
        [setPosts.rejected]: (state, action) => {
            debugger

            console.log(action.payload)
        }
    }
})

// export const {addPost, removePost, setPosts} = mainSlice.actions
export const {addPost, removePost} = mainSlice.actions
export default mainSlice.reducer