import { Card } from "flowbite-react";
import { TPosts } from "../types/TPosts";

const PostCard = ({ post }: { post: TPosts }) => {
  return (
    <Card
      href={`posts/${post.id}`}
      className="max-w-sm bg-slate-800 px-6 py-2 rounded-md"
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {post.title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {post.body}
      </p>
    </Card>
  );
};

export default PostCard;
