import $api from "./index";

export const getUsertById = (userId) => {
  return $api.get(`/users/${userId}`);
};

export const updateAvatar = (formDate) => {
  $api.defaults.headers.common['Content-Type'] = 'multipart/form-data';

  return $api.post(`/users/uavatar`, formDate);
};