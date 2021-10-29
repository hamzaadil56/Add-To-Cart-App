import React from "react";
import {
  add_item,
  add_to_cart,
  subtract_item,
  remove_item,
} from "./Redux/action/action";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

const Item = ({ id, price, title, image, piece, item }) => {
  const dispatch = useDispatch();

  return (
    <div key={id} className="card mb-3" style={{ maxWidth: "540px" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={image} className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{price}</p>
            <p>Pieces: {piece}</p>
            <button
              className="btn btn-light"
              onClick={() => dispatch(add_item(id))}
            >
              +
            </button>
            <button
              className="btn btn-danger"
              onClick={() => dispatch(subtract_item(id))}
            >
              -
            </button>
            <button
              className="btn btn-warning"
              onClick={() => dispatch(remove_item(id))}
            >
              remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Item;
