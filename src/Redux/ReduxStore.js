import { configureStore } from "@reduxjs/toolkit";
import createslice from "./createslice";
import { SearchBarProducts } from "./createslice";
import { obj } from "../Components/Utilities/mockdata";

const Store = configureStore({
    reducer:{cart:createslice.reducer,searchbar:SearchBarProducts.reducer}
})
export default Store