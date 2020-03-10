import React from "react";
import {Link} from "react-router-dom";

const MainPage = () => {
    return (
        <div>
            <h2>Home Page</h2>
            <h3> Hello there,</h3>
            <h5>it's a beautiful day</h5>
            <Link to="/Characters">CHARACTERS</Link>
            <h2>  </h2>
            <Link to="/Films">FILMS</Link>
            <h2>  </h2>
            <Link to="/Planets">PLANETS</Link>
        </div>
    );
};

export default MainPage;