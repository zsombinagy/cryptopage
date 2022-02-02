import { confiugreStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../services/cryptoApi";

export default confiugreStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
    },
})