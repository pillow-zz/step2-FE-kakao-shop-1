import "../../styles/molecules/ProductInformationColumn.css";
import { comma } from "../../utils/convert";
import Photo from "../atoms/Photo";

const staticServerUri = process.env.REACT_APP_PATH || "";

const ProductInformationColumn = ({ product }) => {
  const { productName, price, image } = product;
  return (
    <div className="product-information-column">
      <div className="w-full max-w-[300px]">
        <Photo
          src={staticServerUri + `/images/${product.id}.jpg`}
          alt={productName}
        />
      </div>
      <div className="border">
        <h1 className="name text-xl">{productName}</h1>
        <p className="price text-xl">{comma(price)}원</p>
      </div>
    </div>
  );
};

export default ProductInformationColumn;
