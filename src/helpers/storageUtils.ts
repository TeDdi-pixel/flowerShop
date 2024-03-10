import Cookies from "js-cookie";

export const getFromLocalStorage = (key: string): any => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};

export const saveToLocalStorage = (key: string, data: any): void => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getFromCookies = (key: string): any => {
  const data = Cookies.get(key);
  return data ? JSON.parse(data) : null;
};

export const saveToCookies = (key: string, data: any): void => {
  Cookies.set(key, JSON.stringify(data), { expires: 7 });
};
