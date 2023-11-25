import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
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
  return (
    <div>
      <div className="row col-md-12">
        {bookData.map((val, ind) => {
          return (
            <div className="card" style={{ width: "18rem",margin:"3rem" }} key={ind}>
              <img
                className="card-img-top"
                src="https://m.media-amazon.com/images/I/71lIaBE3UbL._SX679_.jpg"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">{val.title}</h5>
                <p className="card-text">{val.desc}</p>

                <Link to={`/${val.title}`} className="btn btn-primary">
                  show
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
