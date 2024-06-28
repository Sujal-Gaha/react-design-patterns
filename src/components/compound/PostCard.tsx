import { PropsWithChildren, createContext, useContext } from "react";
import { TPost } from "../../types/TPost";

type TPostCardContext = {
  post: TPost;
};

const PostCardContext = createContext<TPostCardContext | undefined>(undefined);

const usePostCardContext = () => {
  const context = useContext(PostCardContext);

  if (!context) {
    throw new Error("usePostCardContext must be used within a PostCard");
  }

  return context;
};

type PostCardProps = PropsWithChildren & {
  post: TPost;
};

const PostCard = ({ post, children }: PostCardProps) => {
  return (
    <PostCardContext.Provider value={{ post }}>
      <div className="h-fit w-fit p-4 flex flex-col gap-2 rounded-md bg-neutral-800 text-white">
        {children}
      </div>
    </PostCardContext.Provider>
  );
};

PostCard.Title = function PostCardTitle() {
  const { post } = usePostCardContext();
  return <h2 className="text-lg font-semibold text-center">{post.title}</h2>;
};

PostCard.Content = function PostCardContent() {
  const { post } = usePostCardContext();
  return <p>{post.content}</p>;
};

PostCard.User = function PostCardUser() {
  const { post } = usePostCardContext();
  return <p>{post.user.name}</p>;
};

PostCard.Buttons = function PostCardButtons() {
  return (
    <div className="flex gap-2">
      <button className="p-2 bg-red-200 rounded-md text-black w-full">
        Read More
      </button>
      <button className="p-2 bg-red-200 rounded-md text-black w-full">
        Comments
      </button>
    </div>
  );
};

export default PostCard;
