import React, {useEffect, useState } from 'react';

const Navbar = () => {
  
  return (
    <>
       <nav className="navbar navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><b>News Aggregator</b> </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Sports</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Finance</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Bollywood</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Technology</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">GitHub Link</a>
        </li>
      </ul>
      </div>
      <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
        </div>
      </nav>
    </>
  );
};

export default Navbar;