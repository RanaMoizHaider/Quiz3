import React from "react";

const Footer = () => {
    return (
        <div>
            {/* Footer */}
            <footer className="bg-gradient-primary-to-secondary text-center py-5">
                <div className="container px-5">
                    <div className="text-white-50 small">
                        <div className="mb-2">
                            &copy; SP19-BSE-089 2021. All Rights Reserved.
                        </div>
                        <a href="/login">Login</a>
                        <span className="mx-1">&middot;</span>
                        <a href="/register">Register</a>
                        {/* <span className="mx-1">&middot;</span>
                        <a href="#">FAQ</a> */}
                    </div>
                </div>
            </footer>
        </div>
    );
}
 
export default Footer;