import { Header } from "../../components/header";
import CreatePost from "../../components/PostForm";
import { Container } from "./styles";

export default function PostsPages() {
  return (
    <Container>
      <Header/>
      <CreatePost/>
    </Container>
  );
}
