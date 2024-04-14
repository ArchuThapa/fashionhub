import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { createResetMetaReducer } from "./slices/MetaReducer";
import addToCard from "./slices/AddToCard";
import authSlice from "./slices/LoginSlices";
import productSlice from "./slices/AllProduct";



const resetSlices = [
    "addtocard",
    "auth",
    "allproduct"
];
const rootReducer = createResetMetaReducer(
    "GLOBAL RESET",
    resetSlices
)
    (
        combineReducers({
            addtocard: addToCard,
            authinfo: authSlice,
          allproduct: productSlice,

        })
    );
const persistConfig = {
    key: "root",
    storage,
    whiteList: resetSlices,
};
export default persistReducer(persistConfig, rootReducer);