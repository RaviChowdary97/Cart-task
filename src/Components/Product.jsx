import { useContext, useState } from "react";
import cartContext from "./Contextcart";

export const Product = ({ name, rating, poster, price }) => {
  const [isInCart, setIsInCart] = useState(false);
  const [cartUCtxt, setcartUCtxt] = useContext(cartContext);
  const handleAddToCart = () => {
    setIsInCart(true);
    setcartUCtxt(cartUCtxt + 1);
  };

  const handleRemoveFromCart = () => {
    setIsInCart(false);
    setcartUCtxt(cartUCtxt - 1);
  };

  return (
    <>
      <div
        className="card d-flex  flex-column  justify-content-center align-items-center"
        style={{
          width: "14rem",
          marginTop: "3%",
          marginLeft: "3.5%",
          height: "350px",
        }}
      >
        <img src={poster} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="text-center">{rating}</p>
          <p className="text-center">{price}</p>
          {isInCart ? (
            <button onClick={handleRemoveFromCart} className="btn btn-danger">
              Remove from Cart
            </button>
          ) : (
            <button onClick={handleAddToCart} className="btn btn-primary">
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </>
  );
};
