import {configureStore} from "@reduxjs/toolkit"
import logger from "redux-logger"
import listReducer from "./list-slice"


export const store = configureStore({
    reducer: {
        list: listReducer
    },
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})