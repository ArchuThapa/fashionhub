import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { createResetMetaReducer } from "./slices/MetaReducer";
import addToCard from "./slices/AddToCard";


const resetSlices = [
    "addtocard",
];
const rootReducer = createResetMetaReducer(
    "GLOBAL RESET",
    resetSlices
)
    (
        combineReducers({
            addtocard: addToCard

        })
    );
const persistConfig = {
    key: "root",
    storage,
    whiteList: resetSlices,
};
export default persistReducer(persistConfig, rootReducer);