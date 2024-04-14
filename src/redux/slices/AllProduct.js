import { createSlice } from "@reduxjs/toolkit"
import { fetchProducts } from "../../services/AllProduct";
const initialState = {
    loading: false,
    data: [],
  error: null,

};
const productSlice = createSlice({
    name: 'allproduct',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        //login user
        builder
        .addCase(fetchProducts.pending, (state) => {
            state.loading = true;
            // state.error = null;

        })
        .addCase(fetchProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        })

        .addCase(fetchProducts.rejected, (state, action) => {

            state.loading = false;
            state.error = action.error.message;

        });

    },

});
export default productSlice.reducer;
