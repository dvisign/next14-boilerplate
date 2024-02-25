import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from "redux-persist"
import { useDispatch, useSelector } from "react-redux"
import type { TypedUseSelectorHook } from "react-redux"
import userReducer from "@/redux/slice/userSlice"
import createWebStorage from "redux-persist/lib/storage/createWebStorage"

const createNoopStorage = () => {
  return {
    getItem() {
      return Promise.resolve(null)
    },
    setItem(_, value) {
      return Promise.resolve(value)
    },
    removeItem() {
      return Promise.resolve()
    },
  }
}

const storage = typeof window === "undefined" ? createNoopStorage() : createWebStorage("local")

const persistConfig = {
  key: "root",
  storage,
}

const rootReducer = combineReducers({ user: userReducer })

const persistedReducer = persistReducer<ReturnType<typeof rootReducer>>(persistConfig, rootReducer)

const middlewares = []

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production", // redux devtools 개발 환경에서만 활성화
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      // serializableCheck: false,
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(middlewares),
})

export type RootStateTypes = ReturnType<typeof store.getState>
export type AppDispatchTypes = typeof store.dispatch

export const persistor = persistStore(store)
export const useAppDispatch: () => AppDispatchTypes = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootStateTypes> = useSelector
