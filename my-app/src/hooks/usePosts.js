import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getPosts } from "../api/getPosts";

export function usePosts(postId) {
  const [searchParams] = useSearchParams();
  const [totalPages, setTotalPages] = useState(1);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPostsData() {
      const response = await getPosts(searchParams.toString());

      setPosts(response.data.posts);
      setTotalPages(response.data.totalPages);
    }
    fetchPostsData()
      .then()
      .catch((e) => console.log(e));
    //eslint-disable-next-line
  }, [searchParams]);

  return {
    totalPages,
    posts,
  };
}
