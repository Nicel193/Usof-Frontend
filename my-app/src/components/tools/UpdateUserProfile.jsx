import React, { useState } from "react";

import Modal from "../Modal";
import { updateAvatar } from "../../api/user";

const UpdateUserProfile = () => {
  const [isEdit, setEdit] = useState(true);
  const [file, setFile] = useState(undefined);

  async function uploadFile() {
    const formDate = new FormData();
    formDate.append("file", file);
    updateAvatar(formDate)
      .then()
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <>
      <Modal isOpen={isEdit}>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <button onClick={uploadFile}>Upload</button>
      </Modal>
    </>
  );
};

export default UpdateUserProfile;
