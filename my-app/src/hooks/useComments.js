import { useEffect, useState } from "react";
import { getCommentsByPost } from "../api/comment";

export function useComments(postId) {
  const [shouldUpdateComment, setShouldUpdateComment] = useState(true);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function fetchCommentsData() {
      const response = await getCommentsByPost(postId);

      setComments(response.data);
      setShouldUpdateComment(false);
    }

    fetchCommentsData()
      .then()
      .catch((e) => console.log(e));

    //eslint-disable-next-line
  }, [postId, shouldUpdateComment]);

  return {
    commentsCount: comments.length,
    comments,
    setShouldUpdateComment,
  };
}
