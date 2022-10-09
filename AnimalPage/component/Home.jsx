import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { increment } from "./feature/counterSlice";

const Home = () => {
    const count = useSelector((state)=> state.counter.value);
    const email = useSelector((state)=> state.user.email);
    const dispatch = useDispatch();
    return(
        <div className="d-flex flex-column align-items-center">
            <span className="display-6">Hello {email}</span>
            <span className="display-4">{count}</span>
            <Button className="mb-3" onClick={()=> dispatch(increment())}>+</Button>
            <Link to='/animal' className="mb-2">
                <button className="btn btn-primary">Animal Page</button>
            </Link>
            <Link to='/form'>
                <button className="btn btn-success">Form</button>
            </Link>
            <Link to='/read-article'>
                <button className="btn btn-success">Read Article</button>
            </Link>
            <Link to='/create-article'>
                <button className="btn btn-success">Create Article</button>
            </Link>
        </div>
    )
}

export default Home;