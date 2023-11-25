import React, { useEffect, useState } from 'react'
import {data} from './Object'

const Form = () =>{

    const [result,selresult] = useState([]);
    const [value,setvalue] = useState({});

    const handle = () => {
        selresult({...value,[e.target.name]:e.target.value});
    };
    const handlesubmit = () => {
        data([...result,value]);
    };
    const handledelete = (name) => {
        selresult(result.filter((e)=> e.author !== name));
    }
    useEffect(()=> {
        selresult(data)
    });


  return (
    <div>
        Title:
        <input type='text' name="title" onChange={handle}/>
        Author:
        <input type='text' name="author" onChange={handle}/>
        <button onClick={handlesubmit}>Add</button>
    </div>
    {result?.map((val, ind) => {
        return (
          <div class="col-xl-3 col-sm-6 col-12">
          <div className="card" style={{ width: 250 }} key={ind}>
            <div className="card-body">
              <h5 className="card-title">{val.title}</h5>
              <p className="card-text">{val.author}</p>
            </div>
            <button
              onClick={() => handledelete(val.author)}
              style={{ width: "50%", alignSelf: "center" }}
              className="btn btn-primary"
            >
              Delete
            </button>
          </div>
          </div>
        );
      })}
  )
}

export default Form