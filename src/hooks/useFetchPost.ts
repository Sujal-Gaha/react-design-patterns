import { useState } from "react";
import { TPosts } from "../types/TPosts";

const url = "https://jsonplaceholder.typicode.com/posts";
const config = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};

const useFetchPost = () => {
  const [posts, setPosts] = useState<TPosts[] | []>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getPost = async () => {
    const response = await fetch(url, config);
    const data = await response.json();
    setPosts(data);
    setIsLoading(false);
  };

  getPost();

  return { posts, isLoading };
};

export default useFetchPost;
