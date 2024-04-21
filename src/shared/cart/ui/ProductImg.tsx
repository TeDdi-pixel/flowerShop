const ProductImg = ({
  img,
  width,
  height,
}: {
  img: string;
  width?: string;
  height?: string;
}) => {
  return (
    <a data-fancybox="gallery" href={img}>
      <img
        src={img}
        alt="Bouquet"
        className="cart__product-img"
        style={{ width: width, height: height }}
        width="215"
        height="197"
      />
    </a>
  );
};

export default ProductImg;
