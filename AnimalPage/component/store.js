import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from "./feature/counterSlice";
import userReducer from "./feature/userSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore} from "redux-persist";

const persistConfig = {
    key : "root",
    storage
};

const rootReducer = combineReducers({
    counter : counterReducer,
    user : userReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer
});

export const persistor = persistStore(store);

