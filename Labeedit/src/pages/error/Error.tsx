import { useLocation } from 'react-router-dom';
import { Container } from './styles';

export default function ErrorPage() {
  const location = useLocation();
  const error = location.state?.error;

  return (
    <Container>
      <h1>Oops!</h1>
      <p>Desculpe, ocorreu um erro inesperado.</p>
      {error && (
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      )}
    </Container>
  );
}
