import Posts from "./posts";
import Groups from "./groups";
import { PostsContainer } from "./styles";

export default function Feed() {

  return (
    <main>
      <div className="bg-blues"></div>
      <PostsContainer>
        <Groups />
        <Posts />
      </PostsContainer>
    </main >

  );
};
