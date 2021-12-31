import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Register = () => {

    let navigate = useNavigate();

    const [user, setUser] = useState({
        firstname: "",
        lastname: "",
        username: "",
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
        const { firstname, lastname, username, email, password } = user;

        try {
            const res = await fetch('/register', { 
                method: 'POST',
                headers: {
                    'Content-Type': "application/json",
                },
                body: JSON.stringify({
                    firstname, lastname, username, email, password
                })
            })
            if (res.status === 400 || !res) {
                window.alert("Already Used Details");
            } else {
                window.alert("Registered Successfully");
                navigate("/login");
            }
        } catch (error) {
            
        }
    }

    return (
        <div>
            <aside className="text-center">
                <div className="container px-5">
                    <div className="row gx-5 justify-content-center shadow">
                        <div className="col-md-6 p-5 text-left">
                            <h1 className="display-4 fw-bolder">Register</h1>
                            <form onSubmit={handleSubmit} method="POST">
                                <div className="mb-3">
                                    <label htmlFor="inputFirstname" className="form-label">First Name</label>
                                    <input type="text" className="form-control" id="inputFirstname" name="firstname" value={user.firstname} onChange={handleInput} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="inputLastname" className="form-label">Last Name</label>
                                    <input type="text" className="form-control" id="inputLastname" name="lastname" value={user.lastname} onChange={handleInput} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="inputUsername" className="form-label">Username</label>
                                    <input type="text" className="form-control" id="inputUsername" aria-describedby="usernameWarning" name="username" value={user.username} onChange={handleInput} required />
                                    <div className="form-text" id="usernameWarning">Username cannot be changed.</div>
                                </div>
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
                                    <input type="checkbox" className="form-check-input" id="tandcCheck" required />
                                    <label className="form-check-label" htmlFor="tandcCheck">I Agree with Terms and Conditions.</label>
                                </div>
                                <button type="submit" className="btn btn-primary bg-gradient-primary-to-secondary rounded-pill pb-2 w-50">Register</button>
                            </form>
                        </div>
                        <div className="col-md-6 d-flex flex-column align-items-center justify-content-center form text-white bg-gradient-primary-to-secondary p-5">
                            <h1 className="display-4 fw-bolder">Hello Friend</h1>
                            <p className="lead text-center">Enter Your Credentials to Register and get all your links at <b>site.com/YourUsername</b></p>
                            <h5 className="mb-4">OR</h5>
                            <Link to="/login" className="btn btn-outline-light rounded-pill pb-2 w-50">Login</Link>
                        </div>
                    </div>
                </div>
            </aside>
        </div>
    );
}
 
export default Register;