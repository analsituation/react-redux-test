import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {APIFetches} from '../API/api'

const initialState = {
    posts: [],
    sortedPosts: [],
    isLoading: false,
    totalCount: 0,
    pageSize: 10,
    currentPage: 1
}

export const setPosts = createAsyncThunk(
    'main/setPosts',
    async ({limit, page}, {rejectWithValue}) => {
        try {
            const response = await APIFetches.getPosts(limit, page)
            if (response.status !== 200) {
                throw new Error()
            }
            return response

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
        setPage: (state, action) => {
            state.currentPage = action.payload
        },
        sortPosts: (state, action) => {
            switch (action.payload) {
            case 'A - Z': {
                state.sortedPosts = [...state.posts].sort((a, b) => a['title'].localeCompare(b['title']))
                break
            }
            case 'Z - A': {
                state.sortedPosts = [...state.posts].sort((a, b) => a['title'].localeCompare(b['title'])).reverse()
                break
            }
            case '':
                state.sortedPosts = state.posts
            }
        },
        searchPosts: (state, action) => {
            state.sortedPosts = state.posts.filter(post => post.title.includes(action.payload))
        }
    },
    extraReducers: {
        [setPosts.pending]: (state) => {
            state.isLoading = true
        },
        [setPosts.fulfilled]: (state, action) => {
            state.isLoading = false
            state.posts = action.payload.posts
            state.sortedPosts = state.posts
            state.totalCount = action.payload.totalCount
        },
        [setPosts.rejected]: (state) => {
            state.isLoading = false
        }
    }
})

export const {addPost, removePost, setPage, sortPosts, searchPosts} = mainSlice.actions
export default mainSlice.reducer