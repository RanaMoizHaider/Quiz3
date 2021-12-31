import './App.css';
// import { useEffect, useState } from "react";
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import Logout from './components/Logout';
import Navbar from './components/Navbar';
import PageNotFound from './components/PageNotFound';
import Register from './components/Register';
import { Route, Routes } from 'react-router';

function App() {

    // const [auth, setauth] = useState(false);

    // const isLoggedIn = async () => {
    //     try {
    //         const res = await fetch('/auth', {
    //             method: 'GET',
    //             headers: {
    //                 Accept: "application/json",
    //                 "Content-Type": "application/json"
    //             },
    //             credentials: "include"
    //         });

    //         if (res.status === 200) {
    //             setauth(true);
    //         } else {
    //             setauth(false);
    //         }

    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // useEffect(() => {
    //     isLoggedIn();
    // }, []);

    return (
        <>
            <Navbar />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/login' element={<Login />} />
                <Route exact path='/register' element={<Register />} />
                <Route exact path='/dashboard' element={<Dashboard />} />
                <Route exact path='/logout' element={<Logout />} />
                <Route path='*' element={<PageNotFound />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
