import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

export interface Coments {
  id: string;
  contents: string;
  creation_date: string;
  information_update: string;
  likes: number;
  dislikes: number;
  coments: number;
  creator: {
    id: string;
    name: string;
  };
}
export interface ComentsState {
  coments: Coments[];
  loading: boolean;
  error: unknown;
}

const initialState: ComentsState = {
  coments: [],
  loading: false,
  error: null,
};

export const comentsSlice = createSlice({
  name: 'coments',
  initialState,
  reducers: {
    setComents: (state, action: PayloadAction<any[]>) => {
      state.coments = action.payload;
    },
    setloading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});
export const { setComents, setloading } = comentsSlice.actions;

export const selectCount = (state: RootState) => state.postSlice;
export default comentsSlice.reducer;
