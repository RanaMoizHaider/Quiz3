import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { Cookies } from "react-cookie";

const Logout = () => {

    let navigate = useNavigate();

    const logout = async () => {
        try {
            const res = await fetch('/logout', {
                method: 'GET',
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });

            if (res.status === 401 || !res) {
                window.alert("Please Logout Later");
            } else {
                localStorage.removeItem("jwt");
                // window.alert("Logged Out");
                // Cookies.remove("jwt");
                navigate("/");
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        logout();
    }, [])

    return (
        <div>

        </div>
    );
}
 
export default Logout;