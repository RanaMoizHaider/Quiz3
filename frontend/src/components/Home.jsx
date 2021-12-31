import React from "react";
import CallToAction from "./CallToAction";
import Team from "./Team";

const Home = () => {
    return (
        <div>
            <header className="masthead">
                <div className="container px-5">
                    <div className="row gx-5 align-items-center">
                        <div className="col-lg-6">
                            <div className="mb-5 mb-lg-0 text-center text-lg-start">
                                <h1 className="display-1 lh-1 mb-3">
                                    The Only Link You will Ever Need
                                </h1>
                                <p className="lead fw-normal text-muted mb-5">
                                    Connect audiences to all of your content with
                                    just one link
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="masthead-device-mockup">
                                <svg
                                    className="circle"
                                    viewBox="0 0 100 100"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <defs>
                                        <linearGradient
                                            id="circleGradient"
                                            gradientTransform="rotate(45)"
                                        >
                                            <stop
                                                className="gradient-start-color"
                                                offset="0%"
                                            ></stop>
                                            <stop
                                                className="gradient-end-color"
                                                offset="100%"
                                            ></stop>
                                        </linearGradient>
                                    </defs>
                                    <circle cx="50" cy="50" r="50"></circle>
                                </svg>
                                <svg
                                    className="shape-1 d-none d-sm-block"
                                    viewBox="0 0 240.83 240.83"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <rect
                                        x="-32.54"
                                        y="78.39"
                                        width="305.92"
                                        height="84.05"
                                        rx="42.03"
                                        transform="translate(120.42 -49.88) rotate(45)"
                                    ></rect>
                                    <rect
                                        x="-32.54"
                                        y="78.39"
                                        width="305.92"
                                        height="84.05"
                                        rx="42.03"
                                        transform="translate(-49.88 120.42) rotate(-45)"
                                    ></rect>
                                </svg>
                                <svg
                                    className="shape-2 d-none d-sm-block"
                                    viewBox="0 0 100 100"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle cx="50" cy="50" r="50"></circle>
                                </svg>
                                <div className="device-wrapper">
                                    <div
                                        className="device"
                                        data-device="iPhoneX"
                                        data-orientation="portrait"
                                        data-color="black"
                                    >
                                        <div className="screen bg-black">
                                        <video
                                                muted="muted"
                                                autoPlay
                                                loop=""
                                                className="homePageVideos"
                                            >
                                                <source
                                                    src="/assets/img/demo-screen.mp4"
                                                    type="video/mp4"
                                                />
                                            </video>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* Quote/testimonial aside */}
            <aside className="text-center bg-gradient-primary-to-secondary">
                <div className="container px-5">
                    <div className="row gx-5 justify-content-center">
                        <div className="col-xl-8">
                            <div className="h2 fs-1 text-white mb-4">
                                "An intuitive solution to a common problem that we
                                all face, wrapped up in a single link!"
                            </div>
                            <img
                                src="/assets/img/tnw-logo.svg"
                                alt="..."
                                className="imgSize"
                            />
                        </div>
                    </div>
                </div>
            </aside>
            {/* App features section */}
            <section id="features">
                <div className="container px-5">
                    <div className="row gx-5 align-items-center">
                        <div className="col-lg-8 order-lg-1 mb-5 mb-lg-0">
                            <div className="container-fluid px-5">
                                <div className="row gx-5">
                                    <div className="col-md-6 mb-5">
                                        
                                        <div className="text-center">
                                            <i
                                                className="
                                                    bi-phone
                                                    icon-feature
                                                    text-gradient
                                                    d-block
                                                    mb-3
                                                "
                                            ></i>
                                            <h3 className="font-alt">
                                                Responsive Design
                                            </h3>
                                            <p className="text-muted mb-0">
                                                Open your link on any device
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-5">
                                        
                                        <div className="text-center">
                                            <i
                                                className="
                                                    bi-link-45deg
                                                    icon-feature
                                                    text-gradient
                                                    d-block
                                                    mb-3
                                                "
                                            ></i>
                                            <h3 className="font-alt">
                                                Unlimited Links
                                            </h3>
                                            <p className="text-muted mb-0">
                                                Link to as many places as you need
                                                with unlimited links
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-5 mb-md-0">
                                        
                                        <div className="text-center">
                                            <i
                                                className="
                                                    bi-instagram
                                                    icon-feature
                                                    text-gradient
                                                    d-block
                                                    mb-3
                                                "
                                            ></i>
                                            <h3 className="font-alt">Social Icons</h3>
                                            <p className="text-muted mb-0">
                                                Make your social platforms easy to
                                                discover and analyse their
                                                performance with analytics.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        
                                        <div className="text-center">
                                            <i
                                                className="
                                                    bi-bar-chart
                                                    icon-feature
                                                    text-gradient
                                                    d-block
                                                    mb-3
                                                "
                                            ></i>
                                            <h3 className="font-alt">Analytics</h3>
                                            <p className="text-muted mb-0">
                                                Know how much traffic your Link gets
                                                and which links get clicked on and
                                                when.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 order-lg-0">
                            
                            <div className="features-device-mockup">
                                <svg
                                    className="circle"
                                    viewBox="0 0 100 100"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <defs>
                                        <linearGradient
                                            id="circleGradient"
                                            gradientTransform="rotate(45)"
                                        >
                                            <stop
                                                className="gradient-start-color"
                                                offset="0%"
                                            ></stop>
                                            <stop
                                                className="gradient-end-color"
                                                offset="100%"
                                            ></stop>
                                        </linearGradient>
                                    </defs>
                                    <circle cx="50" cy="50" r="50"></circle>
                                </svg>
                                <svg
                                    className="shape-1 d-none d-sm-block"
                                    viewBox="0 0 240.83 240.83"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <rect
                                        x="-32.54"
                                        y="78.39"
                                        width="305.92"
                                        height="84.05"
                                        rx="42.03"
                                        transform="translate(120.42 -49.88) rotate(45)"
                                    ></rect>
                                    <rect
                                        x="-32.54"
                                        y="78.39"
                                        width="305.92"
                                        height="84.05"
                                        rx="42.03"
                                        transform="translate(-49.88 120.42) rotate(-45)"
                                    ></rect>
                                </svg>
                                <svg
                                    className="shape-2 d-none d-sm-block"
                                    viewBox="0 0 100 100"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle cx="50" cy="50" r="50"></circle>
                                </svg>
                                <div className="device-wrapper">
                                    <div
                                        className="device"
                                        data-device="iPhoneX"
                                        data-orientation="portrait"
                                        data-color="black"
                                    >
                                        <div className="screen bg-black">
                                            
                                            <video
                                                muted="muted"
                                                autoPlay
                                                loop=""
                                                className="homePageVideos"
                                            >
                                                <source
                                                    src="/assets/img/demo-screen.mp4"
                                                    type="video/mp4"
                                                />
                                            </video>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Basic features section */}
            <section className="bg-light">
                <div className="container px-5">
                    <div
                        className="
                            row
                            gx-5
                            align-items-center
                            justify-content-center justify-content-lg-between
                        "
                    >
                        <div className="col-12 col-lg-5">
                            <h2 className="display-4 lh-1 mb-4">
                                Enter a new age of simplification
                            </h2>
                            <p className="lead fw-normal text-muted mb-5 mb-lg-0">
                                In this world of hassel you cannot make someone wait
                                to see all your social links to connect with you AND
                                you can't bulk up your bio with all the links. The
                                best solution to that is to use our service and
                                create a global link for EVERYTHING.
                            </p>
                        </div>
                        <div className="col-sm-8 col-md-6">
                            <div className="px-5 px-sm-0">
                                <img
                                    className="img-fluid rounded-circle"
                                    src="https://source.unsplash.com/u8Jn2rzYIps/900x900"
                                    alt="..."
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* About */}
            <section className="page-section" id="about">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">HOW IT WORKS</h2>
                        <h3 className="section-subheading text-muted">
                            Lorem ipsum dolor sit amet consectetur.
                        </h3>
                    </div>
                    <ul className="timeline">
                        <li>
                            <div className="timeline-image">
                                <img
                                    className="rounded-circle img-fluid"
                                    src="/assets/img/about/1.jpg"
                                    alt="..."
                                />
                            </div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h4>Step 1</h4>
                                    <h4 className="subheading">Create Account</h4>
                                </div>
                                <div className="timeline-body">
                                    <p className="text-muted">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Sunt ut voluptatum eius
                                        sapiente, totam reiciendis temporibus qui
                                        quibusdam, recusandae sit vero unde, sed,
                                        incidunt et ea quo dolore laudantium
                                        consectetur!
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li className="timeline-inverted">
                            <div className="timeline-image">
                                <img
                                    className="rounded-circle img-fluid"
                                    src="/assets/img/about/2.jpg"
                                    alt="..."
                                />
                            </div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h4>Step 2</h4>
                                    <h4 className="subheading">Add all your links</h4>
                                </div>
                                <div className="timeline-body">
                                    <p className="text-muted">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Sunt ut voluptatum eius
                                        sapiente, totam reiciendis temporibus qui
                                        quibusdam, recusandae sit vero unde, sed,
                                        incidunt et ea quo dolore laudantium
                                        consectetur!
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="timeline-image">
                                <img
                                    className="rounded-circle img-fluid"
                                    src="/assets/img/about/3.jpg"
                                    alt="..."
                                />
                            </div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h4>Step 3</h4>
                                    <h4 className="subheading">Create a Global Link</h4>
                                </div>
                                <div className="timeline-body">
                                    <p className="text-muted">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Sunt ut voluptatum eius
                                        sapiente, totam reiciendis temporibus qui
                                        quibusdam, recusandae sit vero unde, sed,
                                        incidunt et ea quo dolore laudantium
                                        consectetur!
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li className="timeline-inverted">
                            <div className="timeline-image">
                                <img
                                    className="rounded-circle img-fluid"
                                    src="/assets/img/about/4.jpg"
                                    alt="..."
                                />
                            </div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h4>Step 4</h4>
                                    <h4 className="subheading">
                                        Share your Global Link
                                    </h4>
                                </div>
                                <div className="timeline-body">
                                    <p className="text-muted">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Sunt ut voluptatum eius
                                        sapiente, totam reiciendis temporibus qui
                                        quibusdam, recusandae sit vero unde, sed,
                                        incidunt et ea quo dolore laudantium
                                        consectetur!
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li className="timeline-inverted">
                            <div className="timeline-image">
                                <h4>
                                    Be Part
                                    <br />
                                    Of Our
                                    <br />
                                    Story!
                                </h4>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
            <Team />
            <CallToAction />
        </div>
    );
}
 
export default Home;