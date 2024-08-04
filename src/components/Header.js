import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-md">
                <div className="container-fluid container-fluid-navbar">
                        <NavLink to="/" className="navbar-brand">
                            <img src="logo.png" className='nav-logo' alt="logo image"/>
                        </NavLink>
                    <button className="navbar-toggler" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar">
                        <i className="fa-solid fa-bars"></i>
                    </button>
                    <div className="offcanvas offcanvas-start justify-content-end flex-grow-0" id="offcanvasNavbar">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title"></h5>
                            <button type="button" className="btn-close btn-close-dark" data-bs-dismiss="offcanvas"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <NavLink to='/' className="nav-link text-center">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to='/jobs' className="nav-link text-center">Jobs</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to='/companies' className="nav-link text-center">Companies</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to='/contact-us' className="nav-link text-center">Contact Us</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="btn-container">
                        {/* <NavLink to='/sign-up' className="btn btn-main btn-contact-md">Sign Up</NavLink> */}
                        <NavLink to='/sign-in' className="btn btn-primary btn-main btn-contact-md">Sign In</NavLink>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header