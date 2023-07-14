import { configureStore } from '@reduxjs/toolkit';
import counterSlice from '../redux/counterSlice';
import { postSlice } from '../redux/postReducer';
import { comentsSlice } from '../redux/comentsReducer';
// ...

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    postSlice: postSlice.reducer,
    comentsSlice: comentsSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
