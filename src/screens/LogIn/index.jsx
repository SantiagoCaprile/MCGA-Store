import React from "react";
import { Link } from "react-router-dom";

const LogIn = () => {
    return (
    <div className="container d-flex justify-content-center">
        <div className="card  w-50">
            <h1 className="card-header">Log In</h1>
            <div className="card-body text-center">
                <form>
                    <div className="form-group p-2">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div className="form-group p-2">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Password" />
                    </div>
                    <Link to="/products" className="btn btn-primary p-2">Iniciar Sesión</Link>
                </form>
            </div>
        </div>
    </div>
    )
};

export default LogIn;