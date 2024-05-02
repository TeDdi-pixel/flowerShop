import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../types/types";

export const generateAnswer = createAsyncThunk<string>(
  "generator/generateAnswer",
  async (_, { getState }) => {
    const { generatedImage } = (getState() as RootState).generator;
    const options = {
      method: "POST",
      url: "https://api.edenai.run/v2/image/question_answer",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_EDEN_API_KEY}`,
      },
      data: {
        providers: "google",
        file_url: generatedImage,
        question:
          "Create a short name for this bouquet. In the name of bouquet try to put flower's name and number of flowers. I need only the name of bouquet as an answer without quotation marks",
        fallback_providers: "google",
      },
    };
    try {
      const response = await axios.request(options);
      const title = response.data.google.answers[0].replace('"', "").trim();
      return title;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);
