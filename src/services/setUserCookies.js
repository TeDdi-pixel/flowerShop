import Cookies from "js-cookie";

export const setUserCookies = (cookiesEnabled, userData) => {
  if (cookiesEnabled && userData && userData.user && userData.user.uid) {
    Cookies.set("user", JSON.stringify(userData.user.uid), { expires: 7 });
  } else if (cookiesEnabled) {
    Cookies.set("user", JSON.stringify(userData), { expires: 7 });
  } else {
    console.warn("Unable to set cookies due to missing or invalid data");
  }
};
