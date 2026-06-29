import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstence from "../../api/axiosInstence";


export const createBook = createAsyncThunk('book/createBook', async (book, { rejectWithValue }) => {
    try {

        const response = await axiosInstence.post('/books', book);
        console.log(response.data);
        return response.data

    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

const bookSlice = createSlice({
    name: 'book',
    initialState: {
        books: [],
        error: null,
        loading: false
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.
            addCase(createBook.pending, (state) => {
                state.error = null
                state.loading = true
            })
            .addCase(createBook.fulfilled, (state, action) => {
                state.books.push(action.payload);
                state.loading = false;
            })
            .addCase(createBook.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
    }
})
export default bookSlice.reducer