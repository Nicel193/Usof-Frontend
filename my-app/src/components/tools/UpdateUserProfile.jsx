import React, { useState } from "react";

import Modal from "../Modal";
import { updateAvatar } from "../../api/user";
import checkAuth from "../../services/authService";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/authSlice";
import { UilPen } from "@iconscout/react-unicons";

const UpdateUserProfile = () => {
  const dispatch = useDispatch();
  const [isEdit, setEdit] = useState(false);
  const [file, setFile] = useState(undefined);

  async function uploadFile() {
    const formDate = new FormData();
    formDate.append("file", file);
    updateAvatar(formDate).then(() => {
      checkAuth().then((res) => {
        if (res) dispatch(setUser(res));
        window.location.reload();
      });
    });
  }

  function changeVisibility(isVisible) {
    setEdit(isVisible);
  }

  return (
    <div>
      <button
        className="transparent-button updateTools editAvatar"
        onClick={() => setEdit(true)}
      >
        <UilPen size={16} />
      </button>
      <Modal isOpen={isEdit}>
        <div className="editAvatarField">
          <input
            type="file"
            class="custom-file-input"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <button onClick={uploadFile}>Upload</button>
          <button onClick={() => setEdit(false)}>Exit</button>
        </div>
      </Modal>
    </div>
  );
};

export default UpdateUserProfile;
