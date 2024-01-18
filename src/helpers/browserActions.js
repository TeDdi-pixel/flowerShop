import Cookies from "js-cookie";

export const getFromLocalStorage = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};

export const saveToLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getFromCookies = (key) => {
  const data = Cookies.get(key);
  return data ? JSON.parse(data) : null;
};

export const saveToCookies = (key, data) => {
  Cookies.set(key, JSON.stringify(data), { expires: 7 });
};
