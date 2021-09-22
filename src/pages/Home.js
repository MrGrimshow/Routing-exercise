import React from 'react'
import { NavLink } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/servicesDetails">Services details</NavLink>
            <h1>Home</h1>
            <p> bdsajgjfjasfhsjkhkdhfsdsfhwqdhwqebNB </p>
            </>
        </div>
    )
}
