import React, { useEffect, useState } from "react";

const Cart = () => {
    const [data, setdata] = useState([]);
          const arr = localStorage.getItem("cart")
            ? JSON.parse(localStorage.getItem("cart"))
    : [];
    useEffect(() => {
      setdata([...arr]);
    }, []);
  
  const handalCancle = (ind) => {
    arr.splice(ind, 1)
    localStorage.setItem("cart", arr)
    setdata(arr)
  }
  
  console.log(data);
    return (
      <>
        <div className="container">
          <h2>Shopping Cart</h2>
        <div className="row">

          {data.map((val, ind) => (
            <div className="col-4" key={ind}>
              <div className="card mt-3" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 class="card-title">{val.pname}</h5>
                  <p class="card-text">{val.dec}</p>
                  <p class="card-text">{val.price}</p>
                  <button onClick={()=>handalCancle(ind)}>cancle</button>
                </div>
              </div>
            </div>
          ))}
            </div>
        </div>
      </>
    );
};

export default Cart;
