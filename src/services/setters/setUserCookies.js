import Cookies from "js-cookie";

export const setUserCookies = async (cookiesEnabled, uid,cartData) => {
  if (cookiesEnabled && uid) {
    Cookies.set("user", JSON.stringify(uid), { expires: 7 });
  } else if (cookiesEnabled) {
    Cookies.set("cart", JSON.stringify(cartData), { expires: 7 });
    Cookies.set("user", JSON.stringify(uid), { expires: 7 });
  } else {
    console.warn("Unable to set cookies due to missing or invalid data");
  }
};
