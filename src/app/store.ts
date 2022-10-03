import {combineReducers, configureStore} from '@reduxjs/toolkit';
import toDoSlice from "./redux";

const rootReducer = combineReducers({
  toDoApp: toDoSlice
})

export const store = configureStore({
  reducer: rootReducer
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;