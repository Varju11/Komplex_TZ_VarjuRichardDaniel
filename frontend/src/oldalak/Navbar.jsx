import React from "react";
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import '../oldalak/Navbar.css'


const Navbar = () => {
    const [menuOPen,setMenuOPen]= useState(false)
    return (
        <nav>
            <Link to="/" className="title">Felvételi</Link>
            <div className="menu" onClick={() =>
            {
                setMenuOPen(!menuOPen);
            }
            }>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOPen ? "open" : ""}>
                <li>
                    <NavLink to="/">Főoldal</NavLink>
                </li>
                <li>
                    <NavLink to="/valami">Valami</NavLink>
                </li>

            </ul>

        </nav>
    );

};
export default Navbar;