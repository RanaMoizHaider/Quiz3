import React from "react";

const CallToAction = () => {
    return (
        <>
        {/* Call to action section */}
        <section className="cta">
            <div className="cta-content">
                <div className="container px-5">
                    <h2 className="text-white display-1 lh-1 mb-4">
                        Stop bulking it up.
                        <br />
                        Share one link.
                    </h2>
                    
                    <a
                        className="btn btn-outline-light py-3 px-4 rounded-pill"
                        href="/register"
                    >
                        <span className="d-flex align-items-center">
                            <span className="small">Sign Up Now</span>
                        </span>
                    </a>
                </div>
            </div>
        </section>
        </>
    );
}
 
export default CallToAction;