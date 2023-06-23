import { Post } from './../interfaces/Post';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PostSelected {
  value: Post;
}

const initialState = { value: {} } as PostSelected;

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    selectPost(state) {
      const value = state;
    },
  },
});

export const { selectPost } = counterSlice.actions;
export default counterSlice.reducer;
