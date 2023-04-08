import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Navi = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
            <div className="container ms-lg-5 px-0">
                <div className="">
                    <h1 className="fw-bold fs-1 d-flex">
                        <i className="fa fa-circle fs-6 my-auto pt-2 text-info" aria-hidden="true"></i>
                        practo
                        <i className="fa fa-circle fs-6 my-auto pt-2 text-info" aria-hidden="true"></i>
                    </h1>
                </div>
                <button
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    className="navbar-toggler me-3"
                    data-bs-target="#navbarSupportedContent"
                    data-bs-toggle="collapse"
                    type="button"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="container">
                        <ul className="container navbar-nav mb-lg-0 ">
                            <li className="nav-item">
                                <a className="nav-link " href="#">Find Doctors</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"> Video Consult </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"> Medicines </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"> Lab Tests </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"> Surgeries </a>
                            </li>
                        </ul>
                    </div>
                    <div className="dropdown ">
                        <button
                            className="btn btn-light dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            For Corporates
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li>
                                <a className="dropdown-item" href="#">
                                    Health & Wellness Plans
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#"> Group Insurence </a>
                            </li>
                        </ul>
                    </div>
                    <div className="dropdown">
                        <button
                            className="btn btn-light dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            For Providers
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li>
                                <a className="dropdown-item" href="#"> Practo Prime </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#"> Software for providers </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    List your practice for free
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#"> ABDM </a>
                            </li>
                        </ul>
                    </div>
                    <div className="dropdown">
                        <button
                            className="btn btn-light dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Security&help
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li>
                                <a className="dropdown-item" href="#"> Data security </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#"> Help </a>
                            </li>
                        </ul>
                    </div>
                    <div className="loginbtn">
                        <button className="btn btn-outline-info">Login/Signup</button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navi;