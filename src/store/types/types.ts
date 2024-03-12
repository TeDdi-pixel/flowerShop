import { AsyncThunkAction } from "@reduxjs/toolkit";
import { TypeBurgerMenu } from "../../entities/burgerMenu/types/types";
import firebase from "firebase/auth";

export type TypeGenerator = {
  flowers: string[];
  prompt: string;
  generatedImage: string;
  genLoading: boolean;
  presetPrompt: number | null;
  promptNote: boolean;
  promptNoteHidden: boolean;
  bouquetFlowers: string[];
  moreFlowersOpen: boolean;
};

export type TypeBouquetThunk = {
  generateBouquet: () => AsyncThunkAction<string[], void, {}>;
};

export type TypeImageCartForm = {
  isFormOpen: boolean;
  generatedTitle: string;
  genLoading: boolean;
  productId: string;
  isSharedFormOpen: boolean;
};

export type TypeProduct = {
  id: string;
  imageUrl: string;
  price: number;
  quantity: number;
  title: string;
  flowers?: string[];
  text: string;
  size?: string[];
};

export type TypeInitCart = {
  cartData: TypeProduct[];
  cookiesEnabled: boolean;
};

export type TypeCart = {
  emptyCart: boolean;
  cartData: TypeProduct[] | [];
  totalPrice: number;
};

export type TypeUser = {
  userIsSignIn: boolean;
  userData: string | null;
  storageUserData: firebase.UserCredential;
  profilePhoto: string;
  uid: string | null;
};

export type TypeCookies = {
  cookiesEnabled: boolean;
  cookiesMessage: boolean;
  cookiesError: boolean;
  cookiesErrorMessage: boolean;
};

export type TypeServices = {
  loading: boolean;
};

export type RootState = {
  generator: TypeGenerator;
  burgerMenu: TypeBurgerMenu;
  imageCartForm: TypeImageCartForm;
  cart: TypeCart;
  user: TypeUser;
  cookies: TypeCookies;
  services: TypeServices;
};
