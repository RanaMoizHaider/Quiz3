import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {

    let navigate = useNavigate();
    
    const [user, setUser] = useState({
        email: "",
        password: "",
    })

    const handleInput = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        setUser({...user, [name]:value,})
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { email, password } = user;

        try {
            const res = await fetch('/login', {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    email, password
                })
            });

            if (res.status === 400 || !res) {
                window.alert("Invalid Credentials");
            } else {
                await localStorage.setItem("jwt", res.data);
                // window.alert("Logged In");
                navigate("/dashboard");
            }

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <aside className="text-center">
                <div className="container px-5">
                    <div className="row gx-5 shadow">
                        <div className="col-md-6 d-flex flex-column align-items-center justify-content-center form text-white bg-gradient-primary-to-secondary p-5">
                            <h1 className="display-4 fw-bolder">Welcome Back</h1>
                            <p className="lead text-center">Enter Your Credentials to Login</p>
                            <h5 className="mb-4">OR</h5>
                            <Link to="/register" className="btn btn-outline-light rounded-pill pb-2 w-50">Register</Link>
                        </div>
                        <div className="col-md-6 p-5">
                            <h1 className="display-4 fw-bolder">Login</h1>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="inputEmail" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" name="email" value={user.email} onChange={handleInput} required />
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="inputPassword" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="inputPassword" name="password" value={user.password} onChange={handleInput} required />
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                    <label className="form-check-label" htmlFor="exampleCheck1">Remember Me</label>
                                </div>
                                <button type="submit" className="btn btn-primary bg-gradient-primary-to-secondary rounded-pill pb-2 w-50">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </aside>
            {/* <div className="container">
                <div className="row">
                    <div className="cold-md-5 d-flex flex-column align-items-center form">
                        <h1 className="display-4 fw-bolder">Welcome Back</h1>
                        <p className="lead text-center">Enter Your Credentials to Login</p>
                        <h5 className="mb-4">OR</h5>
                        <Link to="/signup" className="btn btn-outline-light rounded-pill pb-2 w-50">Register</Link>
                    </div>
                </div>
            </div> */}
        </div>
    );
}
 
export default Login;