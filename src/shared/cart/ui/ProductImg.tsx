const ProductImg = ({ img }: { img: string }) => {
  return (
    <a data-fancybox="gallery" href={img} >
      <img
        src={img}
        alt="flower"
        className="cart__product-img"
        width="215"
        height="197"
      />
    </a>
  );
};

export default ProductImg;
