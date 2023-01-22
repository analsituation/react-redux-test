import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {APIFetches} from '../API/api'

const initialState = {
    posts: [],
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
        }
        // setLoadingStatus: (state, action) => {
        //
        // }
        // setPosts: (state, action) => {
        //     state.posts = action.payload
        // },
    },
    extraReducers: {
        [setPosts.pending]: (state, action) => {
            state.isLoading = true
        },
        [setPosts.fulfilled]: (state, action) => {
            state.isLoading = false
            // setPosts(action.payload)
            state.posts = action.payload.posts
            state.totalCount = action.payload.totalCount
        },
        [setPosts.rejected]: (state, action) => {
            state.isLoading = false
        }
    }
})

// export const {addPost, removePost, setPosts} = mainSlice.actions
export const {addPost, removePost, setPage} = mainSlice.actions
export default mainSlice.reducer