import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from "redux-persist"
import storage from "redux-persist/lib/storage"
import userReducer from "@/redux/slice/userSlice"

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: [userReducer],
}

const rootReducer = combineReducers({ user: userReducer })

const persistedReducer = persistReducer(persistConfig, rootReducer)
const middlewares = []

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production", // redux devtools 개발 환경에서만 활성화
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(middlewares),
})

export const persistor = persistStore(store)
