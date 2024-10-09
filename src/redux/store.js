import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import contactsReducer from "./contactsSlice.js"
import filtersReducer from "./filtersSlice.js"

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['filters']
  }

const rootReducer = combineReducers({
    contacts: contactsReducer,
    filters: filtersReducer,
});

  const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
          },
        })
})

export const persistor = persistStore(store);


