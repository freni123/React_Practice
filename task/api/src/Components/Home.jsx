import axios from "axios";
import React, { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { deleteData, getData, postData, updateData, url } from "../constant";
import { deleteApi, get_api, post_api, updateAPI } from "../Api/Api";
import Swal from "sweetalert2";

const Home = () => {
  const [data, setdata] = useState([]);
  const [updateinput,setUpdateInput] = useState({});
  const [input,setInput] = useState({})

  const fname = useRef();
  const lname = useRef();
  const age = useRef();
  const inputHandler = (e) => {
    setInput({...input, [e.target.name]:e.target.value})
}

  const saveData = async () => {
    const result = {
      fname: fname.current.value,
      lname: lname.current.value,
      age: age.current.value,
    };

    /* -------------------------------- post api -------------------------------- */
    const res = await post_api(url, postData, result);
    console.log(res);
    setdata([...data, res]);
    get_api();

    Swal.fire({
      title: "Added.....!",
      text: "Your data add successfuly!",
      icon: "success",
    });

    console.log(result);
  };
  /* ------------------------------- datadelete ------------------------------- */
  const dataDelete = async (id, index) => {
    console.log(id, "id");
    console.log(index, "index");

    // await deleteApi(url, deleteData, id);

    // setdata(data.splice(0, index));
    // setdata(data.filter((one_)=>one_.id !== id))
    setdata(
      data.filter((e) => {
        return e.id !== id;
      })
    );
    Swal.fire({
      title: "Deleted.....!",
      text: "Your data delete successfuly!",
      icon: "success",
    });
  };
/* ------------------------------- update api ------------------------------- */
const inputUpdate = (e) => {
  setUpdateInput({...updateinput, [e.target.name]:e.target.value})
}
const updateHandler = (ind) => {
  setUpdateInput(data[ind])
}
const changeExist = () => {
  updateAPI(url,updateData,updateinput.id,updateinput).then((res)=>{
      console.log(res);
      get_api(url,getData).then((res)=>{
          setdata([res.data]);
      })
  })
}



  useEffect(() => {
    get_api(url, getData).then((res) => {
      //   console.log(res, "res");
      setdata(res);
    });
  }, []);

  console.log(data, "data");

  return (
    <>
      <div class="container">
        <div class="form-label">
          <div>
            <label for="name">Fname:-</label>
            <input
              id="fname"
              type="text"
              placeholder="your fname"
              name="fname"
              ref={fname}
              onChange={inputHandler}
            />
          </div>

          <div>
            <label>Lname:-</label>
            <input
              id="lname"
              type="lname"
              placeholder="Your lname"
              name="lname"
              ref={lname}
              onChange={inputHandler}
            />
          </div>

          <div>
            <label for="age">Age:-</label>
            <input id="age" type="number" placeholder="age" name="age" ref={age}  onChange={inputHandler}/>
          </div>

          <button
            class="btn btn--form"
            onClick={saveData}
            type="submit"
            value=""
          >
            Submit
          </button>
        </div>
      </div>
      <div>
    <input name='fname' value={updateinput.fname} onChange={inputUpdate}/>
    <input name='lname' value={updateinput.lname} onChange={inputUpdate}/>
    <input name='age' value={updateinput.age} onChange={inputUpdate}/>

    <button type='button' onClick={changeExist}>Update</button>
    </div>


      {data?.map((val, ind) => {
        return (
          <>
            <div class="col-4">
              <div class="card mt-3" style={{ width: "18rem", margin: "3rem" }}>
                <div class="card-body">
                  <h5 class="card-title">{val.fname}</h5>
                  <p class="card-text">{val.lname}</p>
                  <p class="card-text">{val.age}</p>
                  <button class="btn btn-form"
                    onClick={() => dataDelete(val.id)}
                    style={{
                      width: "250",
                      alignSelf: "center",
                      margin: "20px",
                    }}
                  >
                    Delete
                  </button>
                  <button class="btn btn-form" onClick={() => updateHandler(val.id, ind)}>
                    Update
                  </button>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Home;
