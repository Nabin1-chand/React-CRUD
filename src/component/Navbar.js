import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg  navbar-dark bg-primary">
    <div className="container-fluid">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
          </li>
          <li className="nav-item">
            <Link  to ="/about" className="nav-link active" aria-current="page" >About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <Link className="btn btn-outline-light" to="/users/add">Add User</Link>
    </div>
  </nav>
    
  )
}

export default Navbar