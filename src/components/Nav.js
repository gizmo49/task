import React, { Component } from 'react';

export default class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-static-top navbar-expand-xl bg-transaparent">
                <div className="container pt-2">
                    <div className="navbar-toggler navbar-toggler-right collapsed full-taste" type="" data-toggle="collapse"
                        id="tolnav" data-target="#navbarNavDropdown">
                        <span> </span>
                        <span> </span>
                        <span> </span>
                    </div>

                    <div className="collapse navbar-collapse" id="">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#!">TRIPS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#!">RECENTLY VIEWED</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#!">BOOKINGS</a>
                            </li>

                        </ul>
                    </div>

                </div>
            </nav>
        )
    }
}  