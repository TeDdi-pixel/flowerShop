import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../types/types";
import { storage } from "../../services/firebase/firebase-config";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import md5 from "md5"; // Используйте любую библиотеку для создания хеша

export const storeImage = createAsyncThunk<string>(
  "generator/storeImage",
  async (folder, { getState }) => {
    const { generatedImage } = (getState() as RootState).generator;
    try {
      const response = await fetch(generatedImage);
      const blob = await response.blob();

      const arrayBuffer = await new Response(blob).arrayBuffer();
      const hash = md5(arrayBuffer);

      const fileName = `${folder}/${hash+ new Date()}`;

      const existingFileRef = ref(storage, fileName);
      try {
        await getDownloadURL(existingFileRef);

        return getDownloadURL(existingFileRef);
      } catch (error) {
        const snapshot = await uploadBytes(existingFileRef, blob);
        const downloadURL = await getDownloadURL(snapshot.ref);
        return downloadURL;
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);
