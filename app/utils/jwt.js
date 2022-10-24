import jwt from "jwt-decode";

export const decodedToken = (token) => {
  return jwt(token);
};
