import "../styles/Post.scss";
import React, { useEffect, useState } from "react";

import { UilCommentLines } from "@iconscout/react-unicons";

import { deletePostLike, getPostLikes, setPostLike } from "../../api/like";
import { Link } from "react-router-dom";
import { formatDate } from "../../services/dateFormater";
import { useLikes } from "../../hooks/useLikes";
import { useComments } from "../../hooks/useComments";
import { useUserAvatar } from "../../hooks/useUserAvatar";

import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import LikeField from "../Like";
import UpdatePostTools from "../tools/UpdatePostTools";

const Post = ({
  postId,
  authorLogin,
  publishDate,
  categories,
  content,
  title,
  post,
}) => {
  const [isDeleted, setDeleted] = useState(false);

  const { avatar } = useUserAvatar(post.authorId);
  const { commentsCount } = useComments(postId);
  const { selectedLikeType, grade, setLike } = useLikes(
    getPostLikes,
    deletePostLike,
    setPostLike,
    postId
  );

  useEffect(() => {
    setDeleted(false);
  }, [postId]);

  function getParsCategories(categories) {
    const wordsArray = categories.split(", ");
    const wordsWithHash = wordsArray.map((word) => `#${word}`);

    return wordsWithHash.join(" ");
  }

  return (
    <div className="post">
      {!isDeleted ? (
        <>
          <div class="flex-center">
            <div className="authorInfo">
              <img
                className="avatar"
                width={47}
                height={47}
                src={avatar}
                alt="AutorIcon"
              />
              <span>{`@${authorLogin}`}</span>
              <span> • </span>
              <span className="publishDate">{formatDate(publishDate)}</span>
            </div>

            <UpdatePostTools
              authorLogin={authorLogin}
              post={post}
              isDeleted={isDeleted}
              setDeleted={setDeleted}
            />
          </div>
          <h4>{`"${title}"`}</h4>
          <div className="markdownStyles">
            <ReactMarkdown
              children={`${content}\n${getParsCategories(categories)}`}
              rehypePlugins={[rehypeRaw]}
            />
          </div>
          {/* <span>{`${content} ${getParsCategories(categories)}`}</span> */}
          <div></div>
          <div className="d-flex">
            <LikeField
              selectedLikeType={selectedLikeType}
              setLike={setLike}
              grade={grade}
            />
            <Link
              to={`/comments/${postId}`}
              className="text-link flex-center action-container commentIcon"
            >
              <UilCommentLines className="icon" />
              <span>{commentsCount}</span>
            </Link>
          </div>
        </>
      ) : (
        <span className="centerText">The post has been deleted</span>
      )}
    </div>
  );
};

export default Post;
