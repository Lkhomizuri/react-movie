import React from "react";
import "./header.css"
import {Link} from "react-router-dom";


const Header = () =>{
  return (
    <section id="navbar-section">
        <nav className="navbar navbar-expand-lg  ">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">Movie</a>
              <button className="navbar-toggler bg-info " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon "></span>
              </button>
              <div className="collapse navbar-collapse  justify-content-end" id="navbarNavDropdown">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link active navbar-link" aria-current="page" to="/">მთავარი</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link navbar-link" to="/movie">ფილმები</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link navbar-link" to="/serial">სერიალები</Link>
                  </li>
                  
                </ul>
              </div>
            </div>
          </nav>
        </section>
  );
}

export default Header;