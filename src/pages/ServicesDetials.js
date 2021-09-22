import React from 'react'
import { Link } from "react-router-dom";

export default function ServicesDetials() {
    return (
        <div>
            <Link to="/servicesDetails/12" >
                Go to details
            </Link>
            
            <Link to="/servicesDetails/190">
                Go to details
            </Link>
        </div>
    )
}
