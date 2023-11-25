import React from 'react'
import { Link } from 'react-router-dom'

/* --------------------------------- navbar --------------------------------- */
function Navbar() {
  return (
    <div><nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="#"></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-md-auto gap-2">
          <li className="nav-item rounded">
            <Link to={"/"} className="nav-link active" aria-current="page" href="#">Home</Link>
          </li>
          <li className="nav-item rounded">
            <Link to={"/about"} className="nav-link" href="#">About</Link>
          </li>
          <li className="nav-item rounded">
            <Link to={"/contact"} className="nav-link" href="#">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  </div>
  )
}

export default Navbar