import React, { useEffect } from "react";
import "./styles/ActionContainer.scss";

import { UilEdit } from "@iconscout/react-unicons";
import { UilTrashAlt } from "@iconscout/react-unicons";
import { useAuth } from "../hooks/useAuth";
import { deletePostById } from "../api/createPost";

const UpdateTools = ({ authorLogin, postId, setDeleted }) => {
  const { userLogin } = useAuth();

  async function deletePost(postId) {
    await deletePostById(postId)
      .then(() => setDeleted(true))
      .catch((e) => console.log(e));
  }

  return (
    <div>
      {userLogin === authorLogin ? (
        <div className="updateTools">
          <UilEdit width={17} height={17} />

          <button
            className="transparent-button"
            onClick={() => deletePost(postId)}
          >
            <UilTrashAlt width={17} height={17} />
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default UpdateTools;
