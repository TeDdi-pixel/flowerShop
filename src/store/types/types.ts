export type TypeGenerator = {
  generator: {
    flower: string;
    selectedFlower: number | null;
    flowersCount: string;
    prompt: string;
    generatedImage: string;
    genLoading: boolean;
    presetPrompt: number | null;
  };
};
