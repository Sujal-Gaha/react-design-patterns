import { useState } from "react";
import postData from "../components/constants/post";
import PostCard from "../components/compound/PostCard";

const HomeFeedScreen = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [post, setPost] = useState(postData);

  return (
    <main className="h-screen w-screen flex flex-col gap-4 items-center pt-10">
      <PostCard post={post}>
        <PostCard.Title />
        <PostCard.User />
        <PostCard.Content />
        <PostCard.Buttons />
      </PostCard>
    </main>
  );
};

export default HomeFeedScreen;
