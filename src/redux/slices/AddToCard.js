import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    loading:false, 
    data:[],

};
const addToCard = createSlice({
    name: 'addtocard',
    initialState,
    reducers: {
        updateCard: (state, action) => {
            state.loading = true;
            state.data= action.payload; //Merge new data with existing data
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
    },
});
export const { updateCard, setLoading } = addToCard.actions;
export default addToCard.reducer;
