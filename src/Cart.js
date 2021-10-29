import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  add_to_cart,
  add_item,
  get_total_items,
  get_total_price,
} from "./Redux/action/action";
import Profile from "./Profile";
import Logout from "./Logout";
import Item from "./Item";
// import items from "./data";
import { useState } from "react";
import { useEffect } from "react";

function Cart() {
  const dispatch = useDispatch();
  const totalPrice = useSelector((state) => state.shop.totalPrice);
  const totalItems = useSelector((state) => {
    console.log(state);
    return state.shop.totalItems;
  });

  const items = useSelector((state) => {
    return state.shop.itemsInShop;
  });
  const cart = useSelector((state) => {
    return state.shop.cartItems;
  });

  const addToCart = (id) => {
    dispatch(add_to_cart(id));
    dispatch(add_item(id));
  };
  useEffect(() => {
    dispatch(get_total_items());
  }, [cart]);

  return (
    <div>
      <h1>
        Hello World <br /> A little Redux Project. YaaY!
      </h1>
      <h3>Cart</h3>
      <h3>{totalItems}</h3>

      <h2>For Logged in users only</h2>
      <Profile />
      <Logout />
      {items.map((item) => {
        return (
          <div
            key={item.id}
            className="card mb-3"
            style={{ maxWidth: "540px" }}
          >
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={item.image}
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.price}</p>
                  <button
                    key={item.id}
                    className="btn btn-primary"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight"
                    onClick={() => addToCart(item.id)}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <div
        className="offcanvas offcanvas-end"
        tabIndex={-1}
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h5 id="offcanvasRightLabel">Offcanvas right</h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div className="offcanvas-body">
          {cart.length === 0 && (
            <div>
              <h3>Your Cart is empty</h3>
            </div>
          )}
          {cart.map((item) => {
            return <Item key={item.id} {...item} item={item} />;
          })}
        </div>
        <h2>Total Price:{totalPrice} </h2>
      </div>
    </div>
  );
}

export default Cart;
