// import { Box, Button, TextField, Typography } from "@mui/material";
// import React, { useEffect, useRef, useState } from "react";
// import Swal from "sweetalert2";

// const Home = () => {
//   const [data, setdata] = useState();
//   const [view, setview] = useState({});
//   const [ind, setind] = useState();
//   const fname = useRef();
//   const lname = useRef();

//   const arr = localStorage.getItem("data")
//     ? JSON.parse(localStorage.getItem("data"))
//     : [];

//   /* -------------------------------- data add -------------------------------- */
//   function handleSubmit() {
//     const data = {
//       firstName: fname.current.value,
//       lastName: lname.current.value,
//     };
//     arr.push(data);
//     localStorage.setItem("data", JSON.stringify(arr));
//     setdata(arr);
//   }
//   /* ------------------------------- delete data ------------------------------ */
//   const handleDelete = (ind) => {
//     arr.splice(ind, 1);
//     localStorage.setItem("data", JSON.stringify(arr));
//     setdata([...arr]);
//     Swal.fire({
//       title: "Deleted successfully !",
//       text: "You clicked the button!",
//       icon: "success",
//     });
//   };
//   /* ------------------------------- update data ------------------------------ */
//   const handleView = (val, ind) => {
//     setview(val);
//     setind(ind);
//   };
//   const handle = (e) => {
//     setview({ ...view, [e.target.name]: e.target.value });
//   };
//   const handleUpdate = () => {
//     arr.splice(ind, 1, view);
//     localStorage.setItem("data", JSON.stringify(arr));
//     setdata([...arr]);
//   };

//   useEffect(() => {
//     setdata([...arr]);
//   }, []);

//   console.log(data);
//   return (
//     <>
//       <Box m="4.5rem 39rem" border=".1rem solid" borderRadius="1rem">
//         <Box m="1rem">
//           <Typography variant="h6" textAlign="center" marginBottom="1rem">
//             User Form
//           </Typography>

//           <TextField
//             required
//             placeholder="Enter your First Name"
//             label="First Name"
//             name="fname"
//             variant="outlined"
//             inputRef={fname}
//             value={view.fname || ""}
//             onChange={handle}
//             sx={{ marginRight: 4 }}
//           />

//           <TextField
//             placeholder="Enter your Last Name"
//             label="Last Name"
//             name="lname"
//             required
//             variant="outlined"
//             inputRef={lname}
//             value={view.lname || ""}
//             onChange={handle}
//           />
//         </Box>
//         <Box textAlign="center" mb="2rem">
//           <Button variant="contained" onClick={handleSubmit}>
//             Submit
//           </Button>
//           <Button
//             variant="contained"
//             style={{ margin: "1rem" }}
//             onClick={handleUpdate}
//           >
//             update
//           </Button>
//         </Box>
//       </Box>
//       <div class="row col-md-12">
//         {data?.map((val, ind) => {
//           return (
//             <div class="col-4" key={ind}>
//               <div class="card mt-3" style={{ width: "18rem", margin: "3rem" }}>
//                 <div class="card-body">
//                   <h1 class="card-title">{val.firstName}</h1>
//                   <h4 class="card-text">{val.lastName}</h4>
//                   <Button variant="contained" onClick={() => handleDelete(ind)}>
//                     Delete
//                   </Button>
//                   <Button
//                     variant="contained"
//                     style={{ margin: "1rem" }}
//                     onClick={() => handleView(val, ind)}
//                   >
//                     view
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// };

// export default Home;
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import Cart from "./Cart";

const Home = () => {
  const navigate = useNavigate();
  const [data, setdata] = useState([]);
  // const [cart, setcart] = useState([]);

  const arr = JSON.parse(localStorage.getItem("details")) || [];

  console.log(arr);
  useEffect(() => {
    setdata(arr);
  }, []);

  const handleAddToCart = (val, ind) => {
    console.log(val);
    localStorage.setItem("cart", JSON.stringify([val]));
    navigate("./cart");
  };
  return (
    <>
      <div className="container">
        <div className="row">
          {data?.map((val, ind) => {
            return (
              <div className="col-4" key={ind}>
                <div className="card mt-3" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <h5 className="card-title">{val.pname}</h5>
                    <p className="card-text">{val.dec}</p>
                    <p className="card-text">{val.price}</p>
                    <button onClick={() => handleAddToCart(val, ind)}>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* <Cart data={cart} /> */}
    </>
  );
};

export default Home;

