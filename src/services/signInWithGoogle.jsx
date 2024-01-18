import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "./firebase/firebase-config";
import { setStorageUserData } from "../store/slices/userSlice";

export const signInWithGoogle = async (dispatch) => {
  const provider = new GoogleAuthProvider();
  let uid;
  try {
    const result = await signInWithPopup(auth, provider);
    uid = result.user.uid;
    dispatch(setStorageUserData(result));
  } catch (error) {
    console.log(error.message);
  }
  return { uid };
};
