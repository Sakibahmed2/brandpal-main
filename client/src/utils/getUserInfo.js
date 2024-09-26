import { decodeToken } from "./jwtDecode";
import { getFromLocalStorage } from "./local-storage";

export const getUserInfo = () => {
  const accessToken = getFromLocalStorage("token");

  if (accessToken) {
    const decodeData = decodeToken(accessToken);
    return {
      ...decodeData,
    };
  }
};
