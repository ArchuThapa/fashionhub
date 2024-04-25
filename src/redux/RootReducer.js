import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { createResetMetaReducer } from "./slices/MetaReducer";
import addToCard from "./slices/AddToCard";
import authSlice from "./slices/LoginSlices";
import productSlice from "./slices/AllProduct";
import limitSlice from "./slices/LimitProduct";
import UserAllSlice  from "./slices/UserAllSlice";
import SearchSlice from "./slices/SearchData";
import SearchDynamicProduct from "./slices/SearchDynamicProduct"
import SortSlice from "./slices/SortSlice";


const resetSlices = [
    "addtocard",
    "auth",
    "allproduct",
    "carouseldata",
    "userdata",
    "searchproduct",
    "searchdynamicproduct",
    "sortdata"

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
          carouseldata: limitSlice,
          userdata: UserAllSlice,
          searchproduct:SearchSlice,
          searchdynamicproduct:SearchDynamicProduct,
          sortdata:SortSlice,
          

        })
    );
const persistConfig = {
    key: "root",
    storage,
    whiteList: resetSlices,
};
export default persistReducer(persistConfig, rootReducer);