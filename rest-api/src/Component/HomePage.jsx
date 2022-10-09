import { createDraftSafeSelector } from "@reduxjs/toolkit";
import React from "react";

import React from "react";
import { Stack, Spinner, image } from "react-bootstrap";


const HomePage = (
    {
        cards,
        isLoading
    }
    ) => {
    return (
        <div>
            {
                isLoading
                ?
                <Spinner animation="border" size="lg" role="status" variant="primary"/>
                :
                "Loaded"
            }
        </div>
    );
};

export default HomePage;