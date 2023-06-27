export interface Post {
  id: string;
  contents: string;
  name_user: string;
  likes: string;
  dislikes: number;
  totalComents: number;
  coments: Coments[];
}

export interface Coments {
  id: string;
  content: string;
  likes: number;
}
