import { Link } from "@remix-run/react";
import React from "react";

function About() {
    return(
        <div>
            <h2>About Page</h2>
            <Link to="/">back to home</Link>
        </div>
    );
};

export default About;