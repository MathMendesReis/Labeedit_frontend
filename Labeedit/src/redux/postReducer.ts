import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

export interface Post {
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
export interface PostState {
  posts: Post[];
  loading: boolean;
  error: unknown;
}

const initialState: PostState = {
  posts: [],
  loading: false,
  error: null,
};

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<Post[]>) => {
      state.posts = action.payload;
    },
    incrementLikes: (state, action: PayloadAction<Post[]>) => {
      state.posts = action.payload;
    },
  },
});
export const { setPosts, incrementLikes } = postSlice.actions;

export const selectCount = (state: RootState) => state.postSlice;
export default postSlice.reducer;
