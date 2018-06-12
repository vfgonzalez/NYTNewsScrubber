import React, { Fragment } from "react";
import "./header.css"


const Header = () => (
    <Fragment>

        <nav className="navbar sticky-top navbar-dark bg-dark">
            <a className="navbar-brand" href="/">NYT Scrubber</a>

        </nav>
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">New York Times Scrubber</h1>
                <p className="lead">Search and Save your favorite Articles from the World's most popular News Source.</p>
            </div>
        </div>
        

    </Fragment>
)

export default Header;