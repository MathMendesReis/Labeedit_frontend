import { configureStore } from '@reduxjs/toolkit';
import counterSlice from '../redux/counterSlice';
import { postSlice } from '../redux/postReducer';
// ...

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    postSlice: postSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
