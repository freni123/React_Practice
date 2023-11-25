import React, { useEffect, useState } from "react";
import { bookData } from "./Object";

const Detalis = () => {
  const [result, setresult] = useState([]);
  const [val, setval] = useState({});

  const handle = (e) => {
    setval({ ...val, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    setresult([...result, val]);
  };
  const handleDelete = (name) => {
    console.log(name);
    setresult(result.filter((e) => e.author !== name));
  };
  useEffect(() => {
    setresult(bookData);
  },[]);
  return (
    <>
      {/* <div>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          onChange={handle}
          placeholder="Enter book title"
        />
        <label>Author:</label>
        <input
          type="text"
          name="author"
          onChange={handle}
          placeholder="Enter book author name"
        />
        <button onClick={handleSubmit}>Add Data</button>
      </div> */}
      {result?.map((val, ind) => {
        return (
          <div class="col-xl-3 col-sm-6 col-12">
          <div className="card" style={{ width: 250 }} key={ind}>
            <div className="card-body">
              <h5 className="card-title">{val.title}</h5>
              <p className="card-text">{val.author}</p>
            </div>
            <button
              onClick={() => handleDelete(val.author)}
              style={{ width: "50%", alignSelf: "center" }}
              className="btn btn-primary"
            >
              Delete
            </button>
          </div>
          </div>
        );
      })}
    </>
  );
};

export default Detalis;
