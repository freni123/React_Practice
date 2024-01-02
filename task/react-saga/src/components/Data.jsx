import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DELETE_PRODUCT_PROGRESS,
  POST_PRODUCT_PROGRESS,
  PUT_PRODUCT_PROGRESS,
} from "../redux-saga/admin/action/action";
import Swal from "sweetalert2";

const Data = () => {
  const name = useRef();
  const price = useRef();
  const product = useSelector((state) => state.adminReducer);
  const [view, setview] = useState({});

  const dispatch = useDispatch();

  console.log(product, "product from data");

  /* --------------------------------- submit product--------------------------------- */
  const handleSubmit = () => {
    const data = {
      productName: name.current.value,
      price: price.current.value,
    };
    Swal.fire({
      title: "Added.....!",
      text: "Your Product add successfuly!",
      icon: "success",
    });

    dispatch({ type: POST_PRODUCT_PROGRESS, payload: data });

    console.log(data);
  };
  /* ----------------------------- delete product ----------------------------- */
  const handalDelete = (val) => {
    dispatch({
      type: DELETE_PRODUCT_PROGRESS,
      payload: val,
    });
  };
  /* ----------------------------- update product ----------------------------- */
  const handal = (e) => {
    setview((view) => ({ ...view, [e.target.name]: e.target.value }));
  };

  const handalUpdate = () => {
    dispatch({ type: PUT_PRODUCT_PROGRESS, payload: view });
    Swal.fire({
      title: "Updated successfully !",
      text: "You clicked the button!",
      icon: "success",
    });
  };

  return (
    <div>
      <label>ProductName:~</label>
      <input type="text" ref={name} />
      <label>Price:~</label>
      <input type="number" ref={price} />
      <button onClick={handleSubmit}>Add</button>
      <br />
      <input
        type="text"
        name="productName"
        value={view.productName}
        onChange={handal}
      ></input>
      <input
        type="text"
        name="price"
        value={view.price}
        onChange={handal}
      ></input>
      <button onClick={handalUpdate}>Update</button>

      <div className="row">
        {product.product?.map((val, ind) => {
          return (
            <div className="col-4" key={ind}>
              <div className="card mt-3" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">{val.productName}</h5>
                  <p className="card-text">{val.price}</p>
                  <button onClick={() => handalDelete(val)}>Delete</button>
                  <button onClick={() => setview(val)}>View</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Data;
