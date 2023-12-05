import $api from "./index";

export const getUsertById = (userId) => {
  return $api.get(`/users/${userId}`);
};
