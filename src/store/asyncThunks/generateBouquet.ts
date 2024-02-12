import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../types/types";
import axios from "axios";

export const generateBouquet = createAsyncThunk<string>(
  "generator/generateBouquet",
  async (_, { getState }) => {
    const { flower, flowersCount, prompt } = (getState() as RootState)
      .generator;
    const options = {
      method: "POST",
      url: "https://api.edenai.run/v2/image/generation",
      headers: {
        authorization: `Bearer ${import.meta.env.VITE_EDEN_API_KEY}`,
      },
      data: {
        providers: "replicate",
        text: `${
          prompt != ""
            ? prompt
            : `draw me a realistic image of bouquet of ${flowersCount} ${flower} on the pink to white gradient behind on the background`
        }`,
        resolution: "512x512",
        fallback_providers: "",
      },
    };
    try {
      const response = await axios.request(options);
      return response.data.replicate.items[0].image_resource_url;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);
