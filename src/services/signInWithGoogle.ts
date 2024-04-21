import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "./firebase/firebase-config";
import { saveToCookies } from "../helpers/storageUtils";

type TypeUser = {
  uid: string | null;
  profilePhoto: string | null;
  isAdmin: boolean;
  displayName: string | null;
};

export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    const user: TypeUser = {
      uid: result.user.uid,
      profilePhoto: result.user.photoURL,
      isAdmin:
        result.user.uid === import.meta.env.VITE_ADMIN_UID ||
        result.user.uid === import.meta.env.VITE_ADMIN2_UID,
      displayName: result.user.displayName,
    };
    console.log(user.isAdmin);
    
    saveToCookies("user", user);
    return user;
  } catch (error: any) {
    console.log(error.message);
    return null;
  }
};
