// import { useState } from "react";
import "./App.css";
import Counter from "./Components/Counter";
import { data } from "./Components/Data";
import Form from "./Components/Form";

function App() {
  // let [value, setvalue] = useState("");

  //  const submit = () => {
  //   const data = {
  //     firstName: value,
  //   };
  //   console.log(data);
  // };

  // const handle = (e) => {
  //   setvalue(e.target.value);
  // };

  return (
    <>
    <Counter/>
    {/* <Form data={data}/> */}
    {/* <Form data={data}/> */}
    </>
  //   <div className="App">
  //     <input type="text" name="fname" onChange={handle} />
  //     <button type="submit" onClick={() => console.log(value)}>
  //       Submit
  //     </button>

  //     <h1>{value}</h1>
  //   </div>
   )
}

export default App;
