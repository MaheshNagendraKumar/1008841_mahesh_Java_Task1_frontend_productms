import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className=''>
      <nav className="navbar navbar-expand-lg  bg-secondary">
        <div className="container-fluid">
          <Link to='/'>
           {  /*<span className="navbar-brand text-decoration-none" >Home</span>*/}
           <img className="me-2 rounded-2" src='https://st3.depositphotos.com/27847728/35980/v/450/depositphotos_359809210-stock-illustration-initial-letter-logo-vector-template.jpg' style={{width:"60px", height:'38px'}} alt='logo'/>
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex me-auto" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-warning" type="submit">Search</button>
            </form>
            <ul className="navbar-nav mb-4 mb-lg-0">
              <Link to="/addproduct" >
                <li className="nav-item">
                  <span className="nav-link active text-decoration-none" aria-current="page"  >Add Product</span>
                </li>
              </Link>
              <Link to="/topproduct" >
                <li className="nav-item">
                  <span className="nav-link active text-decoration-none" aria-current="page" >Top 3 Product</span>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header