import { useParams } from "react-router-dom";
import useFetchPostById from "../hooks/useFetchPostById";
import PostCard from "../components/PostCard";

const Post = () => {
  const { id } = useParams();

  const { post, isLoading, error } = useFetchPostById(id);

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>An error has occured.</p>;

  if (post) {
    return (
      <main className="h-screen w-screen flex items-center justify-center">
        <PostCard key={post?.id} post={post} />
      </main>
    );
  }
};

export default Post;
