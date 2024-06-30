import { useEffect, useState } from "react";
import { TPosts } from "../types/TPosts";

const url = "https://jsonplaceholder.typicode.com/posts";
const config = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};

const useFetchPostById = (id: string | undefined) => {
  const [post, setPost] = useState<TPosts | null>(null);
  const [isLoading, setIsloading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPostById = async () => {
      try {
        if (!id) {
          throw new Error(`Post with the id: ${id} doesnot exist!`);
        }
        const response = await fetch(`${url}/${id}`, config);
        const data = await response.json();
        setPost(data);
        setIsloading(false);
      } catch (error) {
        console.log(error);
        setError(true);
      }
    };
    fetchPostById();
  }, [id]);

  return { post, isLoading, error };
};

export default useFetchPostById;
