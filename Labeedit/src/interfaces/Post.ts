export interface posts {
  id: string;
  contents: string;
  name_user: string;
  likes: number;
  dislikes: number;
  total_coments: number;
  coments?: coments[];
}

export interface coments {
  id: string;
  name_user: string;
  contents: string;
  likes: number;
  dislikes: number;
}
