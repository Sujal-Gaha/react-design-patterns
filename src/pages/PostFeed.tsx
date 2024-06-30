import PostCard from "../components/PostCard";
import useFetchPost from "../hooks/useFetchPost";

const PostFeed = () => {
  const { posts, isLoading } = useFetchPost();

  if (isLoading) return <p>Loading posts</p>;

  return (
    <main className="h-screen w-screen flex flex-col items-center py-10 gap-8">
      {posts.map((post) => {
        return <PostCard key={post.id} post={post} />;
      })}
    </main>
  );
};

export default PostFeed;
