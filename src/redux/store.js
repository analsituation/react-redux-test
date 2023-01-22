import { configureStore } from '@reduxjs/toolkit'
import mainSlice from './mainSplice'

export const store = configureStore({
    reducer: {
        main: mainSlice,
    },
})