export const scrollTo = (offset: number) => {
  const root = document.getElementById("root");
  root?.scrollTo({
    top: offset,
    behavior: "smooth",
  });
};
