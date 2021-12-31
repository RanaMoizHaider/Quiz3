import React, { useState, useEffect } from "react";

const Dashboard = () => {

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
            const res = await fetch('/', { 
                method: 'PUT',
                headers: {
                    'Content-Type': "application/json",
                },
                body: JSON.stringify({
                    firstname, lastname, username, email, password
                })
            })
            if (res.status === 400 || !res) {
                window.alert("Not Updated");
            } else {
                window.alert("Updated Successfully");
                // navigate("/login");
            }
        } catch (error) {
            
        }
    }

    const getUser = async () => {
        
        const { firstname, lastname, username, email, password } = user;

        try {
            const res = await fetch('/', { 
                method: 'GET',
                headers: {
                    'Content-Type': "application/json",
                },
                body: JSON.stringify({
                    firstname, lastname, username, email, password
                })
            })
            if (res.status === 400 || !res) {
                window.alert("Not Updated");
            } else {
                window.alert("Updated Successfully");
                console.log(res)
                // navigate("/login");
            }
        } catch (error) {
            
        }
    }

    useEffect(() => {
        getUser();
    }, [])

    return (
        <div>
            <aside className="text-center">
                <div className="container px-5">
                    <div className="row gx-5 justify-content-center shadow">
                        <div className="col-md-6 p-5 text-left">
                            <h1 className="display-4 fw-bolder">Dashboard</h1>
                            <form onSubmit={handleSubmit} method="PUT">
                                <div className="mb-3">
                                    <label htmlFor="inputUsername" className="form-label">Username</label>
                                    <input type="text" className="form-control" id="inputUsername" name="username" value={user.username} disabled/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="inputFirstname" className="form-label">First Name</label>
                                    <input type="text" className="form-control" id="inputFirstname" name="firstname" value={user.firstname} onChange={handleInput} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="inputLastname" className="form-label">Last Name</label>
                                    <input type="text" className="form-control" id="inputLastname" name="lastname" value={user.lastname} onChange={handleInput} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="inputEmail" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="inputEmail" name="email" value={user.email} onChange={handleInput} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="inputPassword" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="inputPassword" name="password" value={user.password} onChange={handleInput} required />
                                </div>
                                <button type="submit" className="btn btn-primary bg-gradient-primary-to-secondary rounded-pill pb-2 w-50">Update Profile</button>
                            </form>
                        </div>
                    </div>
                </div>
            </aside>
        </div>
    );
}
 
export default Dashboard;