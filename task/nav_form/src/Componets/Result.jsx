import React from "react";
import { useParams } from "react-router-dom";

const Result = () => {
  const { title } = useParams();
  console.log(title, "result..............")
  const bookData = [
    {

      title: "As Good As My Word",
      desc: "KM Chandrashekhar",
    },
    {

      title: "Made In India",
      desc: "Amitabh Kant",
    },
    {
      title: "Monsoon",
      desc: "Abhay K",
    },
  ];
  const result = bookData.filter((e) => e.title === title);
  console.log(result, "result");
  return (
    <div>
      <div>
        <h1>{result[0].title}</h1>
        <h2>{result[0].desc}</h2>
      </div>
    </div>
  );
};

export default Result;
