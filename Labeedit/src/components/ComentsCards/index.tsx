import React from 'react';
import { ReactComponent as IconLike } from '../../assets/iconLike.svg';
import { ReactComponent as IconDisike } from '../../assets/iconDislike.svg';
import { ReactComponent as IconComents } from '../../assets/IconComents.svg';
import { NavLink, useParams } from 'react-router-dom';
import { Container } from './styles';
import useComents from '../../services/useComents';
import { InputLikeDislikeComents } from '../../interfaces/InputLikeDislikeComents';

interface CardPostsProps {
  post_id: string;
  contents: string;
  name_user: string;
  likes: number;
  dislikes: number;
  total_coments: number;
}

export function ComentsCards({
  post_id,
  contents,
  name_user,
  likes,
  dislikes,
  total_coments,
}: CardPostsProps) {
  const { like, refetch } = useComents(post_id);
  const handLike = async (coments_id: string, value: number) => {
    const token = localStorage.getItem('@token');
    if (!token) {
      return;
    }
    const body: InputLikeDislikeComents = {
      token,
      coments_id,
      like: value,
    };
    like.mutate(body);
    refetch();
  };
  const { id } = useParams() as { id: string };
  return (
    <Container>
      <header>
        <p>Enviado por : {name_user}</p>
      </header>
      <main>
        <p>{contents}</p>
      </main>
      <footer>
        <div>
          <button onClick={() => handLike(id, 1)}>
            <IconLike />
          </button>
          <span>{likes}</span>
          <button onClick={() => handLike(id, 0)}>
            <IconDisike />
          </button>
        </div>
        <div>
          <button>
            <IconComents />
          </button>
          <span>{total_coments}</span>
        </div>
      </footer>
    </Container>
  );
}
