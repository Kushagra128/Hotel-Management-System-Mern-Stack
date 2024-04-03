import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {
    return (
        <div>
            <header className="header_area">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        {/* Brand and toggle get grouped for better mobile display */}
                        <Link className="navbar-brand logo_h" to="/">
                            <img src="image/Logo.png" alt="" />
                        </Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        {/* Collect the nav links, forms, and other content for toggling */}
                        <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                            <ul className="navbar-nav menu_nav ml-auto">
                                <li className="nav-item active"><Link className="nav-link" to="/">Home</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/about">About us</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/accomodation">Accomodation</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/gallery">Gallery</Link></li>
                                <li className="nav-item submenu dropdown">
                                    <Link href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Blog</Link>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item"><Link className="nav-link" to="/blog">Blog</Link></li>
                                        <li className="nav-item"><Link className="nav-link" to="/blog-single">Blog Details</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item"><Link className="nav-link" to="/elements">Elements</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        </div>
    )
}