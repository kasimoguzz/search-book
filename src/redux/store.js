import {configureStore} from '@reduxjs/toolkit'
import BookSlice from './Book/BookSlice'

export const store = configureStore({
    reducer: {
        book : BookSlice
    }
})