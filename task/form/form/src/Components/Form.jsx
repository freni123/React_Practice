import React, { useState } from 'react';

function Form(props) {
  const { data } = props;
  const [value, setValue] = useState({ title: "", author: "" });
  const [submittedData, setSubmittedData] = useState([]);

  const submit = (e) => {
    e.preventDefault();
    setSubmittedData([...submittedData, value]);

    setValue({ title: "", author: "" });
  };

  const handle = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form action="" onSubmit={submit} >
        <label>Title:</label>
        <input type="text" name="title" value={value.title} onChange={handle} />
        <label>Author:</label>
        <input type="text" name="author" value={value.author} onChange={handle} />
        <button type="submit">Submit</button>
      </form>

      {submittedData.map((val, ind) => (

        <div className="card" key={ind} style={{width:"12rem"}}>
          <div className="card-body">
            <h5 className="card-title">{val.title}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="">
              {val.author}
            </a>
          </div>
        </div>
      ))}

      {/* Display the existing data as cards */}
      {data?.map((val, ind) => (
       <div className="row">
        <div className="col-3">
        <div className="card" key={ind} style={{width:"12rem"}}>
          <div className="card-body">
            <h5 className="card-title">{val.title}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="">
              {val.author}
            </a>
          </div>
        </div>
        </div>
       </div>
      ))}
    </>
  );
}

export default Form;

