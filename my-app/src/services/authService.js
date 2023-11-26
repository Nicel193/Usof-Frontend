import axios from "axios";

export default async function checkAuth() {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      withCredentials: true,
    };
    const response = await axios.get(
      "http://localhost:3001/api/auth/refresh",
      config
    );
    console.log(response);
    localStorage.setItem("token", response.data.accessToken);
    return true;
  } catch (e) {
    console.log(e.response);
    return false;
  }
}
