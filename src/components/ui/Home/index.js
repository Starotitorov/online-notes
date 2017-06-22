import React from 'react';
import { Link } from 'react-router';
import './index.scss';

const Home = () =>
    <div className="site-wrapper">
        <div className="site-wrapper-inner">
            <div className="cover-container">
                <div className="masthead clearfix">
                    <div className="inner">
                        <h3 className="masthead-brand">Online notes</h3>
                        <nav className="nav nav-masthead">
                            <Link to="/signin" className="nav-link">
                                Sign in
                            </Link>
                            <Link to="/signup" className="nav-link">
                                Create an account
                            </Link>
                        </nav>
                    </div>
                </div>
                <div className="inner cover">
                    <h1 className="cover-heading">Online notes</h1>
                    <p className="lead">Online notes is a simple service for creating and editing notes online. Your notes stay updated across all your devices. No buttons to press. It just works. You are able to find notes quickly with instant searching.</p>
                    <p className="lead">
                        <Link to="/signup" className="btn btn-lg btn-secondary">
                            Create an account now
                        </Link>
                    </p>
                </div>
                <div className="mastfoot">
                    <div className="inner">
                        <p>Online notes, by <a href="https://github.com/Starotitorov">Starotitorov</a>.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>;

export default Home;
