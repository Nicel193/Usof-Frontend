import { getUsertById } from "../api/user";

export async function getUserPicture(userId) {
  const response = await getUsertById(userId);

  return `http://localhost:3001/avatars/${response.data.profilePicture}`;
}
