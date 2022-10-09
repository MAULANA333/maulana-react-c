import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./Features/dataSlice.js";
import { persistReducer,persistStore } from "redux-persist";
import persistReducer from "redux-persist/es/persistReducer";


const persistConfig = {
    key:"yugioh",
    storage
}

const persistReducer = persistReducer(PpersistConfig, dataReducer);

export const store = configureStore(options: {
    reducer:persistedReducer
});

export const persistor persistStore(store);