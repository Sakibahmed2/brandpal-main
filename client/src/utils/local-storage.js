export const setUserInfo = (token) => {
  return localStorage.setItem("token", token);
};

export const removeUserInfo = () => {
  return localStorage.removeItem("token");
};

export const getFromLocalStorage = () => {
  return localStorage.getItem("token");
};
