export interface posts {
  id: string;
  contents: string;
  name_user: string;
  likes: number;
  dislikes: number;
  coments: number;
}

export interface coments {
  id: string;
  content: string;
  likes: number | coments[];
}

export interface post {
  id: string;
  contents: string;
  name_user: string;
  likes: number;
  dislikes: number;
  coments: number | coments[];
}
