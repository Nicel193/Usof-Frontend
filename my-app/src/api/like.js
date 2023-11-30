import $api from "./index";

export const getPostLikes = (id) => {
  return $api.get(`/posts/${id}/like`);
};

export const setPostLike = (id, type) => {
  return $api.post(`/posts/${id}/like?type=${type}`);
};

export const deletePostLike = (id) => {
  return $api.delete(`/posts/${id}/like`);
};