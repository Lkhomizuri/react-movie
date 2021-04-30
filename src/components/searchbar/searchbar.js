import React from "react";
import "./searchbar.css"


const Searchbar = ({onSearchInput}) =>{
  return (
    <section id="Searchbar">
            <div className="input-group">
                <input type="search" className="form-control rounded search " placeholder="საძიებო სიტყვა..." onChange={onSearchInput} aria-label="Search"
                  aria-describedby="search-addon" />
                <button type="button" className="btn btn-outline-info">search</button>
              </div>
          </section>
  );
}

export default Searchbar;