import $api from "./index";

export const getCommentById = (commetId) => {
    return $api.get(`/comment/${commetId}`);
}

export const getCommentsByPost = (postId) => {
    return $api.get(`/posts/${postId}/comments`);
}

export const createComment = (postId, content) => {
    return $api.post(`/posts/${postId}/comments`, content);
}

export const changeComment = (commetId, content) => {
    return $api.patch(`/comment/${commetId}`, content);
}