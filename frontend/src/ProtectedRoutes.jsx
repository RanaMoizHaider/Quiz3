import React from "react";
// import { Route } from 'react-router';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = (auth) => {
    
    return auth ? <Outlet /> : <Navigate to="/" />;

    // return (
    //     <div>
    //         <Route {...rest} render={(props) => {
    //             if (auth) return <Component {...props} />
    //             if(!auth) return <Navigate to={{path : '/', state: {from : props.location}}} />
    //         }} />

    //     </div>
    // );
}
 
export default ProtectedRoutes;