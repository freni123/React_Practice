import React, { useEffect, useRef, useState } from "react";
import { deleteData, getAllData, saveItem, updateData } from "../firebase/functions/function";


function Register() {
  const [data, setData] = useState([]);
  const fname = useRef();
  const lname = useRef();
  const email = useRef();

  const save = async () => {
    const newData = {
      fname: fname.current.value,
      lname: lname.current.value,
      email: email.current.value,
    };

    await saveItem(newData);
    const allData = await getAllData();
    setData(allData);
  };
  /* ------------------------------- updateData ------------------------------- */

  const update = async (id) => {
    const updatedData = {
      fname: fname.current.value,
      lname: lname.current.value,
      email: email.current.value,
    };

    await updateData(id, updatedData);
    const allData = await getAllData();
    setData(allData);
  };

  /* ------------------------------- deleteData ------------------------------- */
  const remove = async (id) => {
    await deleteData(id);
    const allData = await getAllData();
    setData(allData);
  };

  useEffect(() => {
    const fetchData = async () => {
      const allData = await getAllData();
      setData(allData);
    };

    fetchData();
  }, []);



return (
  <div className="App">
    <div>
      First name:
      <input type="text" ref={fname} />
      Last name:
      <input type="text" ref={lname} />
      Email:
      <input type="text" ref={email} /> {/* Add this line */}
      <button onClick={save}>Save</button>
    </div>
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.fname} {item.lname} - {item.email} - {item.phone}
            <button onClick={() => update(item.id)}>Update</button>
            <button onClick={() => remove(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

}

export default Register;

