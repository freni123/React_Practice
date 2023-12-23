import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";

const Home = () => {
  const productname = useRef();
  const productdec = useRef();
  const productprice = useRef();
  const [data, setdata] = useState([]);
  const [view, setview] = useState({});
  const [indexex, setindex] = useState();

  const arr = localStorage.getItem("details")
    ? JSON.parse(localStorage.getItem("details"))
    : [];

  /* ------------------------------- product add ------------------------------ */
  function handleSubmit() {
    const newData = {
      productname: productname.current.value,
      productdec: productdec.current.value,
      productprice: Number(productprice.current.value),
    };
    Swal.fire({
      title: "Added.....!",
      text: "Your data add successfuly!",
      icon: "success",
    });
    arr.push(newData);
    localStorage.setItem("details", JSON.stringify(arr));
    setdata([...arr]);
  }

  useEffect(() => {
    setdata([...arr]);
  }, []);

  /* ----------------------------- delete product ----------------------------- */
  const deleteProduct = (indexex) => {
    arr.splice(indexex, 1);
    localStorage.setItem("details", JSON.stringify(arr));
    setdata([...arr]);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "error",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted.....!",
          text: "Your data delete successfuly.",
          icon: "success",
        });
      }
    });
  };

  /* ----------------------------- update product ----------------------------- */
  const handleView = (val, index) => {
    setview(val);
    setindex(index);
  };
  const handle = (e) => {
    setview({ ...view, [e.target.name]: e.target.value });
  };

  const updateProduct = () => {
    arr.splice(indexex, 1, view);
    localStorage.setItem("details", JSON.stringify(arr));
    setdata([...arr]);
    Swal.fire({
      title: "Updated successfully !",
      text: "You clicked the button!",
      icon: "success",
    });
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
            name="productname"
            variant="outlined"
            inputRef={productname}
            value={view.productname || ""}
            onChange={handle}
            sx={{ marginRight: 4 }}
          />

          <TextField
            placeholder="Enter your Product Description"
            label="Product Description"
            name="productdec"
            required
            variant="outlined"
            inputRef={productdec}
            value={view.productdec || ""}
            onChange={handle}
            sx={{ marginRight: 4 }}
          />
          <TextField
            placeholder="Enter your Product Price"
            label="Product Price"
            name="productprice"
            required
            variant="outlined"
            inputRef={productprice}
            value={view.productprice || ""}
            onChange={handle}
          />
        </Box>
        <Box textAlign="center" mb="2rem">
          <Button variant="contained" onClick={handleSubmit}>
            Submit
          </Button>
          <Button
            variant="contained"
            style={{ margin: "1rem" }}
            onClick={updateProduct}
          >
            update
          </Button>
        </Box>
      </Box>

      <div className="row">
        {data?.map((val, index) => (
          <div className="col-4" key={index}>
            <div className="card mt-3" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">{val.productname}</h5>
                <p className="card-text">{val.productdec}</p>
                <p className="card-text">{val.productprice}</p>
                <Button
                  variant="contained"
                  onClick={() => deleteProduct(index)}
                >
                  Delete
                </Button>
                <Button
                  variant="contained"
                  style={{ margin: "1rem" }}
                  onClick={() => handleView(val, index)}
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

export default Home;
