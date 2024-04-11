import { configureStore } from "@reduxjs/toolkit"
import RootReducer from "./RootReducer";
import {persistStore} from "redux-persist"

import { thunk } from "redux-thunk";




const store = configureStore({
    reducer: RootReducer,
    // middleware: [thunk],
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(thunk)
});

export const persistor =persistStore(store);
export default store


