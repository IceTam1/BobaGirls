import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "/client/store";

const Syrups = ({ products, addToCart }) => {
  return (
    <div className="content">
<<<<<<< HEAD
      <h2 className="productsyr">Boba Girls Syrups</h2>
=======
     <h2 className="productsyr">Boba Girls Syrups</h2>
>>>>>>> ba244fcdb1c563eb665c34127177d2d7ec02f57e
      {
        <div>
            <ul className="teaproducts">
              {products
              .filter((product) => product.key === "syrup")
              .map((product) => {
                  return (
                  <li className="teadiv" key={product.id}>
                      <img src={product.imageUrl} />
                      <Link className="productname1" to={`/products/${product.id}`}>{product.name}</Link>
                      <div className="teaprice">${product.price}</div>

                      <button
                      className="addtocart"
                      onClick={() => addToCart(product)}
                      >
                      Add To Cart
                      </button>
                  </li>
                  );
                })}
            </ul>
        </div>
      }
    </div>
  );
}

const mapState = ({ products }) => {
  return {
    products,
  };
};

const mapDispatch = (dispatch, { history }) => {
  return {
    addToCart: (product, quantity) =>
      dispatch(addToCart(product, quantity, history)),
  };
};

export default connect(mapState, mapDispatch)(Syrups);
