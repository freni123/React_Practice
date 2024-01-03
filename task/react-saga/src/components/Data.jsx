import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DELETE_PRODUCT_PROGRESS,
  POST_PRODUCT_PROGRESS,
  PUT_PRODUCT_PROGRESS,
} from "../redux-saga/admin/action/action";
import Swal from "sweetalert2";
import { Box, Button, TextField, Typography } from "@mui/material";

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
      position: "top-end",
      icon: "success",
      title: "Your Product add successfuly!",
      showConfirmButton: false,
      timer: 1500,
    });

    dispatch({ type: POST_PRODUCT_PROGRESS, payload: data });
    console.log(data);
    name.current.value = "";
    price.current.value = "";
  };
  /* ----------------------------- delete product ----------------------------- */
  const handalDelete = (val) => {
    dispatch({
      type: DELETE_PRODUCT_PROGRESS,
      payload: val,
    });
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your Product delete successfully!",
          showConfirmButton: false,
          timer: 1000,
        });
      }
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
    name.current.value = "";
    price.current.value = "";
  };

  return (
    <>
      <Box m="2.5rem 30rem" border=".1rem solid" borderRadius="1rem">
        <Box m="1rem">
          <Typography variant="h6" textAlign="center" marginBottom="1rem">
            Product List
          </Typography>

          <TextField
            required
            placeholder="Enter your Product Name"
            label="Product Name"
            name="productName"
            variant="outlined"
            inputRef={name}
            value={view.productName || ""}
            onChange={handal}
            sx={{ marginRight: 4 }}
          />
          <TextField
            placeholder="Enter your Product Price"
            label="Product Price"
            name="price"
            required
            variant="outlined"
            inputRef={price}
            value={view.price || ""}
            onChange={handal}
          />
        </Box>
        <Box textAlign="center" mb="2rem">
          <Button variant="contained" onClick={handleSubmit}>
            Submit
          </Button>
          <Button
            variant="contained"
            style={{ margin: "1rem" }}
            onClick={handalUpdate}
          >
            update
          </Button>
        </Box>
      </Box>

      <div className="row">
        {product.product?.map((val, ind) => (
          <div className="col-4" key={ind}>
            <div className="card mt-3" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">{val.productName}</h5>
                <p className="card-text">{val.price}</p>
                <Button variant="contained" onClick={() => handalDelete(val)}>
                  Delete
                </Button>
                <Button
                  variant="contained"
                  style={{ margin: "1rem" }}
                  onClick={() => setview(val, ind)}
                >
                  Update
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Data;
