import ProductCard from "../../entities/productCard/ProductCard";
import { notify } from "../../helpers/notify";
import { useAddToCart } from "../../hooks/useAddToCart";
import useData from "../../hooks/useData";
import { TypeProduct } from "../../store/types/types";

const Catalog = () => {
  const { data } = useData(false, "sharedCatalog");
  const { handleAddToCart } = useAddToCart();
  const addToCart = (item: TypeProduct) => {
    handleAddToCart(item);
    notify("Product successfully added!", "layout");
  };
  return (
    <div className="top-rated__cards">
      {data.map((item) => (
        <ProductCard
          key={item.id}
          title={item.title}
          img={item.imageUrl}
          price={item.price}
          text={"Add to cart"}
          handleAddToCart={() => addToCart(item)}
        />
      ))}
    </div>
  );
};

export default Catalog;
