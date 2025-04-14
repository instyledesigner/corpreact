import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className='row'>
        <nav className="navbar fixed-top bg-body-tertiary" aria-label="Light offcanvas navbar">
    <div className="container">
      <Link className="navbar-brand" to="/">BROOK</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbarLight" aria-controls="offcanvasNavbarLight" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbarLight" aria-labelledby="offcanvasNavbarLightLabel">
        <div className="offcanvas-header">
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className="nav-item" data-bs-dismiss="offcanvas">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item" data-bs-dismiss="offcanvas">
              <Link className="nav-link" to="/aboutus">About Us</Link>
            </li>
            <li className="nav-item" data-bs-dismiss="offcanvas">
              <Link className="nav-link" to="/">Link</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </Link>
              <ul className="dropdown-menu">
                <li data-bs-dismiss="offcanvas"><Link className="dropdown-item" to="/">Action</Link></li>
                <li data-bs-dismiss="offcanvas"><Link className="dropdown-item" to="/">Another action</Link></li>
                <li data-bs-dismiss="offcanvas"><Link className="dropdown-item" to="/">Something else here</Link></li>
              </ul>
            </li>
          </ul>
          <form className="d-flex mt-3" role="search">
            <input className="form-control border-primary rounded-0 me-0" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-primary text-white rounded-0" type="submit">Search</button>
          </form>
        </div>
      </div>
    </div>
  </nav>
    </div>
  )
}

export default Header