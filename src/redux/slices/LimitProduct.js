import { createSlice } from "@reduxjs/toolkit"
import { fetchcarouselData } from "../../services/AllProduct";
const initialState = {
    loading: false,
    data: [],
  error: null,

};
const limitSlice = createSlice({
    name: 'carouseldata',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        //login user
        builder
        .addCase(fetchcarouselData.pending, (state) => {
            state.loading = true;
            // state.error = null;

        })
        .addCase(fetchcarouselData.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        })

        .addCase(fetchcarouselData.rejected, (state, action) => {

            state.loading = false;
            state.error = action.error.message;

        });

    },

});
export default limitSlice.reducer;
