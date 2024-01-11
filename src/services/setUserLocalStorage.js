export const setUserLocalStorage = (userData) => {
  localStorage.setItem("user", JSON.stringify(userData));
};
