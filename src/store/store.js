import { compose, createStore, applyMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer.js";
import { thunk } from "redux-thunk";

//root reducer

import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [logger, thunk];

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

export const persistor = persistStore(store);
