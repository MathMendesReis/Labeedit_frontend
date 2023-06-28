import React from 'react';
import { Container } from './styles';
import { ReactComponent as IconLike } from '../../assets/iconLike.svg';
import { ReactComponent as IconDisike } from '../../assets/iconDislike.svg';
import { ReactComponent as IconComents } from '../../assets/IconComents.svg';
import { NavLink, useParams } from 'react-router-dom';
import usePosts from '../../services/usePosts';
import { LikeDislike } from '../../interfaces/LikeDislike';
import { coments } from '../../interfaces/Post';

interface CardPostsProps {
  id: string;
  contents: string;
  name_user: string;
  likes: number;
  dislikes: number;
  total_coments: number;
  coments: coments[];
}

export function CardPosts({
  id,
  contents,
  name_user,
  likes,
  dislikes,
  total_coments,
  coments,
}: CardPostsProps) {
  const { idComents } = useParams();

  const bodyLike: LikeDislike = {
    id,
    like: 1,
  };
  const bodyLikeComents: LikeDislike = {
    id,
    like: 1,
  };
  const bodyDisike: LikeDislike = {
    id,
    like: 0,
  };

  const { likeDislike, getPostsById } = usePosts();

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
          <button
            onClick={() => {
              likeDislike(bodyLike);
            }}
          >
            <IconLike />
          </button>
          <span>{likes}</span>
          <button
            onClick={() => {
              likeDislike(bodyDisike);
            }}
          >
            <IconDisike />
          </button>
        </div>
        <div>
          <NavLink
            to={`/coments/${id}`}
            onClick={() => {
              getPostsById(id);
            }}
          >
            <IconComents />
          </NavLink>
          <span>{total_coments}</span>
        </div>
      </footer>
    </Container>
  );
}
