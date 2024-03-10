export type TypeCardButtonProps = {
  text: string;
  status?: boolean;
  addToCart?: () => void;
  handlePreset?: () => void;
  generateTitle?: (e: React.MouseEvent) => void;
  active?: boolean;
};
