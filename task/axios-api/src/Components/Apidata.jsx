import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";

function Apidata() {
  const [data, setdata] = useState([]);
  const [update, setupdate] = useState({});
  const title = useRef();
  const author = useRef();
  /* --------------------------------- Get Data -------------------------------- */
  const getData = () => {
    axios.get("http://localhost:3001/posts").then((res) => {
      setdata(res.data || []);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  function handlesubmit() {
    const result = {
      title: title.current.value,
      author: author.current.value,
    };
    console.log(data);
    /* -------------------------------- Add Data -------------------------------- */
    axios.post("http://localhost:3001/posts", result).then((res) => {
      console.log(res.data);
      setdata([...data, res.data]);

      title.current.value = "";
      author.current.value = "";
      Swal.fire({
        title: "Added.....!",
        text: "Your data add successfuly!",
        icon: "success",
      });
    });
  }

  /* ------------------------------- Data Delete ------------------------------ */
  const deleteData = (id) => {
    axios.delete(`http://localhost:3001/posts/${id}`).then(() => {
      console.log(id);
      setdata(
        data.filter((e) => {
          return e.id !== id;
        })
      );
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
    });
  };
  console.log(data, "data");
  /* ------------------------------- Data Update ------------------------------ */
  const updateData = (id, ind) => {
    console.log(id, "id..........");
    console.log(ind, "index..........");

    const final = data[ind];
    setupdate(final);
    console.log(final);
  };
  const finalUpdate = (e) => {
    setupdate({ ...update, [e.target.name]: e.target.value });
  };

  const final = () => {
    console.log(update, "update");

    axios
      .put(`http://localhost:3001/posts/${update.id}`, update)
      .then((res) => {
        console.log(res.data, "update res");
        const dataUpdate = [...data];
        console.log(dataUpdate);

        const index = dataUpdate.findIndex((item) => item.id === update.id);
        dataUpdate[index] = res.data;
        setdata(dataUpdate);
      });
      Swal.fire({
        title: "update.....!",
        text: "Your data update successfuly!",
        icon: "success",
      });
  };

  return (
    <div className="container">
      <div>
        <label>Title:-</label>
        <input
          type="text"
          name="title"
          ref={title}
          style={{ margin: "10px" }}
        />
        <label>Author:-</label>
        <input type="text" name="author" ref={author} />
        <button onClick={handlesubmit} style={{ margin: "10px" }}>
          Submit
        </button>
        <br />
        <br />
        <input
          type="text"
          name="title"
          value={update.title}
          onChange={finalUpdate}
          style={{ margin: "5px" }}
        />
        <input
          type="text"
          name="author"
          value={update.author}
          onChange={finalUpdate}
        />
        <button onClick={final}>Update</button>
        <button style={{ margin: "5px" }}>Cancel</button>
        <div class="row col-md-12">
          {data?.map((val, ind) => {
            return (
              <div class="col-4">
                <div
                  class="card mt-3"
                  style={{ width: "18rem", margin: "3rem" }}
                >
                  <div class="card-body">
                    <h5 class="card-title">{val.title}</h5>
                    <p class="card-text">{val.author}</p>
                    <button
                      onClick={() => deleteData(val.id)}
                      style={{
                        width: "250",
                        alignSelf: "center",
                        margin: "20px",
                      }}
                    >
                      Delete
                    </button>
                    <button onClick={() => updateData(val.id, ind)}>
                      Update
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Apidata;
