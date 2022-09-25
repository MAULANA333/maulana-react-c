import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return(
        <div className=" d-flex flex-column justify-content-start align-items-center">
            <link to="/animal" className="mb-2">
            <link to="/form">
            <button className="btn btn-primary">Animal Page</button>
            </link>
                <button className="btn btn-success">Form</button>
            </link>
        </div>
    )
}

export default Home;
