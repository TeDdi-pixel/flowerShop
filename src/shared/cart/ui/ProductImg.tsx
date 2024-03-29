const ProductImg = ({ img }: { img: string }) => {
  return (
    <a data-fancybox="gallery" href={img} >
      <img
        src={img}
        alt="Bouquet"
        className="cart__product-img"
        width="215"
        height="197"
      />
    </a>
  );
};

export default ProductImg;
