const AdminHeader =()=>{
    return (
        <>
          <div> 
            {/* <!-- main-header --> */}
                <div className="main-header side-header sticky nav nav-item" style={{marginBottom: "-63px"}}>
                    <div className="container-fluid main-container ">
                        <div className="main-header-left ">
                            <div className="responsive-logo"> <a href="index.html" className="header-logo" > <img
                                        src="/src/adminAssets/img/brand/logo.png" className="logo-1" alt="logo" /> <img
                                        src="/src/adminAssets/img/brand/logo-white.png" className="dark-logo-1" alt="logo" /> </a>
                            </div>
                            <div className="app-sidebar__toggle" data-bs-toggle="sidebar"> <a className="open-toggle"
                                    href="#"><i className="header-icon fe fe-align-left"></i></a> <a
                                    className="close-toggle" href="#"><i
                                        className="header-icons fe fe-x"></i></a>
                            </div>
                            <div className="main-header-center ms-3 d-sm-none d-md-none d-lg-block"> <input
                                    className="form-control" placeholder="Search for anything..." type="search" /> <button
                                    className="btn"><i className="fas fa-search d-none d-md-block"></i></button> </div>
                        </div>
                        <div className="main-header-right"> <button
                                className="navbar-toggler navresponsive-toggler d-lg-none ms-auto" type="button"
                                data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent-4"
                                aria-controls="navbarSupportedContent-4" aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon fe fe-more-vertical "></span> </button>
                            <div
                                className="mb-0 navbar navbar-expand-lg navbar-nav-right responsive-navbar navbar-dark p-0">
                                <div className="collapse navbar-collapse" id="navbarSupportedContent-4">
                                    <ul className="nav nav-item  navbar-nav-right ms-auto">
                                        <li className="">
                                            <div className="dropdown  nav-item countries"> <a href="#"
                                                    className="d-flex  nav-item nav-link country-flag1"
                                                    data-bs-toggle="dropdown" aria-expanded="false"> <span
                                                        className="avatar country-Flag me-0 align-self-center bg-transparent">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                                            className="flag-icon1">
                                                            <circle cx="256" cy="256" r="256" fill="#f0f0f0"></circle>
                                                            <g fill="#0052b4">
                                                                <path
                                                                    d="M52.92 100.142c-20.109 26.163-35.272 56.318-44.101 89.077h133.178L52.92 100.142zM503.181 189.219c-8.829-32.758-23.993-62.913-44.101-89.076l-89.075 89.076h133.176zM8.819 322.784c8.83 32.758 23.993 62.913 44.101 89.075l89.074-89.075H8.819zM411.858 52.921c-26.163-20.109-56.317-35.272-89.076-44.102v133.177l89.076-89.075zM100.142 459.079c26.163 20.109 56.318 35.272 89.076 44.102V370.005l-89.076 89.074zM189.217 8.819c-32.758 8.83-62.913 23.993-89.075 44.101l89.075 89.075V8.819zM322.783 503.181c32.758-8.83 62.913-23.993 89.075-44.101l-89.075-89.075v133.176zM370.005 322.784l89.075 89.076c20.108-26.162 35.272-56.318 44.101-89.076H370.005z">
                                                                </path>
                                                            </g>
                                                            <g fill="#d80027">
                                                                <path
                                                                    d="M509.833 222.609H289.392V2.167A258.556 258.556 0 00256 0c-11.319 0-22.461.744-33.391 2.167v220.441H2.167A258.556 258.556 0 000 256c0 11.319.744 22.461 2.167 33.391h220.441v220.442a258.35 258.35 0 0066.783 0V289.392h220.442A258.533 258.533 0 00512 256c0-11.317-.744-22.461-2.167-33.391z">
                                                                </path>
                                                                <path
                                                                    d="M322.783 322.784L437.019 437.02a256.636 256.636 0 0015.048-16.435l-97.802-97.802h-31.482v.001zM189.217 322.784h-.002L74.98 437.019a256.636 256.636 0 0016.435 15.048l97.802-97.804v-31.479zM189.217 189.219v-.002L74.981 74.98a256.636 256.636 0 00-15.048 16.435l97.803 97.803h31.481zM322.783 189.219L437.02 74.981a256.328 256.328 0 00-16.435-15.047l-97.802 97.803v31.482z">
                                                                </path>
                                                            </g>
                                                        </svg> </span>
                                                    <div className="my-auto"> <strong
                                                            className="me-2 ms-2 my-auto">English</strong>
                                                    </div>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-start  dropdown-menu-arrow"> <a
                                                        href="#" className="dropdown-item d-flex "> <span
                                                            className="avatar me-1 align-self-center bg-transparent"><img
                                                                src="/src/adminAssets/img/flag-imgs/french_flag.jpg"
                                                                alt="img" /></span>
                                                        <div className="d-flex"> <span className="mt-2">French</span> </div>
                                                    </a> <a href="#" className="dropdown-item d-flex">
                                                        <span className="avatar me-1 align-self-center bg-transparent"><img
                                                                src="/src/adminAssets/img/flag-imgs/germany_flag.jpg"
                                                                alt="img" /></span>
                                                        <div className="d-flex"> <span className="mt-2">Germany</span> </div>
                                                    </a> <a href="#" className="dropdown-item d-flex">
                                                        <span className="avatar me-1 align-self-center bg-transparent"><img
                                                                src="/src/adminAssets/img/flag-imgs/italy_flag.jpg"
                                                                alt="img" /></span>
                                                        <div className="d-flex"> <span className="mt-2">Italy</span> </div>
                                                    </a> <a href="#" className="dropdown-item d-flex">
                                                        <span className="avatar me-1 align-self-center bg-transparent"><img
                                                                src="/src/adminAssets/img/flag-imgs/russia_flag.jpg"
                                                                alt="img" /></span>
                                                        <div className="d-flex"> <span className="mt-2">Russia</span> </div>
                                                    </a> <a href="#" className="dropdown-item d-flex">
                                                        <span className="avatar me-1 align-self-center bg-transparent"><img
                                                                src="/src/adminAssets/img/flag-imgs/spain_flag.jpg"
                                                                alt="img" /></span>
                                                        <div className="d-flex"> <span className="mt-2">spain</span> </div>
                                                    </a> </div>
                                            </div>
                                        </li>
                                        <li className="dropdown nav-item main-layout"> <a
                                                className="new nav-link theme-layout nav-link-bg layout-setting"> <span
                                                    className="dark-layout"><svg xmlns="http://www.w3.org/2000/svg"
                                                        className="header-icon-svgs" width="24" height="24"
                                                        viewBox="0 0 24 24">
                                                        <path
                                                            d="M20.742 13.045a8.088 8.088 0 0 1-2.077.271c-2.135 0-4.14-.83-5.646-2.336a8.025 8.025 0 0 1-2.064-7.723A1 1 0 0 0 9.73 2.034a10.014 10.014 0 0 0-4.489 2.582c-3.898 3.898-3.898 10.243 0 14.143a9.937 9.937 0 0 0 7.072 2.93 9.93 9.93 0 0 0 7.07-2.929 10.007 10.007 0 0 0 2.583-4.491 1.001 1.001 0 0 0-1.224-1.224zm-2.772 4.301a7.947 7.947 0 0 1-5.656 2.343 7.953 7.953 0 0 1-5.658-2.344c-3.118-3.119-3.118-8.195 0-11.314a7.923 7.923 0 0 1 2.06-1.483 10.027 10.027 0 0 0 2.89 7.848 9.972 9.972 0 0 0 7.848 2.891 8.036 8.036 0 0 1-1.484 2.059z">
                                                        </path>
                                                    </svg></span> <span className="light-layout"><svg
                                                        xmlns="http://www.w3.org/2000/svg" className="header-icon-svgs"
                                                        width="24" height="24" viewBox="0 0 24 24">
                                                        <path
                                                            d="M6.993 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007S14.761 6.993 12 6.993 6.993 9.239 6.993 12zM12 8.993c1.658 0 3.007 1.349 3.007 3.007S13.658 15.007 12 15.007 8.993 13.658 8.993 12 10.342 8.993 12 8.993zM10.998 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2h-3zm17 0h3v2h-3zM4.219 18.363l2.12-2.122 1.415 1.414-2.12 2.122zM16.24 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.342 7.759 4.22 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z">
                                                        </path>
                                                    </svg></span> </a> </li>
                                        <li className="nav-link search-icon d-lg-none d-block">
                                            <form className="navbar-form" role="search">
                                                <div className="input-group"> <input type="text" className="form-control"
                                                        placeholder="Search" /> <span className="input-group-btn"> <button
                                                            type="reset" className="btn btn-default"> <i
                                                                className="fas fa-times"></i>
                                                        </button> <button type="submit"
                                                            className="btn btn-default nav-link resp-btn"> <svg
                                                                xmlns="http://www.w3.org/2000/svg" height="24px"
                                                                className="header-icon-svgs" viewBox="0 0 24 24"
                                                                width="24px" fill="#000000">
                                                                <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                                <path
                                                                    d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z">
                                                                </path>
                                                            </svg> </button> </span> </div>
                                            </form>
                                        </li>
                                        <li className="dropdown nav-item main-header-message "> <a className="new nav-link"
                                                href="#"><svg xmlns="http://www.w3.org/2000/svg"
                                                    className="header-icon-svgs" viewBox="0 0 24 24" fill="none"
                                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                                    strokeLinejoin="round">
                                                    <path
                                                        d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z">
                                                    </path>
                                                    <polyline points="22,6 12,13 2,6"></polyline>
                                                </svg><span className=" pulse-danger"></span></a>
                                            <div className="dropdown-menu">
                                                <div className="menu-header-content bg-primary text-start">
                                                    <div className="d-flex">
                                                        <h6 className="dropdown-title mb-1 tx-15 text-white fw-semibold">
                                                            Messages
                                                        </h6> <a href="#"
                                                            className="badge rounded-pill bg-warning ms-auto my-auto float-end">Mark
                                                            All Read</a>
                                                    </div>
                                                    <p
                                                        className="dropdown-title-text subtext mb-0 text-white op-6 pb-0 tx-12 ">
                                                        You
                                                        have 4 unread messages</p>
                                                </div>
                                                <div className="main-message-list chat-scroll ps">
                                                    <div className="p-3 d-flex border-bottom messages">
                                                        <div className="  drop-img  cover-image  "
                                                            data-bs-image-src="/src/adminAssets/img/users/3.jpg"
                                                            style={{
                                                                // background: "url(&quot;/src/adminAssets/img/users/3.jpg&quot;) center center;"
                                                               
                                                                    background: 'url("/src/adminAssets/img/users/3.jpg") center center', 
                                                                    height: '200px',  // Example height
                                                                    width: '200px',   // Example width
                                                                    backgroundSize: 'cover'  // Ensures the image covers the whole area
                                                                
                                                            
                                                                }}>
                                                            <span className="avatar-status bg-teal"></span>
                                                        </div>
                                                        <div className="wd-90p">
                                                            <div className="d-flex"> <a href="chat.html">
                                                                    <h5 className="mb-1 name">Petey Cruiser</h5>
                                                                </a> </div>
                                                            <p className="mb-0 desc">Im sorry but im not sure how to help
                                                                you with
                                                                that......</p>
                                                            <p className="time mb-0 text-start float-start ms-2 mt-2">Mar 15
                                                                3:55 PM
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="p-3 d-flex border-bottom messages">
                                                        <div className="drop-img cover-image"
                                                            data-bs-image-src="/src/adminAssets/img/users/2.jpg"
                                                            style={{
                                                                background: 'url("/src/adminAssets/img/users/2.jpg") center center', 
                                                                height: '200px',  // Example height
                                                                width: '200px',   // Example width
                                                                backgroundSize: 'cover'  // Ensures the image covers the whole area
                                                            
                                                          }}>
                                                            <span className="avatar-status bg-teal"></span>
                                                        </div>
                                                        <div className="wd-90p">
                                                            <div className="d-flex"> <a href="chat.html">
                                                                    <h5 className="mb-1 name">Jimmy Changa</h5>
                                                                </a> </div>
                                                            <p className="mb-0 desc">All set ! Now, time to get to you
                                                                now......</p>
                                                            <p className="time mb-0 text-start float-start ms-2 mt-2">Mar 06
                                                                01:12
                                                                AM</p>
                                                        </div>
                                                    </div>
                                                    <div className="p-3 d-flex border-bottom messages">
                                                        <div className="drop-img cover-image"
                                                            data-bs-image-src="/src/adminAssets/img/users/9.jpg"
                                                            style={{
                                                                // background: "url(&quot;/src/adminAssets/img/users/9.jpg&quot;) center center"
                                                                background: 'url("/src/adminAssets/img/users/9.jpg") center center', 
                                                                height: '200px',  // Example height
                                                                width: '200px',   // Example width
                                                                backgroundSize: 'cover'  // Ensures the image covers the whole area
                                                            
                                                                }}>
                                                            <span className="avatar-status bg-teal"></span>
                                                        </div>
                                                        <div className="wd-90p">
                                                            <div className="d-flex"> <a href="chat.html">
                                                                    <h5 className="mb-1 name">Graham Cracker</h5>
                                                                </a> </div>
                                                            <p className="mb-0 desc">Are you ready to pickup your
                                                                Delivery...</p>
                                                            <p className="time mb-0 text-start float-start ms-2 mt-2">Feb 25
                                                                10:35
                                                                AM</p>
                                                        </div>
                                                    </div>
                                                    <div className="p-3 d-flex border-bottom messages">
                                                        <div className="drop-img cover-image"
                                                            data-bs-image-src="/src/adminAssets/img/users/12.jpg"
                                                            style={{
                                                                // background: "url(&quot;/src/adminAssets/img/users/12.jpg&quot;) center center"
                                                                background: 'url("/src/adminAssets/img/users/12.jpg") center center', 
                                                                height: '200px',  // Example height
                                                                width: '200px',   // Example width
                                                                backgroundSize: 'cover'  // Ensures the image covers the whole area
                                                            
                                                                }}>
                                                            <span className="avatar-status bg-teal"></span>
                                                        </div>
                                                        <div className="wd-90p">
                                                            <div className="d-flex"> <a href="chat.html">
                                                                    <h5 className="mb-1 name">Donatella Nobatti</h5>
                                                                </a> </div>
                                                            <p className="mb-0 desc">Here are some products ...</p>
                                                            <p className="time mb-0 text-start float-start ms-2 mt-2">Feb 12
                                                                05:12
                                                                PM</p>
                                                        </div>
                                                    </div>
                                                    <div className="p-3 d-flex border-bottom messages">
                                                        <div className="drop-img cover-image"
                                                            data-bs-image-src="/src/adminAssets/img/users/5.jpg"
                                                            style={{
                                                                // background: "url(&quot;/src/adminAssets/img/users/5.jpg&quot;) center center"
                                                                background: 'url("/src/adminAssets/img/users/5.jpg") center center', 
                                                                height: '200px',  // Example height
                                                                width: '200px',   // Example width
                                                                backgroundSize: 'cover'  // Ensures the image covers the whole area
                                                            
                                                                }}>
                                                            <span className="avatar-status bg-teal"></span>
                                                        </div>
                                                        <div className="wd-90p">
                                                            <div className="d-flex"> <a href="chat.html">
                                                                    <h5 className="mb-1 name">Anne Fibbiyon</h5>
                                                                </a> </div>
                                                            <p className="mb-0 desc">Im sorry but im not sure how...</p>
                                                            <p className="time mb-0 text-start float-start ms-2 mt-2">Jan 29
                                                                03:16
                                                                PM</p>
                                                        </div>
                                                    </div>
                                                    <div className="ps__rail-x" style={{left: "0px",  bottom: "0px"}}>
                                                        <div className="ps__thumb-x" tabIndex="0"
                                                            style={{left: "0px", width: "0px"}}>
                                                        </div>
                                                    </div>
                                                    <div className="ps__rail-y" style={{top: "0px", right: "0px"}}>
                                                        <div className="ps__thumb-y" tabIndex="0"
                                                            style={{top: "0px", height: "0px"}}>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="text-center dropdown-footer"> <a href="chat.html">VIEW
                                                        ALL</a>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="dropdown nav-item main-header-notification"> <a className="new nav-link"
                                                href="#"> <svg xmlns="http://www.w3.org/2000/svg"
                                                    className="header-icon-svgs" viewBox="0 0 24 24" fill="none"
                                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                                    strokeLinejoin="round">
                                                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                                                    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                                                </svg><span className=" pulse"></span></a>
                                            <div className="dropdown-menu">
                                                <div className="menu-header-content bg-primary text-start">
                                                    <div className="d-flex">
                                                        <h6 className="dropdown-title mb-1 tx-15 text-white fw-semibold">
                                                            Notifications</h6> <a href="#"
                                                            className="badge rounded-pill bg-warning ms-auto my-auto float-end">Mark
                                                            All Read</a>
                                                    </div>
                                                    <p
                                                        className="dropdown-title-text subtext mb-0 text-white op-6 pb-0 tx-12 ">
                                                        You
                                                        have 4 unread Notifications</p>
                                                </div>
                                                <div className="main-notification-list Notification-scroll ps">
                                                    <div className="d-flex p-3 border-bottom">
                                                        <div className="notifyimg bg-pink"> <i
                                                                className="la la-file-alt text-white"></i> </div>
                                                        <div className="ms-3"> <a href="mail.html">
                                                                <h5 className="notification-label mb-1">New files available
                                                                </h5>
                                                            </a>
                                                            <div className="notification-subtext">10 hour ago</div>
                                                        </div>
                                                        <div className="ms-auto"> <a href="mail.html"><i
                                                                    className="las la-angle-right text-end text-muted icon"></i></a>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex p-3 border-bottom">
                                                        <div className="notifyimg bg-purple"> <i
                                                                className="la la-gem text-white"></i>
                                                        </div>
                                                        <div className="ms-3"> <a href="mail.html">
                                                                <h5 className="notification-label mb-1">Updates Available
                                                                </h5>
                                                            </a>
                                                            <div className="notification-subtext">2 days ago</div>
                                                        </div>
                                                        <div className="ms-auto"> <a href="mail.html"><i
                                                                    className="las la-angle-right text-end text-muted icon"></i></a>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex p-3 border-bottom">
                                                        <div className="notifyimg bg-success"> <i
                                                                className="la la-shopping-basket text-white"></i> </div>
                                                        <div className="ms-3"> <a href="mail.html">
                                                                <h5 className="notification-label mb-1">New Order Received
                                                                </h5>
                                                            </a>
                                                            <div className="notification-subtext">1 hour ago</div>
                                                        </div>
                                                        <div className="ms-auto"> <a href="mail.html"><i
                                                                    className="las la-angle-right text-end text-muted icon"></i></a>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex p-3 border-bottom">
                                                        <div className="notifyimg bg-warning"> <i
                                                                className="la la-envelope-open text-white"></i> </div>
                                                        <div className="ms-3"> <a href="mail.html">
                                                                <h5 className="notification-label mb-1">New review received
                                                                </h5>
                                                            </a>
                                                            <div className="notification-subtext">1 day ago</div>
                                                        </div>
                                                        <div className="ms-auto"> <a href="mail.html"><i
                                                                    className="las la-angle-right text-end text-muted icon"></i></a>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex p-3 border-bottom">
                                                        <div className="notifyimg bg-danger"> <i
                                                                className="la la-user-check text-white"></i> </div>
                                                        <div className="ms-3"> <a href="mail.html">
                                                                <h5 className="notification-label mb-1">22 verified
                                                                    registrations
                                                                </h5>
                                                            </a>
                                                            <div className="notification-subtext">2 hour ago</div>
                                                        </div>
                                                        <div className="ms-auto"> <a href="mail.html"><i
                                                                    className="las la-angle-right text-end text-muted icon"></i></a>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex p-3 border-bottom">
                                                        <div className="notifyimg bg-primary"> <i
                                                                className="la la-check-circle text-white"></i> </div>
                                                        <div className="ms-3"> <a href="mail.html">
                                                                <h5 className="notification-label mb-1">Project has been
                                                                    approved
                                                                </h5>
                                                            </a>
                                                            <div className="notification-subtext">4 hour ago</div>
                                                        </div>
                                                        <div className="ms-auto"> <a href="mail.html"><i
                                                                    className="las la-angle-right text-end text-muted icon"></i></a>
                                                        </div>
                                                    </div>
                                                    <div className="ps__rail-x" style={{left: "0px", bottom: "0px"}}>
                                                        <div className="ps__thumb-x" tabIndex="0"
                                                            style={{left: "0px", width: "0px"}}>
                                                        </div>
                                                    </div>
                                                    <div className="ps__rail-y" style={{top: "0px", right: "0px"}}>
                                                        <div className="ps__thumb-y" tabIndex="0"
                                                            style={{top: "0px", height: "0px"}}>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="dropdown-footer"> <a href="mail.html">VIEW ALL</a> </div>
                                            </div>
                                        </li>
                                        <li className="nav-item full-screen fullscreen-button"> <a
                                                className="new nav-link full-screen-link" href="#"><svg
                                                    xmlns="http://www.w3.org/2000/svg" className="header-icon-svgs"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path
                                                        d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3">
                                                    </path>
                                                </svg></a> </li>
                                        <li className="dropdown main-profile-menu nav nav-item nav-link"> <a
                                                className="profile-user d-flex" href=""><img alt=""
                                                    src="/src/adminAssets/img/users/6.jpg" /></a>
                                            <div className="dropdown-menu">
                                                <div className="main-header-profile bg-primary p-3">
                                                    <div className="d-flex wd-100p">
                                                        <div className="main-img-user"><img alt=""
                                                                src="/src/adminAssets/img/users/6.jpg" className="" /></div>
                                                        <div className="ms-3 my-auto">
                                                            <h6>Petey Cruiser</h6><span>Premium Member</span>
                                                        </div>
                                                    </div>
                                                </div> <a className="dropdown-item" href="profile.html"><i
                                                        className="bx bx-user-circle"></i>Profile</a> <a
                                                    className="dropdown-item" href="editprofile.html"><i
                                                        className="bx bx-cog"></i> Edit Profile</a> <a className="dropdown-item"
                                                    href="mail.html"><i className="bx bxs-inbox"></i>Inbox</a>
                                                <a className="dropdown-item" href="chat.html"><i
                                                        className="bx bx-envelope"></i>Messages</a> <a className="dropdown-item"
                                                    href="editprofile.html"><i className="bx bx-slider-alt"></i> Account
                                                    Settings</a> <a className="dropdown-item" href="signin.html"><i
                                                        className="bx bx-log-out"></i> Sign Out</a>
                                            </div>
                                        </li>
                                        <li className="dropdown main-header-message right-toggle"> <a className="nav-link pe-0"
                                                data-bs-toggle="sidebar-right" data-bs-target=".sidebar-right"> <svg
                                                    xmlns="http://www.w3.org/2000/svg" className="header-icon-svgs"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <line x1="3" y1="12" x2="21" y2="12"></line>
                                                    <line x1="3" y1="6" x2="21" y2="6"></line>
                                                    <line x1="3" y1="18" x2="21" y2="18"></line>
                                                </svg> </a> </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="d-flex"> <a className="demo-icon new nav-link" href="#"> <svg
                                        xmlns="http://www.w3.org/2000/svg" className="header-icon-svgs fa-spin" width="24"
                                        height="24" viewBox="0 0 24 24">
                                        <path
                                            d="M12 16c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.084 0 2 .916 2 2s-.916 2-2 2-2-.916-2-2 .916-2 2-2z">
                                        </path>
                                        <path
                                            d="m2.845 16.136 1 1.73c.531.917 1.809 1.261 2.73.73l.529-.306A8.1 8.1 0 0 0 9 19.402V20c0 1.103.897 2 2 2h2c1.103 0 2-.897 2-2v-.598a8.132 8.132 0 0 0 1.896-1.111l.529.306c.923.53 2.198.188 2.731-.731l.999-1.729a2.001 2.001 0 0 0-.731-2.732l-.505-.292a7.718 7.718 0 0 0 0-2.224l.505-.292a2.002 2.002 0 0 0 .731-2.732l-.999-1.729c-.531-.92-1.808-1.265-2.731-.732l-.529.306A8.1 8.1 0 0 0 15 4.598V4c0-1.103-.897-2-2-2h-2c-1.103 0-2 .897-2 2v.598a8.132 8.132 0 0 0-1.896 1.111l-.529-.306c-.924-.531-2.2-.187-2.731.732l-.999 1.729a2.001 2.001 0 0 0 .731 2.732l.505.292a7.683 7.683 0 0 0 0 2.223l-.505.292a2.003 2.003 0 0 0-.731 2.733zm3.326-2.758A5.703 5.703 0 0 1 6 12c0-.462.058-.926.17-1.378a.999.999 0 0 0-.47-1.108l-1.123-.65.998-1.729 1.145.662a.997.997 0 0 0 1.188-.142 6.071 6.071 0 0 1 2.384-1.399A1 1 0 0 0 11 5.3V4h2v1.3a1 1 0 0 0 .708.956 6.083 6.083 0 0 1 2.384 1.399.999.999 0 0 0 1.188.142l1.144-.661 1 1.729-1.124.649a1 1 0 0 0-.47 1.108c.112.452.17.916.17 1.378 0 .461-.058.925-.171 1.378a1 1 0 0 0 .471 1.108l1.123.649-.998 1.729-1.145-.661a.996.996 0 0 0-1.188.142 6.071 6.071 0 0 1-2.384 1.399A1 1 0 0 0 13 18.7l.002 1.3H11v-1.3a1 1 0 0 0-.708-.956 6.083 6.083 0 0 1-2.384-1.399.992.992 0 0 0-1.188-.141l-1.144.662-1-1.729 1.124-.651a1 1 0 0 0 .471-1.108z">
                                        </path>
                                    </svg> </a> </div>
                        </div>
                    </div>
                </div>
                <div className="jumps-prevent" style={{paddingTop: "63px"}}></div>
                 {/* <!-- /main-header --> <!-- main-sidebar --> */}
                <div className="app-sidebar__overlay" data-bs-toggle="sidebar"></div>
                <div className="sticky is-expanded" style={{marginBottom: "-63px"}}>
                    <aside className="app-sidebar sidebar-scroll ps ps--active-y open" />
                        <div className="main-sidebar-header active"> <a className="desktop-logo logo-light active"
                                href="index.html"><img src="/src/adminAssets/img/brand/logo.png" className="main-logo"
                                    alt="logo" /></a> <a className="desktop-logo logo-dark active" href="index.html"><img
                                    src="/src/adminAssets/img/brand/logo-white.png" className="main-logo" alt="logo" /></a> <a
                                className="logo-icon mobile-logo icon-light active" href="index.html"><img
                                    src="/src/adminAssets/img/brand/favicon.png" alt="logo" /></a> <a
                                className="logo-icon mobile-logo icon-dark active" href="index.html"><img
                                    src="/src/adminAssets/img/brand/favicon-white.png" alt="logo" /></a> </div>
                        <div className="main-sidemenu is-expanded">
                            <div className="app-sidebar__user clearfix">
                                <div className="dropdown user-pro-body">
                                    <div className="main-img-user avatar-xl"> <img alt="user-img"
                                            src="/src/adminAssets/img/users/6.jpg" /><span
                                            className="avatar-status profile-status bg-green"></span> </div>
                                    <div className="user-info">
                                        <h4 className="fw-semibold mt-3 mb-0">Petey Cruiser</h4> <span
                                            className="mb-0 text-muted">Premium Member</span>
                                    </div>
                                </div>
                            </div>
                            <div className="slide-left disabled active is-expanded d-none" id="slide-left"><svg
                                    xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width="24" height="24"
                                    viewBox="0 0 24 24">
                                    <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z">
                                    </path>
                                </svg></div>
                            <ul className="side-menu open" style={{marginRight: "0px"}}>
                                <li className="side-item side-item-category">Main</li>
                                <li className="slide is-expanded active"> <a className="side-menu__item active"
                                        href="index.html"><svg xmlns="http://www.w3.org/2000/svg"
                                            className="side-menu__icon" viewBox="0 0 24 24">
                                            <path d="M0 0h24v24H0V0z" fill="none"></path>
                                            <path d="M5 5h4v6H5zm10 8h4v6h-4zM5 17h4v2H5zM15 5h4v2h-4z" opacity=".3">
                                            </path>
                                            <path
                                                d="M3 13h8V3H3v10zm2-8h4v6H5V5zm8 16h8V11h-8v10zm2-8h4v6h-4v-6zM13 3v6h8V3h-8zm6 4h-4V5h4v2zM3 21h8v-6H3v6zm2-4h4v2H5v-2z">
                                            </path>
                                        </svg><span className="side-menu__label">Index</span><span
                                            className="badge bg-success text-light bg-side-text">1</span></a> </li>
                                <li className="side-item side-item-category">General</li>
                                <li className="slide"> <a className="side-menu__item" data-bs-toggle="slide"
                                        href="#"><svg xmlns="http://www.w3.org/2000/svg"
                                            className="side-menu__icon" viewBox="0 0 24 24">
                                            <path d="M0 0h24v24H0V0z" fill="none"></path>
                                            <path
                                                d="M12 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm3.5 4c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zm-7 0c.83 0 1.5.67 1.5 1.5S9.33 11 8.5 11 7 10.33 7 9.5 7.67 8 8.5 8zm3.5 9.5c-2.33 0-4.32-1.45-5.12-3.5h1.67c.7 1.19 1.97 2 3.45 2s2.76-.81 3.45-2h1.67c-.8 2.05-2.79 3.5-5.12 3.5z"
                                                opacity=".3"></path>
                                            <circle cx="15.5" cy="9.5" r="1.5"></circle>
                                            <circle cx="8.5" cy="9.5" r="1.5"></circle>
                                            <path
                                                d="M12 16c-1.48 0-2.75-.81-3.45-2H6.88c.8 2.05 2.79 3.5 5.12 3.5s4.32-1.45 5.12-3.5h-1.67c-.69 1.19-1.97 2-3.45 2zm-.01-14C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z">
                                            </path>
                                        </svg><span className="side-menu__label">Icons</span><i
                                            className="angle fe fe-chevron-down"></i></a>
                                    <ul className="slide-menu">
                                        <li className="panel sidetab-menu">
                                            <div className="tab-menu-heading p-0 pb-2 border-0">
                                                <div className="tabs-menu "> 
                                                    {/* <!-- Tabs --> */}
                                                    <ul className="nav panel-tabs">
                                                        <li><a href="#side11" className="active " data-bs-toggle="tab"><i
                                                                    className="fe fe-airplay"></i>
                                                                <p>Home</p>
                                                            </a></li>
                                                        <li><a href="#side12" data-bs-toggle="tab"><i
                                                                    className="fe fe-package"></i>
                                                                <p>Events</p>
                                                            </a></li>
                                                        <li><a href="#side13" data-bs-toggle="tab"><i
                                                                    className="fe fe-move"></i>
                                                                <p>Activity</p>
                                                            </a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="panel-body tabs-menu-body p-0 border-0">
                                                <div className="tab-content">
                                                    <div className="tab-pane tab-content-show active" id="side11">
                                                        <ul className="sidemenu-list">
                                                            <li className="side-menu__label1"><a
                                                                    href="#">Icons</a></li>
                                                            <li><a className="slide-item" href="icons.html">Font Awesome
                                                                </a></li>
                                                            <li><a className="slide-item" href="icons-2.html">Material
                                                                    Design
                                                                    Icons</a></li>
                                                            <li><a className="slide-item" href="icons-3.html">Simple Line
                                                                    Icons</a>
                                                            </li>
                                                            <li><a className="slide-item" href="icons-4.html">Feather
                                                                    Icons</a></li>
                                                            <li><a className="slide-item" href="icons-5.html">Ionic
                                                                    Icons</a></li>
                                                            <li><a className="slide-item" href="icons-6.html">Flag Icons</a>
                                                            </li>
                                                            <li><a className="slide-item" href="icons-7.html">Pe7 Icons</a>
                                                            </li>
                                                            <li><a className="slide-item" href="icons-8.html">Themify
                                                                    Icons</a></li>
                                                            <li><a className="slide-item" href="icons-9.html">Typicons
                                                                    Icons</a>
                                                            </li>
                                                            <li><a className="slide-item" href="icons-10.html">Weather
                                                                    Icons</a>
                                                            </li>
                                                            <li><a className="slide-item" href="icons-11.html">Material
                                                                    Icons</a>
                                                            </li>
                                                            <li><a className="slide-item" href="icons-12.html">Bootstrap
                                                                    Icons</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="tab-pane tab-content-double" id="side12">
                                                        <h5 className="mt-3 mb-4 tx-16">Events</h5>
                                                        <div className="latest-timeline">
                                                            <div className="timeline">
                                                                <div className="mt-0 event-text">
                                                                    <h6 className="mb-0"><a target="_blank" href="#"
                                                                            className="timeline-head">Employees Meeting</a>
                                                                    </h6>
                                                                    <small className="text-muted mb-2">20 Feb, 2019</small>
                                                                    <p className="tx-13">sed do eiusmod tempor incididunt ut
                                                                        labore
                                                                        et. </p>
                                                                </div>
                                                                <div className="event-text">
                                                                    <h6 className="mb-0"><a href="#"
                                                                            className="timeline-head">Anniversary
                                                                            Celebration</a>
                                                                    </h6> <small className="mb-2 text-muted">14 Feb,
                                                                        2019</small>
                                                                    <p className="tx-13">sed do eiusmod tempor magna aliqua
                                                                        nisi ut.
                                                                    </p>
                                                                </div>
                                                                <div className="event-text">
                                                                    <h6 className="mb-0"><a href="#"
                                                                            className="timeline-head">Best
                                                                            Employee Announcement</a></h6> <small
                                                                        className="mb-2 text-muted">13 Feb, 2019</small>
                                                                    <p className="tx-13">sed do eiusmod tempor incididunt ut
                                                                        aliquip.</p>
                                                                </div>
                                                                <div className="event-text">
                                                                    <h6 className="mb-0"><a href="#"
                                                                            className="timeline-head">Weekend
                                                                            trip</a></h6> <small
                                                                        className="mb-2 text-muted">11 Feb,
                                                                        2019</small>
                                                                    <p className="tx-13">sed do eiusmod tempor incididunt ut
                                                                        aliquip.</p>
                                                                </div>
                                                                <div className="event-text">
                                                                    <h6 className="mb-0"><a href="#"
                                                                            className="timeline-head">New
                                                                            Project Started..</a></h6> <small
                                                                        className="mb-2 text-muted">09 Feb, 2019</small>
                                                                    <p className="tx-13">sed do eiusmod tempor incididunt ut
                                                                        aliquip.</p>
                                                                </div>
                                                                <div className="mb-0 event-text">
                                                                    <h6 className="mb-0"><a href="#"
                                                                            className="timeline-head">Gradening
                                                                            working</a></h6> <small
                                                                        className="mb-2 text-muted">02
                                                                        Feb, 2019</small>
                                                                    <p className="tx-13">sed do eiusmod tempor aliqua nisi
                                                                        ut
                                                                        aliquip. </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="tab-pane tab-content-double" id="side13">
                                                        <h5 className="mt-3 mb-4 tx-16">Activity</h5>
                                                        <div className="activity mt-3 p-0"> <img
                                                                src="/src/adminAssets/img/users/8.jpg" alt=""
                                                                className="img-activity" />
                                                            <div className="time-activity">
                                                                <div className="item-activity">
                                                                    <p className="mb-0 tx-13"><b>Samantha Melon</b> Add a
                                                                        new
                                                                        projects <b> AngularJS Template</b></p><small
                                                                        className="text-muted ">30 mins ago</small>
                                                                </div>
                                                            </div> <img src="/src/adminAssets/img/users/5.jpg" alt=""
                                                                className="img-activity" />
                                                            <div className="time-activity">
                                                                <div className="item-activity">
                                                                    <p className="mb-0 tx-13"><b>Allie Grater</b> Add a new
                                                                        projects
                                                                        <b>Free HTML Template</b>
                                                                    </p><small className="text-muted ">1 days ago</small>
                                                                </div>
                                                            </div> <img src="/src/adminAssets/img/users/6.jpg" alt=""
                                                                className="img-activity" />
                                                            <div className="time-activity">
                                                                <div className="item-activity">
                                                                    <p className="mb-0 tx-13"><b>Gabe Lackmen</b> Add a new
                                                                        projects
                                                                        <b>Free PSD Template</b>
                                                                    </p><small className="text-muted ">3
                                                                        days ago</small>
                                                                </div>
                                                            </div> <img src="/src/adminAssets/img/users/7.jpg" alt=""
                                                                className="img-activity" />
                                                            <div className="time-activity">
                                                                <div className="item-activity">
                                                                    <p className="mb-0 tx-13"><b>Abigail John</b> Add a new
                                                                        projects
                                                                        <b>Free UI Template</b>
                                                                    </p><small className="text-muted ">5
                                                                        days ago</small>
                                                                </div>
                                                            </div> <img src="/src/adminAssets/img/users/14.jpg" alt=""
                                                                className="img-activity" />
                                                            <div className="time-activity">
                                                                <div className="item-activity">
                                                                    <p className="mb-0 tx-13"><b>Jiggel mossin</b> Add a new
                                                                        projects <b> AngularJS Template</b></p><small
                                                                        className="text-muted ">30 mins ago</small>
                                                                </div>
                                                            </div> <img src="/src/adminAssets/img/users/3.jpg" alt=""
                                                                className="img-activity" />
                                                            <div className="time-activity">
                                                                <div className="item-activity">
                                                                    <p className="mb-0 tx-13"><b>Raven Chanan</b> Add a new
                                                                        projects
                                                                        <b>Free HTML Template</b>
                                                                    </p><small className="text-muted ">1 days ago</small>
                                                                </div>
                                                            </div> <img src="/src/adminAssets/img/users/1.jpg" alt=""
                                                                className="img-activity" />
                                                            <div className="time-activity">
                                                                <div className="item-activity">
                                                                    <p className="mb-0 tx-13"><b>Anna Ogden</b> Add a new
                                                                        projects
                                                                        <b>Free PSD Template</b>
                                                                    </p><small className="text-muted ">3
                                                                        days ago</small>
                                                                </div>
                                                            </div> <img src="/src/adminAssets/img/users/11.jpg" alt=""
                                                                className="img-activity" />
                                                            <div className="time-activity">
                                                                <div className="item-activity">
                                                                    <p className="mb-0 tx-13"><b>Allie Grater</b> Add a new
                                                                        projects
                                                                        <b>Free UI Template</b>
                                                                    </p><small className="text-muted ">5
                                                                        days ago</small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li className="slide"> <a className="side-menu__item" data-bs-toggle="slide"
                                        href="#"><svg xmlns="http://www.w3.org/2000/svg"
                                            className="side-menu__icon" viewBox="0 0 24 24">
                                            <path d="M0 0h24v24H0V0z" fill="none"></path>
                                            <path d="M19 5H5v14h14V5zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"
                                                opacity=".3"></path>
                                            <path
                                                d="M3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2zm2 0h14v14H5V5zm2 5h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z">
                                            </path>
                                        </svg><span className="side-menu__label">Charts</span><i
                                            className="angle fe fe-chevron-down"></i></a>
                                    <ul className="slide-menu">
                                        <li className="panel sidetab-menu">
                                            <div className="tab-menu-heading p-0 pb-2 border-0">
                                                <div className="tabs-menu "> 
                                                    {/* <!-- Tabs --> */}
                                                    <ul className="nav panel-tabs">
                                                        <li><a href="#side14" className="active" data-bs-toggle="tab"><i
                                                                    className="fe fe-airplay"></i>
                                                                <p>Home</p>
                                                            </a></li>
                                                        <li><a href="#side15" data-bs-toggle="tab"><i
                                                                    className="fe fe-package"></i>
                                                                <p>Events</p>
                                                            </a></li>
                                                        <li><a href="#side16" data-bs-toggle="tab"><i
                                                                    className="fe fe-move"></i>
                                                                <p>Activity</p>
                                                            </a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="panel-body tabs-menu-body p-0 border-0">
                                                <div className="tab-content">
                                                    <div className="tab-pane tab-content-show active" id="side14">
                                                        <ul className="sidemenu-list">
                                                            <li className="side-menu__label1"><a
                                                                    href="#">Charts</a></li>
                                                            <li><a className="slide-item" href="chart-morris.html">Morris
                                                                    Charts</a>
                                                            </li>
                                                            <li><a className="slide-item" href="chart-flot.html">Flot
                                                                    Charts</a>
                                                            </li>
                                                            <li><a className="slide-item"
                                                                    href="chart-chartjs.html">ChartJS</a></li>
                                                            <li><a className="slide-item"
                                                                    href="chart-echart.html">Echart</a></li>
                                                            <li><a className="slide-item"
                                                                    href="chart-sparkline.html">Sparkline</a>
                                                            </li>
                                                            <li><a className="slide-item"
                                                                    href="chart-peity.html">Chart-peity</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="tab-pane tab-content-double" id="side15">
                                                        <h5 className="mt-3 mb-4 tx-16">Events</h5>
                                                        <div className="latest-timeline">
                                                            <div className="timeline">
                                                                <div className="mt-0 event-text">
                                                                    <h6 className="mb-0"><a target="_blank" href="#"
                                                                            className="timeline-head">Employees Meeting</a>
                                                                    </h6>
                                                                    <small className="text-muted mb-2">20 Feb, 2019</small>
                                                                    <p className="tx-13">sed do eiusmod tempor incididunt ut
                                                                        labore
                                                                        et. </p>
                                                                </div>
                                                                <div className="event-text">
                                                                    <h6 className="mb-0"><a href="#"
                                                                            className="timeline-head">Anniversary
                                                                            Celebration</a>
                                                                    </h6> <small className="mb-2 text-muted">14 Feb,
                                                                        2019</small>
                                                                    <p className="tx-13">sed do eiusmod tempor magna aliqua
                                                                        nisi ut.
                                                                    </p>
                                                                </div>
                                                                <div className="event-text">
                                                                    <h6 className="mb-0"><a href="#"
                                                                            className="timeline-head">Best
                                                                            Employee Announcement</a></h6> <small
                                                                        className="mb-2 text-muted">13 Feb, 2019</small>
                                                                    <p className="tx-13">sed do eiusmod tempor incididunt ut
                                                                        aliquip.</p>
                                                                </div>
                                                                <div className="event-text">
                                                                    <h6 className="mb-0"><a href="#"
                                                                            className="timeline-head">Weekend
                                                                            trip</a></h6> <small
                                                                        className="mb-2 text-muted">11 Feb,
                                                                        2019</small>
                                                                    <p className="tx-13">sed do eiusmod tempor incididunt ut
                                                                        aliquip.</p>
                                                                </div>
                                                                <div className="event-text">
                                                                    <h6 className="mb-0"><a href="#"
                                                                            className="timeline-head">New
                                                                            Project Started..</a></h6> <small
                                                                        className="mb-2 text-muted">09 Feb, 2019</small>
                                                                    <p className="tx-13">sed do eiusmod tempor incididunt ut
                                                                        aliquip.</p>
                                                                </div>
                                                                <div className="mb-0 event-text">
                                                                    <h6 className="mb-0"><a href="#"
                                                                            className="timeline-head">Gradening
                                                                            working</a></h6> <small
                                                                        className="mb-2 text-muted">02
                                                                        Feb, 2019</small>
                                                                    <p className="tx-13">sed do eiusmod tempor aliqua nisi
                                                                        ut
                                                                        aliquip. </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="tab-pane tab-content-double" id="side16">
                                                        <h5 className="mt-3 mb-4 tx-16">Activity</h5>
                                                        <div className="activity mt-3 p-0"> <img
                                                                src="/src/adminAssets/img/users/8.jpg" alt=""
                                                                className="img-activity" />
                                                            <div className="time-activity">
                                                                <div className="item-activity">
                                                                    <p className="mb-0 tx-13"><b>Samantha Melon</b> Add a
                                                                        new
                                                                        projects <b> AngularJS Template</b></p><small
                                                                        className="text-muted ">30 mins ago</small>
                                                                </div>
                                                            </div> <img src="/src/adminAssets/img/users/5.jpg" alt=""
                                                                className="img-activity" />
                                                            <div className="time-activity">
                                                                <div className="item-activity">
                                                                    <p className="mb-0 tx-13"><b>Allie Grater</b> Add a new
                                                                        projects
                                                                        <b>Free HTML Template</b>
                                                                    </p><small className="text-muted ">1 days ago</small>
                                                                </div>
                                                            </div> <img src="/src/adminAssets/img/users/6.jpg" alt=""
                                                                className="img-activity" />
                                                            <div className="time-activity">
                                                                <div className="item-activity">
                                                                    <p className="mb-0 tx-13"><b>Gabe Lackmen</b> Add a new
                                                                        projects
                                                                        <b>Free PSD Template</b>
                                                                    </p><small className="text-muted ">3
                                                                        days ago</small>
                                                                </div>
                                                            </div> <img src="/src/adminAssets/img/users/7.jpg" alt=""
                                                                className="img-activity" />
                                                            <div className="time-activity">
                                                                <div className="item-activity">
                                                                    <p className="mb-0 tx-13"><b>Abigail John</b> Add a new
                                                                        projects
                                                                        <b>Free UI Template</b>
                                                                    </p><small className="text-muted ">5
                                                                        days ago</small>
                                                                </div>
                                                            </div> <img src="/src/adminAssets/img/users/14.jpg" alt=""
                                                                className="img-activity" />
                                                            <div className="time-activity">
                                                                <div className="item-activity">
                                                                    <p className="mb-0 tx-13"><b>Jiggel mossin</b> Add a new
                                                                        projects <b> AngularJS Template</b></p><small
                                                                        className="text-muted ">30 mins ago</small>
                                                                </div>
                                                            </div> <img src="/src/adminAssets/img/users/3.jpg" alt=""
                                                                className="img-activity" />
                                                            <div className="time-activity">
                                                                <div className="item-activity">
                                                                    <p className="mb-0 tx-13"><b>Raven Chanan</b> Add a new
                                                                        projects
                                                                        <b>Free HTML Template</b>
                                                                    </p><small className="text-muted ">1 days ago</small>
                                                                </div>
                                                            </div> <img src="/src/adminAssets/img/users/1.jpg" alt=""
                                                                className="img-activity" />
                                                            <div className="time-activity">
                                                                <div className="item-activity">
                                                                    <p className="mb-0 tx-13"><b>Anna Ogden</b> Add a new
                                                                        projects
                                                                        <b>Free PSD Template</b>
                                                                    </p><small className="text-muted ">3
                                                                        days ago</small>
                                                                </div>
                                                            </div> <img src="/src/adminAssets/img/users/11.jpg" alt=""
                                                                className="img-activity" />
                                                            <div className="time-activity">
                                                                <div className="item-activity">
                                                                    <p className="mb-0 tx-13"><b>Allie Grater</b> Add a new
                                                                        projects
                                                                        <b>Free UI Template</b>
                                                                    </p><small className="text-muted ">5
                                                                        days ago</small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li className="side-item side-item-category">WEB APPS</li>
                                <li className="slide"> <a className="side-menu__item" data-bs-toggle="slide"
                                        href="#"><svg xmlns="http://www.w3.org/2000/svg"
                                            className="side-menu__icon" viewBox="0 0 24 24">
                                            <path d="M0 0h24v24H0V0z" fill="none"></path>
                                            <path d="M4 12c0 4.08 3.06 7.44 7 7.93V4.07C7.05 4.56 4 7.92 4 12z"
                                                opacity=".3">
                                            </path>
                                            <path
                                                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93s3.05-7.44 7-7.93v15.86zm2-15.86c1.03.13 2 .45 2.87.93H13v-.93zM13 7h5.24c.25.31.48.65.68 1H13V7zm0 3h6.74c.08.33.15.66.19 1H13v-1zm0 9.93V19h2.87c-.87.48-1.84.8-2.87.93zM18.24 17H13v-1h5.92c-.2.35-.43.69-.68 1zm1.5-3H13v-1h6.93c-.04.34-.11.67-.19 1z">
                                            </path>
                                        </svg><span className="side-menu__label">Apps</span><i
                                            className="angle fe fe-chevron-down"></i></a>
                                    <ul className="slide-menu">
                                        <li className="panel sidetab-menu">
                                            <div className="tab-menu-heading p-0 pb-2 border-0">
                                                <div className="tabs-menu "> 
                                                    {/* <!-- Tabs --> */}
                                                    <ul className="nav panel-tabs">
                                                        <li><a href="#side17" className="active" data-bs-toggle="tab"><i
                                                                    className="fe fe-airplay"></i>
                                                                <p>Home</p>
                                                            </a></li>
                                                        <li><a href="#side18" data-bs-toggle="tab"><i
                                                                    className="fe fe-package"></i>
                                                                <p>Events</p>
                                                            </a></li>
                                                        <li><a href="#side19" data-bs-toggle="tab"><i
                                                                    className="fe fe-move"></i>
                                                                <p>Activity</p>
                                                            </a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="panel-body tabs-menu-body p-0 border-0">
                                                <div className="tab-content">
                                                    <div className="tab-pane tab-content-show active" id="side17">
                                                        <ul className="sidemenu-list">
                                                            <li className="side-menu__label1"><a
                                                                    href="#">Apps</a>
                                                            </li>
                                                            <li><a className="slide-item" href="cards.html">Cards</a></li>
                                                            <li><a className="slide-item"
                                                                    href="draggablecards.html">Draggablecards</a></li>
                                                            <li><a className="slide-item"
                                                                    href="rangeslider.html">Range-slider</a>
                                                            </li>
                                                            <li><a className="slide-item" href="calendar.html">Calendar</a>
                                                            </li>
                                                            <li><a className="slide-item" href="contacts.html">Contacts</a>
                                                            </li>
                                                            <li><a className="slide-item"
                                                                    href="image-compare.html">Image-compare</a></li>
                                                            <li><a className="slide-item"
                                                                    href="notification.html">Notification</a>
                                                            </li>
                                                            <li><a className="slide-item" href="widgets.html">Widgets</a>
                                                            </li>
                                                            <li><a className="slide-item"
                                                                    href="widget-notification.html">Widget-notification</a>
                                                            </li>
                                                            <li><a className="slide-item" href="treeview.html">Treeview</a>
                                                            </li>
                                                            <li className="sub-slide"> <a className="slide-item"
                                                                    data-bs-toggle="sub-slide"
                                                                    href="#"><span
                                                                        className="sub-side-menu__label">File-Manager</span><i
                                                                        className="sub-angle fe fe-chevron-down"></i></a>
                                                                <ul className="sub-slide-menu">
                                                                    <li><a className="sub-side-menu__item"
                                                                            href="file-manager.html">File-Manager</a>
                                                                    </li>
                                                                    <li><a className="sub-side-menu__item"
                                                                            href="file-manager-list.html">File-Manager-List</a>
                                                                    </li>
                                                                    <li><a className="sub-side-menu__item"
                                                                            href="file-manager-details.html">File-Manager-Details</a>
                                                                    </li>
                                                                    <li><a className="sub-side-menu__item"
                                                                            href="file-attachments.html">File-Attachments</a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="tab-pane tab-content-double" id="side18">
                                                        <h5 className="mt-3 mb-4 tx-16">Events</h5>
                                                        <div className="latest-timeline">
                                                            <div className="timeline">
                                                                <div className="mt-0 event-text">
                                                                    <h6 className="mb-0"><a target="_blank" href="#"
                                                                            className="timeline-head">Employees Meeting</a>
                                                                    </h6>
                                                                    <small className="text-muted mb-2">20 Feb, 2019</small>
                                                                    <p className="tx-13">sed do eiusmod tempor incididunt ut
                                                                        labore
                                                                        et. </p>
                                                                </div>
                                                                <div className="event-text">
                                                                    <h6 className="mb-0"><a href="#"
                                                                            className="timeline-head">Anniversary
                                                                            Celebration</a>
                                                                    </h6> <small className="mb-2 text-muted">14 Feb,
                                                                        2019</small>
                                                                    <p className="tx-13">sed do eiusmod tempor magna aliqua
                                                                        nisi ut.
                                                                    </p>
                                                                </div>
                                                                <div className="event-text">
                                                                    <h6 className="mb-0"><a href="#"
                                                                            className="timeline-head">Best
                                                                            Employee Announcement</a></h6> <small
                                                                        className="mb-2 text-muted">13 Feb, 2019</small>
                                                                    <p className="tx-13">sed do eiusmod tempor incididunt ut
                                                                        aliquip.</p>
                                                                </div>
                                                                <div className="event-text">
                                                                    <h6 className="mb-0"><a href="#"
                                                                            className="timeline-head">Weekend
                                                                            trip</a></h6> <small
                                                                        className="mb-2 text-muted">11 Feb,
                                                                        2019</small>
                                                                    <p className="tx-13">sed do eiusmod tempor incididunt ut
                                                                        aliquip.</p>
                                                                </div>
                                                                <div className="event-text">
                                                                    <h6 className="mb-0"><a href="#"
                                                                            className="timeline-head">New
                                                                            Project Started..</a></h6> <small
                                                                        className="mb-2 text-muted">09 Feb, 2019</small>
                                                                    <p className="tx-13">sed do eiusmod tempor incididunt ut
                                                                        aliquip.</p>
                                                                </div>
                                                                <div className="mb-0 event-text">
                                                                    <h6 className="mb-0"><a href="#"
                                                                            className="timeline-head">Gradening
                                                                            working</a></h6> <small
                                                                        className="mb-2 text-muted">02
                                                                        Feb, 2019</small>
                                                                    <p className="tx-13">sed do eiusmod tempor aliqua nisi
                                                                        ut
                                                                        aliquip. </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="tab-pane tab-content-double" id="side19">
                                                        <h5 className="mt-3 mb-4 tx-16">Activity</h5>
                                                        <div className="activity mt-3 p-0"> <img
                                                                src="/src/adminAssets/img/users/8.jpg" alt=""
                                                                className="img-activity" />
                                                            <div className="time-activity">
                                                                <div className="item-activity">
                                                                    <p className="mb-0 tx-13"><b>Samantha Melon</b> Add a
                                                                        new
                                                                        projects <b> AngularJS Template</b></p><small
                                                                        className="text-muted ">30 mins ago</small>
                                                                </div>
                                                            </div> <img src="/src/adminAssets/img/users/5.jpg" alt=""
                                                                className="img-activity" />
                                                            <div className="time-activity">
                                                                <div className="item-activity">
                                                                    <p className="mb-0 tx-13"><b>Allie Grater</b> Add a new
                                                                        projects
                                                                        <b>Free HTML Template</b>
                                                                    </p><small className="text-muted ">1 days ago</small>
                                                                </div>
                                                            </div> <img src="/src/adminAssets/img/users/6.jpg" alt=""
                                                                className="img-activity" />
                                                            <div className="time-activity">
                                                                <div className="item-activity">
                                                                    <p className="mb-0 tx-13"><b>Gabe Lackmen</b> Add a new
                                                                        projects
                                                                        <b>Free PSD Template</b>
                                                                    </p><small className="text-muted ">3
                                                                        days ago</small>
                                                                </div>
                                                            </div> <img src="/src/adminAssets/img/users/7.jpg" alt=""
                                                                className="img-activity" />
                                                            <div className="time-activity">
                                                                <div className="item-activity">
                                                                    <p className="mb-0 tx-13"><b>Abigail John</b> Add a new
                                                                        projects
                                                                        <b>Free UI Template</b>
                                                                    </p><small className="text-muted ">5
                                                                        days ago</small>
                                                                </div>
                                                            </div> <img src="/src/adminAssets/img/users/14.jpg" alt=""
                                                                className="img-activity" />
                                                            <div className="time-activity">
                                                                <div className="item-activity">
                                                                    <p className="mb-0 tx-13"><b>Jiggel mossin</b> Add a new
                                                                        projects <b> AngularJS Template</b></p><small
                                                                        className="text-muted ">30 mins ago</small>
                                                                </div>
                                                            </div> <img src="/src/adminAssets/img/users/3.jpg" alt=""
                                                                className="img-activity" />
                                                            <div className="time-activity">
                                                                <div className="item-activity">
                                                                    <p className="mb-0 tx-13"><b>Raven Chanan</b> Add a new
                                                                        projects
                                                                        <b>Free HTML Template</b>
                                                                    </p><small className="text-muted ">1 days ago</small>
                                                                </div>
                                                            </div> <img src="/src/adminAssets/img/users/1.jpg" alt=""
                                                                className="img-activity" />
                                                            <div className="time-activity">
                                                                <div className="item-activity">
                                                                    <p className="mb-0 tx-13"><b>Anna Ogden</b> Add a new
                                                                        projects
                                                                        <b>Free PSD Template</b>
                                                                    </p><small className="text-muted ">3
                                                                        days ago</small>
                                                                </div>
                                                            </div> <img src="/src/adminAssets/img/users/11.jpg" alt=""
                                                                className="img-activity" />
                                                            <div className="time-activity">
                                                                <div className="item-activity">
                                                                    <p className="mb-0 tx-13"><b>Allie Grater</b> Add a new
                                                                        projects
                                                                        <b>Free UI Template</b>
                                                                    </p><small className="text-muted ">5
                                                                        days ago</small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li className="slide"> <a className="side-menu__item" data-bs-toggle="slide"
                                        href="#"><svg xmlns="http://www.w3.org/2000/svg"
                                            className="side-menu__icon" viewBox="0 0 24 24">
                                            <path d="M0 0h24v24H0V0z" fill="none"></path>
                                            <path d="M6.26 9L12 13.47 17.74 9 12 4.53z" opacity=".3"></path>
                                            <path
                                                d="M19.37 12.8l-7.38 5.74-7.37-5.73L3 14.07l9 7 9-7zM12 2L3 9l1.63 1.27L12 16l7.36-5.73L21 9l-9-7zm0 11.47L6.26 9 12 4.53 17.74 9 12 13.47z">
                                            </path>
                                        </svg><span className="side-menu__label">Elements</span><i
                                            className="angle fe fe-chevron-down"></i></a>
                                    <ul className="slide-menu">
                                        <li className="panel sidetab-menu">
                                            <div className="tab-menu-heading p-0 pb-2 border-0">
                                                <div className="tabs-menu "> 
                                                    {/* <!-- Tabs --> */}
                                                    <ul className="nav panel-tabs">
                                                        <li><a href="#side20" className="active" data-bs-toggle="tab"><i
                                                                    className="fe fe-airplay"></i>
                                                                <p>Home</p>
                                                            </a></li>
                                                        <li><a href="#side21" data-bs-toggle="tab"><i
                                                                    className="fe fe-package"></i>
                                                                <p>Events</p>
                                                            </a></li>
                                                        <li><a href="#side22" data-bs-toggle="tab"><i
                                                                    className="fe fe-move"></i>
                                                                <p>Activity</p>
                                                            </a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="panel-body tabs-menu-body p-0 border-0">
                                                <div className="tab-content">
                                                    <div className="tab-pane tab-content-show active" id="side20">
                                                        <ul className="sidemenu-list">
                                                            <li className="side-menu__label1"><a
                                                                    href="#">Elements</a></li>
                                                            <li><a className="slide-item" href="alerts.html">Alerts</a></li>
                                                            <li><a className="slide-item" href="avatar.html">Avatar</a></li>
                                                            <li><a className="slide-item"
                                                                    href="breadcrumbs.html">Breadcrumbs</a>
                                                            </li>
                                                            <li><a className="slide-item" href="buttons.html">Buttons</a>
                                                            </li>
                                                            <li><a className="slide-item" href="badge.html">Badge</a></li>
                                                            <li><a className="slide-item" href="dropdown.html">Dropdown</a>
                                                            </li>
                                                            <li><a className="slide-item"
                                                                    href="thumbnails.html">Thumbnails</a></li>
                                                            <li><a className="slide-item" href="list-group.html">List
                                                                    Group</a></li>
                                                            <li><a className="slide-item"
                                                                    href="navigation.html">Navigation</a></li>
                                                            <li><a className="slide-item" href="images.html">Images</a></li>
                                                            <li><a className="slide-item"
                                                                    href="pagination.html">Pagination</a></li>
                                                            <li><a className="slide-item" href="popover.html">Popover</a>
                                                            </li>
                                                            <li><a className="slide-item" href="progress.html">Progress</a>
                                                            </li>
                                                            <li><a className="slide-item" href="spinners.html">Spinners</a>
                                                            </li>
                                                            <li><a className="slide-item" href="media-object.html">Media
                                                                    Object</a>
                                                            </li>
                                                            <li><a className="slide-item"
                                                                    href="typography.html">Typography</a></li>
                                                            <li><a className="slide-item" href="tooltip.html">Tooltip</a>
                                                            </li>
                                                            <li><a className="slide-item" href="toast.html">Toast</a></li>
                                                            <li><a className="slide-item" href="tags.html">Tags</a></li>
                                                            <li><a className="slide-item" href="tabs.html">Tabs</a></li>
                                                            <li><a className="slide-item"
                                                                    href="scrollspy.html">Scrollspy</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="tab-pane tab-content-double" id="side21">
                                                        <h5 className="mt-3 mb-4 tx-16">Events</h5>
                                                        <div className="latest-timeline">
                                                            <div className="timeline">
                                                                <div className="mt-0 event-text">
                                                                    <h6 className="mb-0"><a target="_blank" href="#"
                                                                            className="timeline-head">Employees Meeting</a>
                                                                    </h6>
                                                                    <small className="text-muted mb-2">20 Feb, 2019</small>
                                                                    <p className="tx-13">sed do eiusmod tempor incididunt ut
                                                                        labore
                                                                        et. </p>
                                                                </div>
                                                                <div className="event-text">
                                                                    <h6 className="mb-0"><a href="#"
                                                                            className="timeline-head">Anniversary
                                                                            Celebration</a>
                                                                    </h6> <small className="mb-2 text-muted">14 Feb,
                                                                        2019</small>
                                                                    <p className="tx-13">sed do eiusmod tempor magna aliqua
                                                                        nisi ut.
                                                                    </p>
                                                                </div>
                                                                <div className="event-text">
                                                                    <h6 className="mb-0"><a href="#"
                                                                            className="timeline-head">Best
                                                                            Employee Announcement</a></h6> <small
                                                                        className="mb-2 text-muted">13 Feb, 2019</small>
                                                                    <p className="tx-13">sed do eiusmod tempor incididunt ut
                                                                        aliquip.</p>
                                                                </div>
                                                                <div className="event-text">
                                                                    <h6 className="mb-0"><a href="#"
                                                                            className="timeline-head">Weekend
                                                                            trip</a></h6> <small
                                                                        className="mb-2 text-muted">11 Feb,
                                                                        2019</small>
                                                                    <p className="tx-13">sed do eiusmod tempor incididunt ut
                                                                        aliquip.</p>
                                                                </div>
                                                                <div className="event-text">
                                                                    <h6 className="mb-0"><a href="#"
                                                                            className="timeline-head">New
                                                                            Project Started..</a></h6> <small
                                                                        className="mb-2 text-muted">09 Feb, 2019</small>
                                                                    <p className="tx-13">sed do eiusmod tempor incididunt ut
                                                                        aliquip.</p>
                                                                </div>
                                                                <div className="mb-0 event-text">
                                                                    <h6 className="mb-0"><a href="#"
                                                                            className="timeline-head">Gradening
                                                                            working</a></h6> <small
                                                                        className="mb-2 text-muted">02
                                                                        Feb, 2019</small>
                                                                    <p className="tx-13">sed do eiusmod tempor aliqua nisi
                                                                        ut
                                                                        aliquip. </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="tab-pane tab-content-double" id="side22">
                                                        <h5 className="mt-3 mb-4 tx-16">Activity</h5>
                                                        <div className="activity mt-3 p-0"> <img  src="/src/adminAssets/img/users/8.jpg" alt=""
                                                                className="img-activity" />
                                                            <div className="time-activity">
                                                                <div className="item-activity">
                                                                    <p className="mb-0 tx-13"><b>Samantha Melon</b> Add a
                                                                        new
                                                                        projects <b> AngularJS Template</b></p><small
                                                                        className="text-muted ">30 mins ago</small>
                                                                </div>
                                                            </div> <img src="/src/adminAssets/img/users/5.jpg" alt=""
                                                                className="img-activity" />
                                                            <div className="time-activity">
                                                                <div className="item-activity">
                                                                    <p className="mb-0 tx-13"><b>Allie Grater</b> Add a new
                                                                        projects
                                                                        <b>Free HTML Template</b>
                                                                    </p><small className="text-muted ">1 days ago</small>
                                                                </div>
                                                            </div> <img src="/src/adminAssets/img/users/6.jpg" alt=""
                                                                className="img-activity" />
                                                            <div className="time-activity">
                                                                <div className="item-activity">
                                                                    <p className="mb-0 tx-13"><b>Gabe Lackmen</b> Add a new
                                                                        projects
                                                                        <b>Free PSD Template</b>
                                                                    </p><small className="text-muted ">3
                                                                        days ago</small>
                                                                </div>
                                                            </div> <img src="/src/adminAssets/img/users/7.jpg" alt=""
                                                                className="img-activity" />
                                                            <div className="time-activity">
                                                                <div className="item-activity">
                                                                    <p className="mb-0 tx-13"><b>Abigail John</b> Add a new
                                                                        projects
                                                                        <b>Free UI Template</b>
                                                                    </p><small className="text-muted ">5
                                                                        days ago</small>
                                                                </div>
                                                            </div> <img src="/src/adminAssets/img/users/14.jpg" alt=""
                                                                className="img-activity" />
                                                            <div className="time-activity" />
                                                                <div className="item-activity">
                                                                    <p className="mb-0 tx-13"><b>Jiggel mossin</b> Add a new
                                                                        projects <b> AngularJS Template</b></p><small
                                                                        className="text-muted ">30 mins ago</small>
                                                                </div>
                                                            </div> <img src="/src/adminAssets/img/users/3.jpg" alt=""
                                                                className="img-activity" />
                                                            <div className="time-activity">
                                                                <div className="item-activity">
                                                                    <p className="mb-0 tx-13"><b>Raven Chanan</b> Add a new
                                                                        projects
                                                                        <b>Free HTML Template</b>
                                                                    </p><small className="text-muted ">1 days ago</small>
                                                                </div>
                                                            </div> <img src="/src/adminAssets/img/users/1.jpg" alt=""
                                                                className="img-activity" />
                                                            <div className="time-activity">
                                                                <div className="item-activity">
                                                                    <p className="mb-0 tx-13"><b>Anna Ogden</b> Add a new
                                                                        projects
                                                                        <b>Free PSD Template</b>
                                                                    </p><small className="text-muted ">3
                                                                        days ago</small>
                                                                </div>
                                                            </div> <img src="/src/adminAssets/img/users/11.jpg" alt=""
                                                                className="img-activity" />
                                                            <div className="time-activity">
                                                                <div className="item-activity">
                                                                    <p className="mb-0 tx-13"><b>Allie Grater</b> Add a new
                                                                        projects
                                                                        <b>Free UI Template</b>
                                                                    </p><small className="text-muted ">5
                                                                        days ago</small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                         
                                        </li>
                                    </ul>
                                </li>
                                <li className="slide"> <a className="side-menu__item" data-bs-toggle="slide"
                                        href="#"><svg xmlns="http://www.w3.org/2000/svg"
                                            className="side-menu__icon" viewBox="0 0 24 24">
                                            <path d="M0 0h24v24H0z" fill="none"></path>
                                            <path
                                                d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8c.28 0 .5-.22.5-.5 0-.16-.08-.28-.14-.35-.41-.46-.63-1.05-.63-1.65 0-1.38 1.12-2.5 2.5-2.5H16c2.21 0 4-1.79 4-4 0-3.86-3.59-7-8-7zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 10 6.5 10s1.5.67 1.5 1.5S7.33 13 6.5 13zm3-4C8.67 9 8 8.33 8 7.5S8.67 6 9.5 6s1.5.67 1.5 1.5S10.33 9 9.5 9zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 6 14.5 6s1.5.67 1.5 1.5S15.33 9 14.5 9zm4.5 2.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5z"
                                                opacity=".3"></path>
                                            <path
                                                d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10c1.38 0 2.5-1.12 2.5-2.5 0-.61-.23-1.21-.64-1.67-.08-.09-.13-.21-.13-.33 0-.28.22-.5.5-.5H16c3.31 0 6-2.69 6-6 0-4.96-4.49-9-10-9zm4 13h-1.77c-1.38 0-2.5 1.12-2.5 2.5 0 .61.22 1.19.63 1.65.06.07.14.19.14.35 0 .28-.22.5-.5.5-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.14 8 7c0 2.21-1.79 4-4 4z">
                                            </path>
                                            <circle cx="6.5" cy="11.5" r="1.5"></circle>
                                            <circle cx="9.5" cy="7.5" r="1.5"></circle>
                                            <circle cx="14.5" cy="7.5" r="1.5"></circle>
                                            <circle cx="17.5" cy="11.5" r="1.5"></circle>
                                        </svg><span className="side-menu__label">Advanced UI</span><i
                                            className="angle fe fe-chevron-down"></i></a>
                                    <ul className="slide-menu">
                                        <li className="panel sidetab-menu">
                                            <div className="tab-menu-heading p-0 pb-2 border-0">
                                                <div className="tabs-menu ">
                                                     {/* <!-- Tabs --> */}
                                                    <ul className="nav panel-tabs">
                                                        <li><a href="#side23" className="active" data-bs-toggle="tab"><i
                                                                    className="fe fe-airplay"></i>
                                                                <p>Home</p>
                                                            </a></li>
                                                        <li><a href="#side24" data-bs-toggle="tab"><i
                                                                    className="fe fe-package"></i>
                                                                <p>Events</p>
                                                            </a></li>
                                                        <li><a href="#side25" data-bs-toggle="tab"><i
                                                                    className="fe fe-move"></i>
                                                                <p>Activity</p>
                                                            </a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="panel-body tabs-menu-body p-0 border-0">
                                                <div className="tab-content">
                                                    <div className="tab-pane tab-content-show active" id="side23">
                                                        <ul className="sidemenu-list">
                                                            <li className="side-menu__label1"><a
                                                                    href="#">Advanced
                                                                    Ui</a></li>
                                                            <li><a className="slide-item"
                                                                    href="accordion.html">Accordion</a></li>
                                                            <li><a className="slide-item" href="carousel.html">Carousel</a>
                                                            </li>
                                                            <li><a className="slide-item" href="collapse.html">Collapse</a>
                                                            </li>
                                                            <li><a className="slide-item" href="modals.html">Modals</a></li>
                                                            <li><a className="slide-item" href="timeline.html">Timeline</a>
                                                            </li>
                                                            <li><a className="slide-item" href="sweet-alert.html">Sweet
                                                                    Alert</a>
                                                            </li>
                                                            <li><a className="slide-item" href="rating.html">Ratings</a>
                                                            </li>
                                                            <li><a className="slide-item" href="counters.html">Counters</a>
                                                            </li>
                                                            <li><a className="slide-item" href="search.html">Search</a></li>
                                                            <li><a className="slide-item" href="userlist.html">Userlist</a>
                                                            </li>
                                                            <li className="sub-slide"> <a className="slide-item"
                                                                    data-bs-toggle="sub-slide"
                                                                    href="#"><span
                                                                        className="sub-side-menu__label">Blog-Pages</span><i
                                                                        className="sub-angle fe fe-chevron-down"></i></a>
                                                                <ul className="sub-slide-menu">
                                                                    <li><a className="sub-side-menu__item"
                                                                            href="blog.html">Blog</a>
                                                                    </li>
                                                                    <li><a className="sub-side-menu__item"
                                                                            href="blog-details.html">Blog-Details</a>
                                                                    </li>
                                                                    <li><a className="sub-side-menu__item"
                                                                            href="edit-post.html">Blog-Edit</a></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="tab-pane  tab-content-double" id="side24">
                                                        <h5 className="mt-3 mb-4 tx-16">Events</h5>
                                                        <div className="latest-timeline">
                                                            <div className="timeline">
                                                                <div className="mt-0 event-text">
                                                                    <h6 className="mb-0"><a target="_blank" href="#"
                                                                            className="timeline-head">Employees Meeting</a>
                                                                    </h6>
                                                                    <small className="text-muted mb-2">20 Feb, 2019</small>
                                                                    <p className="tx-13">sed do eiusmod tempor incididunt ut
                                                                        labore
                                                                        et. </p>
                                                                </div>
                                                                <div className="event-text">
                                                                    <h6 className="mb-0"><a href="#"
                                                                            className="timeline-head">Anniversary
                                                                            Celebration</a>
                                                                    </h6> <small className="mb-2 text-muted">14 Feb,
                                                                        2019</small>
                                                                    <p className="tx-13">sed do eiusmod tempor magna aliqua
                                                                        nisi ut.
                                                                    </p>
                                                                </div>
                                                                <div className="event-text">
                                                                    <h6 className="mb-0"><a href="#"
                                                                            className="timeline-head">Best
                                                                            Employee Announcement</a></h6> <small
                                                                        className="mb-2 text-muted">13 Feb, 2019</small>
                                                                    <p className="tx-13">sed do eiusmod tempor incididunt ut
                                                                        aliquip.</p>
                                                                </div>
                                                                <div className="event-text">
                                                                    <h6 className="mb-0"><a href="#"
                                                                            className="timeline-head">Weekend
                                                                            trip</a></h6> <small
                                                                        className="mb-2 text-muted">11 Feb,
                                                                        2019</small>
                                                                    <p className="tx-13">sed do eiusmod tempor incididunt ut
                                                                        aliquip.</p>
                                                                </div>
                                                                <div className="event-text">
                                                                    <h6 className="mb-0"><a href="#"
                                                                            className="timeline-head">New
                                                                            Project Started..</a></h6> <small
                                                                        className="mb-2 text-muted">09 Feb, 2019</small>
                                                                    <p className="tx-13">sed do eiusmod tempor incididunt ut
                                                                        aliquip.</p>
                                                                </div>
                                                                <div className="mb-0 event-text">
                                                                    <h6 className="mb-0"><a href="#"
                                                                            className="timeline-head">Gradening
                                                                            working</a></h6> <small
                                                                        className="mb-2 text-muted">02
                                                                        Feb, 2019</small>
                                                                    <p className="tx-13">sed do eiusmod tempor aliqua nisi
                                                                        ut
                                                                        aliquip. </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="tab-pane  tab-content-double" id="side25">
                                                        <h5 className="mt-3 mb-4 tx-16">Activity</h5>
                                                        <div className="activity mt-3 p-0"> <img
                                                                src="/src/adminAssets/img/users/8.jpg" alt=""
                                                                className="img-activity" />
                                                            <div className="time-activity">
                                                                <div className="item-activity">
                                                                    <p className="mb-0 tx-13"><b>Samantha Melon</b> Add a
                                                                        new
                                                                        projects <b> AngularJS Template</b></p><small
                                                                        className="text-muted ">30 mins ago</small>
                                                                </div>
                                                            </div> <img src="/src/adminAssets/img/users/5.jpg" alt=""
                                                                className="img-activity" />
                                                            <div className="time-activity">
                                                                <div className="item-activity">
                                                                    <p className="mb-0 tx-13"><b>Allie Grater</b> Add a new
                                                                        projects
                                                                        <b>Free HTML Template</b>
                                                                    </p><small className="text-muted ">1 days ago</small>
                                                                </div>
                                                            </div> <img src="/src/adminAssets/img/users/6.jpg" alt=""
                                                                className="img-activity" />
                                                            <div className="time-activity">
                                                                <div className="item-activity">
                                                                    <p className="mb-0 tx-13"><b>Gabe Lackmen</b> Add a new
                                                                        projects
                                                                        <b>Free PSD Template</b>
                                                                    </p><small className="text-muted ">3
                                                                        days ago</small>
                                                                </div>
                                                            </div> <img src="/src/adminAssets/img/users/7.jpg" alt=""
                                                                className="img-activity" />
                                                            <div className="time-activity">
                                                                <div className="item-activity">
                                                                    <p className="mb-0 tx-13"><b>Abigail John</b> Add a new
                                                                        projects
                                                                        <b>Free UI Template</b>
                                                                    </p><small className="text-muted ">5
                                                                        days ago</small>
                                                                </div>
                                                            </div> <img src="/src/adminAssets/img/users/14.jpg" alt=""
                                                                className="img-activity" />
                                                            <div className="time-activity">
                                                                <div className="item-activity">
                                                                    <p className="mb-0 tx-13"><b>Jiggel mossin</b> Add a new
                                                                        projects <b> AngularJS Template</b></p><small
                                                                        className="text-muted ">30 mins ago</small>
                                                                </div>
                                                            </div> <img src="/src/adminAssets/img/users/3.jpg" alt=""
                                                                className="img-activity" />
                                                            <div className="time-activity">
                                                                <div className="item-activity">
                                                                    <p className="mb-0 tx-13"><b>Raven Chanan</b> Add a new
                                                                        projects
                                                                        <b>Free HTML Template</b>
                                                                    </p><small className="text-muted ">1 days ago</small>
                                                                </div>
                                                            </div> <img src="/src/adminAssets/img/users/1.jpg" alt=""
                                                                className="img-activity" />
                                                            <div className="time-activity">
                                                                <div className="item-activity">
                                                                    <p className="mb-0 tx-13"><b>Anna Ogden</b> Add a new
                                                                        projects
                                                                        <b>Free PSD Template</b>
                                                                    </p><small className="text-muted ">3
                                                                        days ago</small>
                                                                </div>
                                                            </div> <img src="/src/adminAssets/img/users/11.jpg" alt=""
                                                                className="img-activity" />
                                                            <div className="time-activity">
                                                                <div className="item-activity">
                                                                    <p className="mb-0 tx-13"><b>Allie Grater</b> Add a new
                                                                        projects
                                                                        <b>Free UI Template</b>
                                                                    </p><small className="text-muted ">5
                                                                        days ago</small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li className="side-item side-item-category">Multi Levels</li>
                                <li className="slide"> <a className="side-menu__item" data-bs-toggle="slide"
                                        href="#"><svg xmlns="http://www.w3.org/2000/svg"
                                            className="side-menu__icon" viewBox="0 0 24 24">
                                            <path d="M0 0h24v24H0V0z" fill="none"></path>
                                            <path
                                                d="M5 9h14V5H5v4zm2-3.5c.83 0 1.5.67 1.5 1.5S7.83 8.5 7 8.5 5.5 7.83 5.5 7 6.17 5.5 7 5.5zM5 19h14v-4H5v4zm2-3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5z"
                                                opacity=".3"></path>
                                            <path
                                                d="M20 13H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zm-1 6H5v-4h14v4zm-12-.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zM20 3H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 6H5V5h14v4zM7 8.5c.83 0 1.5-.67 1.5-1.5S7.83 5.5 7 5.5 5.5 6.17 5.5 7 6.17 8.5 7 8.5z">
                                            </path>
                                        </svg><span className="side-menu__label">Menu-levels</span><i
                                            className="angle fe fe-chevron-down"></i></a>
                                    <ul className="slide-menu">
                                        <li className="panel sidetab-menu">
                                            <div className="tab-menu-heading p-0 pb-2 border-0">
                                                <div className="tabs-menu "> 
                                                    {/* <!-- Tabs --> */}
                                                    <ul className="nav panel-tabs">
                                                        <li><a href="#side26" className="active" data-bs-toggle="tab"><i
                                                                    className="fe fe-airplay"></i>
                                                                <p>Home</p>
                                                            </a></li>
                                                        <li><a href="#side27" data-bs-toggle="tab"><i
                                                                    className="fe fe-package"></i>
                                                                <p>Events</p>
                                                            </a></li>
                                                        <li><a href="#side28" data-bs-toggle="tab"><i
                                                                    className="fe fe-move"></i>
                                                                <p>Activity</p>
                                                            </a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="panel-body tabs-menu-body p-0 border-0">
                                                <div className="tab-content">
                                                    <div className="tab-pane tab-content-show active" id="side26">
                                                        <ul className="sidemenu-list">
                                                            <li className="side-menu__label1"><a
                                                                    href="#">Menu-Levels</a></li>
                                                            <li><a className="slide-item"
                                                                    href="#">Level-1</a>
                                                            </li>
                                                            <li className="sub-slide"> <a className="slide-item"
                                                                    data-bs-toggle="sub-slide"
                                                                    href="#"><span
                                                                        className="sub-side-menu__label">Level-2</span><i
                                                                        className="sub-angle fe fe-chevron-down"></i></a>
                                                                <ul className="sub-slide-menu">
                                                                    <li><a className="sub-side-menu__item"
                                                                            href="#">Level-2.1</a>
                                                                    </li>
                                                                    <li><a className="sub-side-menu__item"
                                                                            href="#">Level-2.2</a>
                                                                    </li>
                                                                    <li className="sub-slide2"> <a
                                                                            className="sub-side-menu__item"
                                                                            data-bs-toggle="sub-slide2"
                                                                            href="#"><span
                                                                                className="sub-side-menu__label">Level-2.3</span><i
                                                                                className="sub-angle2 fe fe-chevron-down"></i></a>
                                                                        <ul className="sub-slide-menu1">
                                                                            <li><a className="sub-slide-item2"
                                                                                    href="#">Level-2.3.1</a>
                                                                            </li>
                                                                            <li><a className="sub-slide-item2"
                                                                                    href="#">Level-2.3.2</a>
                                                                            </li>
                                                                            <li><a className="sub-slide-item2"
                                                                                    href="#">Level-2.3.3</a>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="tab-pane tab-content-double" id="side27">
                                                        <h5 className="mt-3 mb-4 tx-16">Events</h5>
                                                        <div className="latest-timeline">
                                                            <div className="timeline">
                                                                <div className="mt-0 event-text">
                                                                    <h6 className="mb-0"><a target="_blank" href="#"
                                                                            className="timeline-head">Employees Meeting</a>
                                                                    </h6>
                                                                    <small className="text-muted mb-2">20 Feb, 2019</small>
                                                                    <p className="tx-13">sed do eiusmod tempor incididunt ut
                                                                        labore
                                                                        et. </p>
                                                                </div>
                                                                <div className="event-text">
                                                                    <h6 className="mb-0"><a href="#"
                                                                            className="timeline-head">Anniversary
                                                                            Celebration</a>
                                                                    </h6> <small className="mb-2 text-muted">14 Feb,
                                                                        2019</small>
                                                                    <p className="tx-13">sed do eiusmod tempor magna aliqua
                                                                        nisi ut.
                                                                    </p>
                                                                </div>
                                                                <div className="event-text">
                                                                    <h6 className="mb-0"><a href="#"
                                                                            className="timeline-head">Best
                                                                            Employee Announcement</a></h6> <small
                                                                        className="mb-2 text-muted">13 Feb, 2019</small>
                                                                    <p className="tx-13">sed do eiusmod tempor incididunt ut
                                                                        aliquip.</p>
                                                                </div>
                                                                <div className="event-text">
                                                                    <h6 className="mb-0"><a href="#"
                                                                            className="timeline-head">Weekend
                                                                            trip</a></h6> <small
                                                                        className="mb-2 text-muted">11 Feb,
                                                                        2019</small>
                                                                    <p className="tx-13">sed do eiusmod tempor incididunt ut
                                                                        aliquip.</p>
                                                                </div>
                                                                <div className="event-text">
                                                                    <h6 className="mb-0"><a href="#"
                                                                            className="timeline-head">New
                                                                            Project Started..</a></h6> <small
                                                                        className="mb-2 text-muted">09 Feb, 2019</small>
                                                                    <p className="tx-13">sed do eiusmod tempor incididunt ut
                                                                        aliquip.</p>
                                                                </div>
                                                                <div className="mb-0 event-text">
                                                                    <h6 className="mb-0"><a href="#"
                                                                            className="timeline-head">Gradening
                                                                            working</a></h6> <small
                                                                        className="mb-2 text-muted">02
                                                                        Feb, 2019</small>
                                                                    <p className="tx-13">sed do eiusmod tempor aliqua nisi
                                                                        ut
                                                                        aliquip. </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="tab-pane tab-content-double" id="side28">
                                                        <h5 className="mt-3 mb-4 tx-16">Activity</h5>
                                                        <div className="activity mt-3 p-0"> <img
                                                                src="/src/adminAssets/img/users/8.jpg" alt=""
                                                                className="img-activity" />
                                                            <div className="time-activity">
                                                                <div className="item-activity">
                                                                    <p className="mb-0 tx-13"><b>Samantha Melon</b> Add a
                                                                        new
                                                                        projects <b> AngularJS Template</b></p><small
                                                                        className="text-muted ">30 mins ago</small>
                                                                </div>
                                                            </div> <img src="/src/adminAssets/img/users/5.jpg" alt=""
                                                                className="img-activity" />
                                                            <div className="time-activity">
                                                                <div className="item-activity">
                                                                    <p className="mb-0 tx-13"><b>Allie Grater</b> Add a new
                                                                        projects
                                                                        <b>Free HTML Template</b>
                                                                    </p><small className="text-muted ">1 days ago</small>
                                                                </div>
                                                            </div> <img src="/src/adminAssets/img/users/6.jpg" alt=""
                                                                className="img-activity" />
                                                            <div className="time-activity">
                                                                <div className="item-activity">
                                                                    <p className="mb-0 tx-13"><b>Gabe Lackmen</b> Add a new
                                                                        projects
                                                                        <b>Free PSD Template</b>
                                                                    </p><small className="text-muted ">3
                                                                        days ago</small>
                                                                </div>
                                                            </div> <img src="/src/adminAssets/img/users/7.jpg" alt=""
                                                                className="img-activity" />
                                                            <div className="time-activity">
                                                                <div className="item-activity">
                                                                    <p className="mb-0 tx-13"><b>Abigail John</b> Add a new
                                                                        projects
                                                                        <b>Free UI Template</b>
                                                                    </p><small className="text-muted ">5
                                                                        days ago</small>
                                                                </div>
                                                            </div> <img src="/src/adminAssets/img/users/14.jpg" alt=""
                                                                className="img-activity" />
                                                            <div className="time-activity">
                                                                <div className="item-activity">
                                                                    <p className="mb-0 tx-13"><b>Jiggel mossin</b> Add a new
                                                                        projects <b> AngularJS Template</b></p><small
                                                                        className="text-muted ">30 mins ago</small>
                                                                </div>
                                                            </div> <img src="/src/adminAssets/img/users/3.jpg" alt=""
                                                                className="img-activity" />
                                                            <div className="time-activity">
                                                                <div className="item-activity">
                                                                    <p className="mb-0 tx-13"><b>Raven Chanan</b> Add a new
                                                                        projects
                                                                        <b>Free HTML Template</b>
                                                                    </p><small className="text-muted ">1 days ago</small>
                                                                </div>
                                                            </div> <img src="/src/adminAssets/img/users/1.jpg" alt=""
                                                                className="img-activity" />
                                                            <div className="time-activity">
                                                                <div className="item-activity">
                                                                    <p className="mb-0 tx-13"><b>Anna Ogden</b> Add a new
                                                                        projects
                                                                        <b>Free PSD Template</b>
                                                                    </p><small className="text-muted ">3
                                                                        days ago</small>
                                                                </div>
                                                            </div> <img src="/src/adminAssets/img/users/11.jpg" alt=""
                                                                className="img-activity" />
                                                            <div className="time-activity">
                                                                <div className="item-activity">
                                                                    <p className="mb-0 tx-13"><b>Allie Grater</b> Add a new
                                                                        projects
                                                                        <b>Free UI Template</b>
                                                                    </p><small className="text-muted ">5
                                                                        days ago</small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li className="side-item side-item-category">COMPONENTS</li>
                                <li className="slide"> <a className="side-menu__item" data-bs-toggle="slide"
                                        href="#"><svg xmlns="http://www.w3.org/2000/svg"
                                            className="side-menu__icon" viewBox="0 0 24 24">
                                            <path d="M0 0h24v24H0V0z" fill="none"></path>
                                            <path d="M13 4H6v16h12V9h-5V4zm3 14H8v-2h8v2zm0-6v2H8v-2h8z" opacity=".3">
                                            </path>
                                            <path
                                                d="M8 16h8v2H8zm0-4h8v2H8zm6-10H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z">
                                            </path>
                                        </svg><span className="side-menu__label">Forms</span><i
                                            className="angle fe fe-chevron-down"></i></a>
                                    <ul className="slide-menu">
                                        <li className="panel sidetab-menu">
                                            <div className="tab-menu-heading p-0 pb-2 border-0">
                                                <div className="tabs-menu "> 
                                                    <ul className="nav panel-tabs">
                                                        <li><a href="#side29" className="active" data-bs-toggle="tab"><i
                                                                    className="fe fe-airplay"></i>
                                                                <p>Home</p>
                                                            </a></li>
                                                        <li><a href="#side30" data-bs-toggle="tab"><i
                                                                    className="fe fe-package"></i>
                                                                <p>Events</p>
                                                            </a></li>
                                                        <li><a href="#side31" data-bs-toggle="tab"><i
                                                                    className="fe fe-move"></i>
                                                                <p>Activity</p>
                                                            </a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="panel-body tabs-menu-body p-0 border-0">
                                                <div className="tab-content">
                                                    <div className="tab-pane tab-content-show active" id="side29">
                                                        <ul className="sidemenu-list">
                                                            <li className="side-menu__label1"><a
                                                                    href="#">Forms</a></li>
                                                            <li><a className="slide-item" href="form-elements.html">Form
                                                                    Elements</a></li>
                                                            <li><a className="slide-item" href="form-advanced.html">Advanced
                                                                    Forms</a></li>
                                                            <li><a className="slide-item" href="form-layouts.html">Form
                                                                    Layouts</a>
                                                            </li>
                                                            <li><a className="slide-item" href="form-validation.html">Form
                                                                    Validation</a></li>
                                                            <li><a className="slide-item" href="form-wizards.html">Form
                                                                    Wizards</a>
                                                            </li>
                                                            <li><a className="slide-item" href="form-editor.html">WYSIWYG
                                                                    Editor</a>
                                                            </li>
                                                            <li><a className="slide-item"
                                                                    href="form-sizes.html">Form-Sizes</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="tab-pane tab-content-double" id="side30">
                                                        <h5 className="mt-3 mb-4 tx-16">Events</h5>
                                                        <div className="latest-timeline">
                                                            <div className="timeline">
                                                                <div className="mt-0 event-text">
                                                                    <h6 className="mb-0"><a target="_blank" href="#"
                                                                            className="timeline-head">Employees Meeting</a>
                                                                    </h6>
                                                                    <small className="text-muted mb-2">20 Feb, 2019</small>
                                                                    <p className="tx-13">sed do eiusmod tempor incididunt ut
                                                                        labore
                                                                        et. </p>
                                                                </div>
                                                                <div className="event-text">
                                                                    <h6 className="mb-0"><a href="#"
                                                                            className="timeline-head">Anniversary
                                                                            Celebration</a>
                                                                    </h6> <small className="mb-2 text-muted">14 Feb,
                                                                        2019</small>
                                                                    <p className="tx-13">sed do eiusmod tempor magna aliqua
                                                                        nisi ut.
                                                                    </p>
                                                                </div>
                                                                <div className="event-text">
                                                                    <h6 className="mb-0"><a href="#"
                                                                            className="timeline-head">Best
                                                                            Employee Announcement</a></h6> <small
                                                                        className="mb-2 text-muted">13 Feb, 2019</small>
                                                                    <p className="tx-13">sed do eiusmod tempor incididunt ut
                                                                        aliquip.</p>
                                                                </div>
                                                                <div className="event-text">
                                                                    <h6 className="mb-0"><a href="#"
                                                                            className="timeline-head">Weekend
                                                                            trip</a></h6> <small
                                                                        className="mb-2 text-muted">11 Feb,
                                                                        2019</small>
                                                                    <p className="tx-13">sed do eiusmod tempor incididunt ut
                                                                        aliquip.</p>
                                                                </div>
                                                                <div className="event-text">
                                                                    <h6 className="mb-0"><a href="#"
                                                                            className="timeline-head">New
                                                                            Project Started..</a></h6> <small
                                                                        className="mb-2 text-muted">09 Feb, 2019</small>
                                                                    <p className="tx-13">sed do eiusmod tempor incididunt ut
                                                                        aliquip.</p>
                                                                </div>
                                                                <div className="mb-0 event-text">
                                                                    <h6 className="mb-0"><a href="#"
                                                                            className="timeline-head">Gradening
                                                                            working</a></h6> <small
                                                                        className="mb-2 text-muted">02
                                                                        Feb, 2019</small>
                                                                    <p className="tx-13">sed do eiusmod tempor aliqua nisi
                                                                        ut
                                                                        aliquip. </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="tab-pane tab-content-double" id="side31">
                                                        <h5 className="mt-3 mb-4 tx-16">Activity</h5>
                                                        <div className="activity mt-3 p-0"> <img
                                                                src="/src/adminAssets/img/users/8.jpg" alt=""
                                                                className="img-activity" />
                                                            <div className="time-activity">
                                                                <div className="item-activity">
                                                                    <p className="mb-0 tx-13"><b>Samantha Melon</b> Add a
                                                                        new
                                                                        projects <b> AngularJS Template</b></p><small
                                                                        className="text-muted ">30 mins ago</small>
                                                                </div>
                                                            </div> <img src="/src/adminAssets/img/users/5.jpg" alt=""
                                                                className="img-activity" />
                                                            <div className="time-activity">
                                                                <div className="item-activity">
                                                                    <p className="mb-0 tx-13"><b>Allie Grater</b> Add a new
                                                                        projects
                                                                        <b>Free HTML Template</b>
                                                                    </p><small className="text-muted ">1 days ago</small>
                                                                </div>
                                                            </div> <img src="/src/adminAssets/img/users/6.jpg" alt=""
                                                                className="img-activity" />
                                                            <div className="time-activity">
                                                                <div className="item-activity">
                                                                    <p className="mb-0 tx-13"><b>Gabe Lackmen</b> Add a new
                                                                        projects
                                                                        <b>Free PSD Template</b>
                                                                    </p><small className="text-muted ">3
                                                                        days ago</small>
                                                                </div>
                                                            </div> <img src="/src/adminAssets/img/users/7.jpg" alt=""
                                                                className="img-activity" />
                                                            <div className="time-activity">
                                                                <div className="item-activity">
                                                                    <p className="mb-0 tx-13"><b>Abigail John</b> Add a new
                                                                        projects
                                                                        <b>Free UI Template</b>
                                                                    </p><small className="text-muted ">5
                                                                        days ago</small>
                                                                </div>
                                                            </div> <img src="/src/adminAssets/img/users/14.jpg" alt=""
                                                                className="img-activity" />
                                                            <div className="time-activity">
                                                                <div className="item-activity">
                                                                    <p className="mb-0 tx-13"><b>Jiggel mossin</b> Add a new
                                                                        projects <b> AngularJS Template</b></p><small
                                                                        className="text-muted ">30 mins ago</small>
                                                                </div>
                                                            </div> <img src="/src/adminAssets/img/users/3.jpg" alt=""
                                                                className="img-activity" />
                                                            <div className="time-activity">
                                                                <div className="item-activity">
                                                                    <p className="mb-0 tx-13"><b>Raven Chanan</b> Add a new
                                                                        projects
                                                                        <b>Free HTML Template</b>
                                                                    </p><small className="text-muted ">1 days ago</small>
                                                                </div>
                                                            </div> <img src="/src/adminAssets/img/users/1.jpg" alt=""
                                                                className="img-activity" />
                                                            <div className="time-activity">
                                                                <div className="item-activity">
                                                                    <p className="mb-0 tx-13"><b>Anna Ogden</b> Add a new
                                                                        projects
                                                                        <b>Free PSD Template</b>
                                                                    </p><small className="text-muted ">3
                                                                        days ago</small>
                                                                </div>
                                                            </div> <img src="/src/adminAssets/img/users/11.jpg" alt=""
                                                                className="img-activity" />
                                                            <div className="time-activity">
                                                                <div className="item-activity">
                                                                    <p className="mb-0 tx-13"><b>Allie Grater</b> Add a new
                                                                        projects
                                                                        <b>Free UI Template</b>
                                                                    </p><small className="text-muted ">5
                                                                        days ago</small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li className="slide"> <a className="side-menu__item" data-bs-toggle="slide"
                                        href="#"><svg xmlns="http://www.w3.org/2000/svg"
                                            className="side-menu__icon" viewBox="0 0 24 24">
                                            <path d="M0 0h24v24H0V0z" fill="none"></path>
                                            <path d="M5 5h15v3H5zm12 5h3v9h-3zm-7 0h5v9h-5zm-5 0h3v9H5z" opacity=".3">
                                            </path>
                                            <path
                                                d="M20 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM8 19H5v-9h3v9zm7 0h-5v-9h5v9zm5 0h-3v-9h3v9zm0-11H5V5h15v3z">
                                            </path>
                                        </svg><span className="side-menu__label">Tables</span><i
                                            className="angle fe fe-chevron-down"></i></a>
                                    <ul className="slide-menu">
                                        <li className="panel sidetab-menu">
                                            <div className="tab-menu-heading p-0 pb-2 border-0">
                                                <div className="tabs-menu "> 
                                                    <ul className="nav panel-tabs">
                                                        <li><a href="#side32" className="active" data-bs-toggle="tab"><i
                                                                    className="fe fe-airplay"></i>
                                                                <p>Home</p>
                                                            </a></li>
                                                        <li><a href="#side33" data-bs-toggle="tab"><i
                                                                    className="fe fe-package"></i>
                                                                <p>Events</p>
                                                            </a></li>
                                                        <li><a href="#side34" data-bs-toggle="tab"><i
                                                                    className="fe fe-move"></i>
                                                                <p>Activity</p>
                                                            </a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="panel-body tabs-menu-body p-0 border-0">
                                                <div className="tab-content">
                                                    <div className="tab-pane tab-content-show active" id="side32">
                                                        <ul className="sidemenu-list">
                                                            <li className="side-menu__label1"><a
                                                                    href="#">Tables</a></li>
                                                            <li><a className="slide-item" href="table-basic.html">Basic
                                                                    Tables</a>
                                                            </li>
                                                            <li><a className="slide-item" href="table-data.html">Data
                                                                    Tables</a>
                                                            </li>
                                                            <li><a className="slide-item" href="edit-table.html">Edit
                                                                    Tables</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="tab-pane tab-content-double" id="side33">
                                                        <h5 className="mt-3 mb-4 tx-16">Events</h5>
                                                        <div className="latest-timeline">
                                                            <div className="timeline">
                                                                <div className="mt-0 event-text">
                                                                    <h6 className="mb-0"><a target="_blank" href="#"
                                                                            className="timeline-head">Employees Meeting</a>
                                                                    </h6>
                                                                    <small className="text-muted mb-2">20 Feb, 2019</small>
                                                                    <p className="tx-13">sed do eiusmod tempor incididunt ut
                                                                        labore
                                                                        et. </p>
                                                                </div>
                                                                <div className="event-text">
                                                                    <h6 className="mb-0"><a href="#"
                                                                            className="timeline-head">Anniversary
                                                                            Celebration</a>
                                                                    </h6> <small className="mb-2 text-muted">14 Feb,
                                                                        2019</small>
                                                                    <p className="tx-13">sed do eiusmod tempor magna aliqua
                                                                        nisi ut.
                                                                    </p>
                                                                </div>
                                                                <div className="event-text">
                                                                    <h6 className="mb-0"><a href="#"
                                                                            className="timeline-head">Best
                                                                            Employee Announcement</a></h6> <small
                                                                        className="mb-2 text-muted">13 Feb, 2019</small>
                                                                    <p className="tx-13">sed do eiusmod tempor incididunt ut
                                                                        aliquip.</p>
                                                                </div>
                                                                <div className="event-text">
                                                                    <h6 className="mb-0"><a href="#"
                                                                            className="timeline-head">Weekend
                                                                            trip</a></h6> <small
                                                                        className="mb-2 text-muted">11 Feb,
                                                                        2019</small>
                                                                    <p className="tx-13">sed do eiusmod tempor incididunt ut
                                                                        aliquip.</p>
                                                                </div>
                                                                <div className="event-text">
                                                                    <h6 className="mb-0"><a href="#"
                                                                            className="timeline-head">New
                                                                            Project Started..</a></h6> <small
                                                                        className="mb-2 text-muted">09 Feb, 2019</small>
                                                                    <p className="tx-13">sed do eiusmod tempor incididunt ut
                                                                        aliquip.</p>
                                                                </div>
                                                                <div className="mb-0 event-text">
                                                                    <h6 className="mb-0"><a href="#"
                                                                            className="timeline-head">Gradening
                                                                            working</a></h6> <small
                                                                        className="mb-2 text-muted">02
                                                                        Feb, 2019</small>
                                                                    <p className="tx-13">sed do eiusmod tempor aliqua nisi
                                                                        ut
                                                                        aliquip. </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="tab-pane tab-content-double" id="side34">
                                                        <h5 className="mt-3 mb-4 tx-16">Activity</h5>
                                                        <div className="activity mt-3 p-0"> <img
                                                                src="/src/adminAssets/img/users/8.jpg" alt=""
                                                                className="img-activity" />
                                                            <div className="time-activity">
                                                                <div className="item-activity">
                                                                    <p className="mb-0 tx-13"><b>Samantha Melon</b> Add a
                                                                        new
                                                                        projects <b> AngularJS Template</b></p><small
                                                                        className="text-muted ">30 mins ago</small>
                                                                </div>
                                                            </div> <img src="/src/adminAssets/img/users/5.jpg" alt=""
                                                                className="img-activity" />
                                                            <div className="time-activity">
                                                                <div className="item-activity">
                                                                    <p className="mb-0 tx-13"><b>Allie Grater</b> Add a new
                                                                        projects
                                                                        <b>Free HTML Template</b>
                                                                    </p><small className="text-muted ">1 days ago</small>
                                                                </div>
                                                            </div> <img src="/src/adminAssets/img/users/6.jpg" alt=""
                                                                className="img-activity" />
                                                            <div className="time-activity">
                                                                <div className="item-activity">
                                                                    <p className="mb-0 tx-13"><b>Gabe Lackmen</b> Add a new
                                                                        projects
                                                                        <b>Free PSD Template</b>
                                                                    </p><small className="text-muted ">3
                                                                        days ago</small>
                                                                </div>
                                                            </div> <img src="/src/adminAssets/img/users/7.jpg" alt=""
                                                                className="img-activity" />
                                                            <div className="time-activity">
                                                                <div className="item-activity">
                                                                    <p className="mb-0 tx-13"><b>Abigail John</b> Add a new
                                                                        projects
                                                                        <b>Free UI Template</b>
                                                                    </p><small className="text-muted ">5
                                                                        days ago</small>
                                                                </div>
                                                            </div> <img src="/src/adminAssets/img/users/14.jpg" alt=""
                                                                className="img-activity" />
                                                            <div className="time-activity">
                                                                <div className="item-activity">
                                                                    <p className="mb-0 tx-13"><b>Jiggel mossin</b> Add a new
                                                                        projects <b> AngularJS Template</b></p><small
                                                                        className="text-muted ">30 mins ago</small>
                                                                </div>
                                                            </div> <img src="/src/adminAssets/img/users/3.jpg" alt=""
                                                                className="img-activity" />
                                                            <div className="time-activity">
                                                                <div className="item-activity">
                                                                    <p className="mb-0 tx-13"><b>Raven Chanan</b> Add a new
                                                                        projects
                                                                        <b>Free HTML Template</b>
                                                                    </p><small className="text-muted ">1 days ago</small>
                                                                </div>
                                                            </div> <img src="/src/adminAssets/img/users/1.jpg" alt=""
                                                                className="img-activity" />
                                                            <div className="time-activity">
                                                                <div className="item-activity">
                                                                    <p className="mb-0 tx-13"><b>Anna Ogden</b> Add a new
                                                                        projects
                                                                        <b>Free PSD Template</b>
                                                                    </p><small className="text-muted ">3
                                                                        days ago</small>
                                                                </div>
                                                            </div> <img src="/src/adminAssets/img/users/11.jpg" alt=""
                                                                className="img-activity" />
                                                            <div className="time-activity">
                                                                <div className="item-activity">
                                                                    <p className="mb-0 tx-13"><b>Allie Grater</b> Add a new
                                                                        projects
                                                                        <b>Free UI Template</b>
                                                                    </p><small className="text-muted ">5
                                                                        days ago</small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li className="slide"> <a className="side-menu__item" href="landing-page.html"><svg
                                            xmlns="http://www.w3.org/2000/svg" className="side-menu__icon"
                                            viewBox="0 0 24 24">
                                            <path d="M0 0h24v24H0z" fill="none"></path>
                                            <path
                                                d="M12 4.02C7.6 4.02 4.02 7.6 4.02 12S7.6 19.98 12 19.98s7.98-3.58 7.98-7.98S16.4 4.02 12 4.02zM11.39 19v-5.5H8.25l4.5-8.5v5.5h3L11.39 19z"
                                                opacity=".3"></path>
                                            <path
                                                d="M12 2.02c-5.51 0-9.98 4.47-9.98 9.98s4.47 9.98 9.98 9.98 9.98-4.47 9.98-9.98S17.51 2.02 12 2.02zm0 17.96c-4.4 0-7.98-3.58-7.98-7.98S7.6 4.02 12 4.02 19.98 7.6 19.98 12 16.4 19.98 12 19.98zM12.75 5l-4.5 8.5h3.14V19l4.36-8.5h-3V5z">
                                            </path>
                                        </svg><span className="side-menu__label">Landing Page</span></a> </li>
                                <li className="slide"> <a className="side-menu__item" data-bs-toggle="slide"
                                        href="#"><svg xmlns="http://www.w3.org/2000/svg"
                                            className="side-menu__icon" viewBox="0 0 24 24">
                                            <path d="M0 0h24v24H0V0z" fill="none"></path>
                                            <path
                                                d="M12 4C9.24 4 7 6.24 7 9c0 2.85 2.92 7.21 5 9.88 2.11-2.69 5-7 5-9.88 0-2.76-2.24-5-5-5zm0 7.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                                                opacity=".3"></path>
                                            <path
                                                d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z">
                                            </path>
                                            <circle cx="12" cy="9" r="2.5"></circle>
                                        </svg><span className="side-menu__label">Maps</span><i
                                            className="angle fe fe-chevron-down"></i></a>
                                    <ul className="slide-menu">
                                        <li className="panel sidetab-menu">
                                            <div className="tab-menu-heading p-0 pb-2 border-0">
                                                <div className="tabs-menu "> 
                                                    <ul className="nav panel-tabs">
                                                        <li><a href="#side35" className="active" data-bs-toggle="tab"><i
                                                                    className="fe fe-airplay"></i>
                                                                <p>Home</p>
                                                            </a></li>
                                                        <li><a href="#side36" data-bs-toggle="tab"><i
                                                                    className="fe fe-package"></i>
                                                                <p>Events</p>
                                                            </a></li>
                                                        <li><a href="#side37" data-bs-toggle="tab"><i
                                                                    className="fe fe-move"></i>
                                                                <p>Activity</p>
                                                            </a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="panel-body tabs-menu-body p-0 border-0">
                                                <div className="tab-content">
                                                    <div className="tab-pane tab-content-show active" id="side35">
                                                        <ul className="sidemenu-list">
                                                            <li className="side-menu__label1"><a
                                                                    href="#">Maps</a>
                                                            </li>
                                                            <li><a className="slide-item" href="map-leaflet.html">Leaflet
                                                                    Maps</a>
                                                            </li>
                                                            <li><a className="slide-item" href="map-vector.html">Vector
                                                                    Maps</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="tab-pane tab-content-double" id="side36">
                                                        <h5 className="mt-3 mb-4 tx-16">Events</h5>
                                                        <div className="latest-timeline">
                                                            <div className="timeline">
                                                                <div className="mt-0 event-text">
                                                                    <h6 className="mb-0"><a target="_blank" href="#"
                                                                            className="timeline-head">Employees Meeting</a>
                                                                    </h6>
                                                                    <small className="text-muted mb-2">20 Feb, 2019</small>
                                                                    <p className="tx-13">sed do eiusmod tempor incididunt ut
                                                                        labore
                                                                        et. </p>
                                                                </div>
                                                                <div className="event-text">
                                                                    <h6 className="mb-0"><a href="#"
                                                                            className="timeline-head">Anniversary
                                                                            Celebration</a>
                                                                    </h6> <small className="mb-2 text-muted">14 Feb,
                                                                        2019</small>
                                                                    <p className="tx-13">sed do eiusmod tempor magna aliqua
                                                                        nisi ut.
                                                                    </p>
                                                                </div>
                                                                <div className="event-text">
                                                                    <h6 className="mb-0"><a href="#"
                                                                            className="timeline-head">Best
                                                                            Employee Announcement</a></h6> <small
                                                                        className="mb-2 text-muted">13 Feb, 2019</small>
                                                                    <p className="tx-13">sed do eiusmod tempor incididunt ut
                                                                        aliquip.</p>
                                                                </div>
                                                                <div className="event-text">
                                                                    <h6 className="mb-0"><a href="#"
                                                                            className="timeline-head">Weekend
                                                                            trip</a></h6> <small
                                                                        className="mb-2 text-muted">11 Feb,
                                                                        2019</small>
                                                                    <p className="tx-13">sed do eiusmod tempor incididunt ut
                                                                        aliquip.</p>
                                                                </div>
                                                                <div className="event-text">
                                                                    <h6 className="mb-0"><a href="#"
                                                                            className="timeline-head">New
                                                                            Project Started..</a></h6> <small
                                                                        className="mb-2 text-muted">09 Feb, 2019</small>
                                                                    <p className="tx-13">sed do eiusmod tempor incididunt ut
                                                                        aliquip.</p>
                                                                </div>
                                                                <div className="mb-0 event-text">
                                                                    <h6 className="mb-0"><a href="#"
                                                                            className="timeline-head">Gradening
                                                                            working</a></h6> <small
                                                                        className="mb-2 text-muted">02
                                                                        Feb, 2019</small>
                                                                    <p className="tx-13">sed do eiusmod tempor aliqua nisi
                                                                        ut
                                                                        aliquip. </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="tab-pane tab-content-double" id="side37">
                                                        <h5 className="mt-3 mb-4 tx-16">Activity</h5>
                                                        <div className="activity mt-3 p-0"> <img
                                                                src="/src/adminAssets/img/users/8.jpg" alt=""
                                                                className="img-activity" />
                                                            <div className="time-activity">
                                                                <div className="item-activity">
                                                                    <p className="mb-0 tx-13"><b>Samantha Melon</b> Add a
                                                                        new
                                                                        projects <b> AngularJS Template</b></p><small
                                                                        className="text-muted ">30 mins ago</small>
                                                                </div>
                                                            </div> <img src="/src/adminAssets/img/users/5.jpg" alt=""
                                                                className="img-activity" />
                                                            <div className="time-activity">
                                                                <div className="item-activity">
                                                                    <p className="mb-0 tx-13"><b>Allie Grater</b> Add a new
                                                                        projects
                                                                        <b>Free HTML Template</b>
                                                                    </p><small className="text-muted ">1 days ago</small>
                                                                </div>
                                                            </div> <img src="/src/adminAssets/img/users/6.jpg" alt=""
                                                                className="img-activity" />
                                                            <div className="time-activity">
                                                                <div className="item-activity">
                                                                    <p className="mb-0 tx-13"><b>Gabe Lackmen</b> Add a new
                                                                        projects
                                                                        <b>Free PSD Template</b>
                                                                    </p><small className="text-muted ">3
                                                                        days ago</small>
                                                                </div>
                                                            </div> <img src="/src/adminAssets/img/users/7.jpg" alt=""
                                                                className="img-activity" />
                                                            <div className="time-activity">
                                                                <div className="item-activity">
                                                                    <p className="mb-0 tx-13"><b>Abigail John</b> Add a new
                                                                        projects
                                                                        <b>Free UI Template</b>
                                                                    </p><small className="text-muted ">5
                                                                        days ago</small>
                                                                </div>
                                                            </div> <img src="/src/adminAssets/img/users/14.jpg" alt=""
                                                                className="img-activity" />
                                                            <div className="time-activity">
                                                                <div className="item-activity">
                                                                    <p className="mb-0 tx-13"><b>Jiggel mossin</b> Add a new
                                                                        projects <b> AngularJS Template</b></p><small
                                                                        className="text-muted ">30 mins ago</small>
                                                                </div>
                                                            </div> <img src="/src/adminAssets/img/users/3.jpg" alt=""
                                                                className="img-activity" />
                                                            <div className="time-activity">
                                                                <div className="item-activity">
                                                                    <p className="mb-0 tx-13"><b>Raven Chanan</b> Add a new
                                                                        projects
                                                                        <b>Free HTML Template</b>
                                                                    </p><small className="text-muted ">1 days ago</small>
                                                                </div>
                                                            </div> <img src="/src/adminAssets/img/users/1.jpg" alt=""
                                                                className="img-activity" />
                                                            <div className="time-activity">
                                                                <div className="item-activity">
                                                                    <p className="mb-0 tx-13"><b>Anna Ogden</b> Add a new
                                                                        projects
                                                                        <b>Free PSD Template</b>
                                                                    </p><small className="text-muted ">3
                                                                        days ago</small>
                                                                </div>
                                                            </div> <img src="/src/adminAssets/img/users/11.jpg" alt=""
                                                                className="img-activity" />
                                                            <div className="time-activity">
                                                                <div className="item-activity">
                                                                    <p className="mb-0 tx-13"><b>Allie Grater</b> Add a new
                                                                        projects
                                                                        <b>Free UI Template</b>
                                                                    </p><small className="text-muted ">5
                                                                        days ago</small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li className="side-item side-item-category">Pages</li>
                                <li className="slide"> <a className="side-menu__item" data-bs-toggle="slide"
                                        href="#"><svg xmlns="http://www.w3.org/2000/svg"
                                            enableBackground="new 0 0 24 24" className="side-menu__icon"
                                            viewBox="0 0 24 24">
                                            <g></g>
                                            <g>
                                                <g></g>
                                                <g>
                                                    <path
                                                        d="M21,5c-1.11-0.35-2.33-0.5-3.5-0.5c-1.95,0-4.05,0.4-5.5,1.5c-1.45-1.1-3.55-1.5-5.5-1.5S2.45,4.9,1,6v14.65 c0,0.25,0.25,0.5,0.5,0.5c0.1,0,0.15-0.05,0.25-0.05C3.1,20.45,5.05,20,6.5,20c1.95,0,4.05,0.4,5.5,1.5c1.35-0.85,3.8-1.5,5.5-1.5 c1.65,0,3.35,0.3,4.75,1.05c0.1,0.05,0.15,0.05,0.25,0.05c0.25,0,0.5-0.25,0.5-0.5V6C22.4,5.55,21.75,5.25,21,5z M3,18.5V7 c1.1-0.35,2.3-0.5,3.5-0.5c1.34,0,3.13,0.41,4.5,0.99v11.5C9.63,18.41,7.84,18,6.5,18C5.3,18,4.1,18.15,3,18.5z M21,18.5 c-1.1-0.35-2.3-0.5-3.5-0.5c-1.34,0-3.13,0.41-4.5,0.99V7.49c1.37-0.59,3.16-0.99,4.5-0.99c1.2,0,2.4,0.15,3.5,0.5V18.5z">
                                                    </path>
                                                    <path
                                                        d="M11,7.49C9.63,6.91,7.84,6.5,6.5,6.5C5.3,6.5,4.1,6.65,3,7v11.5C4.1,18.15,5.3,18,6.5,18 c1.34,0,3.13,0.41,4.5,0.99V7.49z"
                                                        opacity=".3"></path>
                                                </g>
                                                <g>
                                                    <path
                                                        d="M17.5,10.5c0.88,0,1.73,0.09,2.5,0.26V9.24C19.21,9.09,18.36,9,17.5,9c-1.28,0-2.46,0.16-3.5,0.47v1.57 C14.99,10.69,16.18,10.5,17.5,10.5z">
                                                    </path>
                                                    <path
                                                        d="M17.5,13.16c0.88,0,1.73,0.09,2.5,0.26V11.9c-0.79-0.15-1.64-0.24-2.5-0.24c-1.28,0-2.46,0.16-3.5,0.47v1.57 C14.99,13.36,16.18,13.16,17.5,13.16z">
                                                    </path>
                                                    <path
                                                        d="M17.5,15.83c0.88,0,1.73,0.09,2.5,0.26v-1.52c-0.79-0.15-1.64-0.24-2.5-0.24c-1.28,0-2.46,0.16-3.5,0.47v1.57 C14.99,16.02,16.18,15.83,17.5,15.83z">
                                                    </path>
                                                </g>
                                            </g>
                                        </svg><span className="side-menu__label">Pages</span><i
                                            className="angle fe fe-chevron-down"></i></a>
                                    <ul className="slide-menu">
                                        <li className="panel sidetab-menu">
                                            <div className="tab-menu-heading p-0 pb-2 border-0">
                                                <div className="tabs-menu "> 
                                                    <ul className="nav panel-tabs">
                                                        <li><a href="#side38" className="active" data-bs-toggle="tab"><i
                                                                    className="fe fe-airplay"></i>
                                                                <p>Home</p>
                                                            </a></li>
                                                        <li><a href="#side39" data-bs-toggle="tab"><i
                                                                    className="fe fe-package"></i>
                                                                <p>Events</p>
                                                            </a></li>
                                                        <li><a href="#side40" data-bs-toggle="tab"><i
                                                                    className="fe fe-move"></i>
                                                                <p>Activity</p>
                                                            </a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="panel-body tabs-menu-body p-0 border-0">
                                                <div className="tab-content">
                                                    <div className="tab-pane tab-content-show active" id="side38">
                                                        <ul className="sidemenu-list">
                                                            <li className="side-menu__label1"><a
                                                                    href="#">Pages</a></li>
                                                            <li><a className="slide-item" href="profile.html">Profile</a>
                                                            </li>
                                                            <li><a className="slide-item"
                                                                    href="editprofile.html">Edit-Profile</a>
                                                            </li>
                                                            <li><a className="slide-item" href="about.html">About-Us</a>
                                                            </li>
                                                            <li><a className="slide-item" href="settings.html">Settings</a>
                                                            </li>
                                                            <li><a className="slide-item" href="invoice.html">Invoice</a>
                                                            </li>
                                                            <li><a className="slide-item" href="pricing.html">Pricing</a>
                                                            </li>
                                                            <li><a className="slide-item" href="gallery.html">Gallery</a>
                                                            </li>
                                                            <li><a className="slide-item" href="todotask.html">Todotask</a>
                                                            </li>
                                                            <li><a className="slide-item" href="faq.html">Faqs</a></li>
                                                            <li><a className="slide-item" href="empty.html">Empty Page</a>
                                                            </li>
                                                            <li><a className="slide-item"
                                                                    href="Switcher-1.html">Switcher-1</a></li>
                                                            <li className="sub-slide"> <a className="slide-item"
                                                                    data-bs-toggle="sub-slide"
                                                                    href="#"><span
                                                                        className="sub-side-menu__label">Mail</span><i
                                                                        className="sub-angle fe fe-chevron-down"></i></a>
                                                                <ul className="sub-slide-menu">
                                                                    <li><a className="sub-side-menu__item"
                                                                            href="mail.html">Mail</a>
                                                                    </li>
                                                                    <li><a className="sub-side-menu__item"
                                                                            href="mail-compose.html">Mail Compose</a>
                                                                    </li>
                                                                    <li><a className="sub-side-menu__item"
                                                                            href="mail-read.html">Read-mail</a></li>
                                                                    <li><a className="sub-side-menu__item"
                                                                            href="mail-settings.html">mail-settings</a>
                                                                    </li>
                                                                    <li><a className="sub-side-menu__item"
                                                                            href="chat.html">Chat</a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li className="sub-slide"> <a className="slide-item"
                                                                    data-bs-toggle="sub-slide"
                                                                    href="#"><span
                                                                        className="sub-side-menu__label">Ecommerce</span><i
                                                                        className="sub-angle fe fe-chevron-down"></i></a>
                                                                <ul className="sub-slide-menu">
                                                                    <li><a className="sub-side-menu__item"
                                                                            href="products.html">Shop</a></li>
                                                                    <li><a className="sub-side-menu__item"
                                                                            href="product-details.html">Product-Details</a>
                                                                    </li>
                                                                    <li><a className="sub-side-menu__item"
                                                                            href="product-cart.html">Cart</a></li>
                                                                    <li><a className="sub-side-menu__item"
                                                                            href="check-out.html">Check-out</a></li>
                                                                    <li><a className="sub-side-menu__item"
                                                                            href="wish-list.html">Wish-list</a></li>
                                                                </ul>
                                                            </li>
                                                            <li className="sub-slide"> <a className="slide-item"
                                                                    data-bs-toggle="sub-slide"
                                                                    href="#"><span
                                                                        className="sub-side-menu__label">Custom
                                                                        Pages</span><i
                                                                        className="sub-angle fe fe-chevron-down"></i></a>
                                                                <ul className="sub-slide-menu">
                                                                    <li><a className="sub-side-menu__item"
                                                                            href="signin.html">Sign
                                                                            In</a></li>
                                                                    <li><a className="sub-side-menu__item"
                                                                            href="signup.html">Sign
                                                                            Up</a></li>
                                                                    <li><a className="sub-side-menu__item"
                                                                            href="forgot.html">Forgot
                                                                            Password</a></li>
                                                                    <li><a className="sub-side-menu__item"
                                                                            href="reset.html">Reset
                                                                            Password</a></li>
                                                                    <li><a className="sub-side-menu__item"
                                                                            href="lockscreen.html">Lockscreen</a></li>
                                                                    <li><a className="sub-side-menu__item"
                                                                            href="underconstruction.html">UnderConstruction</a>
                                                                    </li>
                                                                    <li><a className="sub-side-menu__item"
                                                                            href="404.html">404
                                                                            Error</a></li>
                                                                    <li><a className="sub-side-menu__item"
                                                                            href="500.html">500
                                                                            Error</a></li>
                                                                    <li><a className="sub-side-menu__item"
                                                                            href="501.html">501
                                                                            Error</a></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="tab-pane tab-content-double" id="side39">
                                                        <h5 className="mt-3 mb-4 tx-16">Events</h5>
                                                        <div className="latest-timeline">
                                                            <div className="timeline">
                                                                <div className="mt-0 event-text">
                                                                    <h6 className="mb-0"><a target="_blank" href="#"
                                                                            className="timeline-head">Employees Meeting</a>
                                                                    </h6>
                                                                    <small className="text-muted mb-2">20 Feb, 2019</small>
                                                                    <p className="tx-13">sed do eiusmod tempor incididunt ut
                                                                        labore
                                                                        et. </p>
                                                                </div>
                                                                <div className="event-text">
                                                                    <h6 className="mb-0"><a href="#"
                                                                            className="timeline-head">Anniversary
                                                                            Celebration</a>
                                                                    </h6> <small className="mb-2 text-muted">14 Feb,
                                                                        2019</small>
                                                                    <p className="tx-13">sed do eiusmod tempor magna aliqua
                                                                        nisi ut.
                                                                    </p>
                                                                </div>
                                                                <div className="event-text">
                                                                    <h6 className="mb-0"><a href="#"
                                                                            className="timeline-head">Best
                                                                            Employee Announcement</a></h6> <small
                                                                        className="mb-2 text-muted">13 Feb, 2019</small>
                                                                    <p className="tx-13">sed do eiusmod tempor incididunt ut
                                                                        aliquip.</p>
                                                                </div>
                                                                <div className="event-text">
                                                                    <h6 className="mb-0"><a href="#"
                                                                            className="timeline-head">Weekend
                                                                            trip</a></h6> <small
                                                                        className="mb-2 text-muted">11 Feb,
                                                                        2019</small>
                                                                    <p className="tx-13">sed do eiusmod tempor incididunt ut
                                                                        aliquip.</p>
                                                                </div>
                                                                <div className="event-text">
                                                                    <h6 className="mb-0"><a href="#"
                                                                            className="timeline-head">New
                                                                            Project Started..</a></h6> <small
                                                                        className="mb-2 text-muted">09 Feb, 2019</small>
                                                                    <p className="tx-13">sed do eiusmod tempor incididunt ut
                                                                        aliquip.</p>
                                                                </div>
                                                                <div className="mb-0 event-text">
                                                                    <h6 className="mb-0"><a href="#"
                                                                            className="timeline-head">Gradening
                                                                            working</a></h6> <small
                                                                        className="mb-2 text-muted">02
                                                                        Feb, 2019</small>
                                                                    <p className="tx-13">sed do eiusmod tempor aliqua nisi
                                                                        ut
                                                                        aliquip. </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="tab-pane tab-content-double" id="side40">
                                                        <h5 className="mt-3 mb-4 tx-16">Activity</h5>
                                                        <div className="activity mt-3 p-0"> <img
                                                                src="/src/adminAssets/img/users/8.jpg" alt=""
                                                                className="img-activity" />
                                                            <div className="time-activity">
                                                                <div className="item-activity">
                                                                    <p className="mb-0 tx-13"><b>Samantha Melon</b> Add a
                                                                        new
                                                                        projects <b> AngularJS Template</b></p><small
                                                                        className="text-muted ">30 mins ago</small>
                                                                </div>
                                                            </div> <img src="/src/adminAssets/img/users/5.jpg" alt=""
                                                                className="img-activity" />
                                                            <div className="time-activity">
                                                                <div className="item-activity" />
                                                                    <p className="mb-0 tx-13"><b>Allie Grater</b> Add a new
                                                                        projects
                                                                        <b>Free HTML Template</b>
                                                                    </p><small className="text-muted ">1 days ago</small>
                                                                </div>
                                                            </div> <img src="/src/adminAssets/img/users/6.jpg" alt=""
                                                                className="img-activity" />
                                                            <div className="time-activity">
                                                                <div className="item-activity">
                                                                    <p className="mb-0 tx-13"><b>Gabe Lackmen</b> Add a new
                                                                        projects
                                                                        <b>Free PSD Template</b>
                                                                    </p><small className="text-muted ">3
                                                                        days ago</small>
                                                                </div>
                                                            </div> <img src="/src/adminAssets/img/users/7.jpg" alt=""
                                                                className="img-activity" />
                                                            <div className="time-activity">
                                                                <div className="item-activity">
                                                                    <p className="mb-0 tx-13"><b>Abigail John</b> Add a new
                                                                        projects
                                                                        <b>Free UI Template</b>
                                                                    </p><small className="text-muted ">5
                                                                        days ago</small>
                                                                </div>
                                                            </div> <img src="/src/adminAssets/img/users/14.jpg" alt=""
                                                                className="img-activity" />
                                                            <div className="time-activity">
                                                                <div className="item-activity">
                                                                    <p className="mb-0 tx-13"><b>Jiggel mossin</b> Add a new
                                                                        projects <b> AngularJS Template</b></p><small
                                                                        className="text-muted ">30 mins ago</small>
                                                                </div>
                                                            </div> <img src="/src/adminAssets/img/users/3.jpg" alt=""
                                                                className="img-activity" />
                                                            <div className="time-activity">
                                                                <div className="item-activity">
                                                                    <p className="mb-0 tx-13"><b>Raven Chanan</b> Add a new
                                                                        projects
                                                                        <b>Free HTML Template</b>
                                                                    </p><small className="text-muted ">1 days ago</small>
                                                                </div>
                                                            </div> <img src="/src/adminAssets/img/users/1.jpg" alt=""
                                                                className="img-activity" />
                                                            <div className="time-activity">
                                                                <div className="item-activity">
                                                                    <p className="mb-0 tx-13"><b>Anna Ogden</b> Add a new
                                                                        projects
                                                                        <b>Free PSD Template</b>
                                                                    </p><small className="text-muted ">3
                                                                        days ago</small>
                                                                </div>
                                                            </div> <img src="/src/adminAssets/img/users/11.jpg" alt=""
                                                                className="img-activity" />
                                                            <div className="time-activity">
                                                                <div className="item-activity">
                                                                    <p className="mb-0 tx-13"><b>Allie Grater</b> Add a new
                                                                        projects
                                                                        <b>Free UI Template</b>
                                                                    </p><small className="text-muted ">5
                                                                        days ago</small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                           
                                        </li>
                                    </ul>
                                </li>
                                <li className="slide"> <a className="side-menu__item" data-bs-toggle="slide"
                                        href="#"><svg xmlns="http://www.w3.org/2000/svg"
                                            className="side-menu__icon" viewBox="0 0 24 24">
                                            <path d="M0 0h24v24H0V0z" fill="none"></path>
                                            <path
                                                d="M10.9 19.91c.36.05.72.09 1.1.09 2.18 0 4.16-.88 5.61-2.3L14.89 13l-3.99 6.91zm-1.04-.21l2.71-4.7H4.59c.93 2.28 2.87 4.03 5.27 4.7zM8.54 12L5.7 7.09C4.64 8.45 4 10.15 4 12c0 .69.1 1.36.26 2h5.43l-1.15-2zm9.76 4.91C19.36 15.55 20 13.85 20 12c0-.69-.1-1.36-.26-2h-5.43l3.99 6.91zM13.73 9h5.68c-.93-2.28-2.88-4.04-5.28-4.7L11.42 9h2.31zm-3.46 0l2.83-4.92C12.74 4.03 12.37 4 12 4c-2.18 0-4.16.88-5.6 2.3L9.12 11l1.15-2z"
                                                opacity=".3"></path>
                                            <path
                                                d="M12 22c5.52 0 10-4.48 10-10 0-4.75-3.31-8.72-7.75-9.74l-.08-.04-.01.02C13.46 2.09 12.74 2 12 2 6.48 2 2 6.48 2 12s4.48 10 10 10zm0-2c-.38 0-.74-.04-1.1-.09L14.89 13l2.72 4.7C16.16 19.12 14.18 20 12 20zm8-8c0 1.85-.64 3.55-1.7 4.91l-4-6.91h5.43c.17.64.27 1.31.27 2zm-.59-3h-7.99l2.71-4.7c2.4.66 4.35 2.42 5.28 4.7zM12 4c.37 0 .74.03 1.1.08L10.27 9l-1.15 2L6.4 6.3C7.84 4.88 9.82 4 12 4zm-8 8c0-1.85.64-3.55 1.7-4.91L8.54 12l1.15 2H4.26C4.1 13.36 4 12.69 4 12zm6.27 3h2.3l-2.71 4.7c-2.4-.67-4.35-2.42-5.28-4.7h5.69z">
                                            </path>
                                        </svg><span className="side-menu__label">Utilities</span><i
                                            className="angle fe fe-chevron-down"></i></a>
                                    <ul className="slide-menu">
                                        <li className="panel sidetab-menu">
                                            <div className="tab-menu-heading p-0 pb-2 border-0">
                                                <div className="tabs-menu "> 
                                                    <ul className="nav panel-tabs">
                                                        <li><a href="#side41" className="active" data-bs-toggle="tab"><i
                                                                    className="fe fe-airplay"></i>
                                                                <p>Home</p>
                                                            </a></li>
                                                        <li><a href="#side42" data-bs-toggle="tab"><i
                                                                    className="fe fe-package"></i>
                                                                <p>Events</p>
                                                            </a></li>
                                                        <li><a href="#side43" data-bs-toggle="tab"><i
                                                                    className="fe fe-move"></i>
                                                                <p>Activity</p>
                                                            </a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="panel-body tabs-menu-body p-0 border-0">
                                                <div className="tab-content">
                                                    <div className="tab-pane tab-content-show active" id="side41">
                                                        <ul className="sidemenu-list">
                                                            <li className="side-menu__label1"><a
                                                                    href="#">Utilities</a></li>
                                                            <li><a className="slide-item"
                                                                    href="background.html">Background</a></li>
                                                            <li><a className="slide-item" href="border.html">Border</a></li>
                                                            <li><a className="slide-item" href="display.html">Display</a>
                                                            </li>
                                                            <li><a className="slide-item" href="flex.html">Flex</a></li>
                                                            <li><a className="slide-item" href="height.html">Height</a></li>
                                                            <li><a className="slide-item" href="margin.html">Margin</a></li>
                                                            <li><a className="slide-item" href="padding.html">Padding</a>
                                                            </li>
                                                            <li><a className="slide-item" href="position.html">Position</a>
                                                            </li>
                                                            <li><a className="slide-item" href="width.html">Width</a></li>
                                                            <li><a className="slide-item" href="extras.html">Extras</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="tab-pane tab-content-double" id="side42">
                                                        <h5 className="mt-3 mb-4 tx-16">Events</h5>
                                                        <div className="latest-timeline">
                                                            <div className="timeline">
                                                                <div className="mt-0 event-text">
                                                                    <h6 className="mb-0"><a target="_blank" href="#"
                                                                            className="timeline-head">Employees Meeting</a>
                                                                    </h6>
                                                                    <small className="text-muted mb-2">20 Feb, 2019</small>
                                                                    <p className="tx-13">sed do eiusmod tempor incididunt ut
                                                                        labore
                                                                        et. </p>
                                                                </div>
                                                                <div className="event-text">
                                                                    <h6 className="mb-0"><a href="#"
                                                                            className="timeline-head">Anniversary
                                                                            Celebration</a>
                                                                    </h6> <small className="mb-2 text-muted">14 Feb,
                                                                        2019</small>
                                                                    <p className="tx-13">sed do eiusmod tempor magna aliqua
                                                                        nisi ut.
                                                                    </p>
                                                                </div>
                                                                <div className="event-text">
                                                                    <h6 className="mb-0"><a href="#"
                                                                            className="timeline-head">Best
                                                                            Employee Announcement</a></h6> <small
                                                                        className="mb-2 text-muted">13 Feb, 2019</small>
                                                                    <p className="tx-13">sed do eiusmod tempor incididunt ut
                                                                        aliquip.</p>
                                                                </div>
                                                                <div className="event-text">
                                                                    <h6 className="mb-0"><a href="#"
                                                                            className="timeline-head">Weekend
                                                                            trip</a></h6> <small
                                                                        className="mb-2 text-muted">11 Feb,
                                                                        2019</small>
                                                                    <p className="tx-13">sed do eiusmod tempor incididunt ut
                                                                        aliquip.</p>
                                                                </div>
                                                                <div className="event-text">
                                                                    <h6 className="mb-0"><a href="#"
                                                                            className="timeline-head">New
                                                                            Project Started..</a></h6> <small
                                                                        className="mb-2 text-muted">09 Feb, 2019</small>
                                                                    <p className="tx-13">sed do eiusmod tempor incididunt ut
                                                                        aliquip.</p>
                                                                </div>
                                                                <div className="mb-0 event-text">
                                                                    <h6 className="mb-0"><a href="#"
                                                                            className="timeline-head">Gradening
                                                                            working</a></h6> <small
                                                                        className="mb-2 text-muted">02
                                                                        Feb, 2019</small>
                                                                    <p className="tx-13">sed do eiusmod tempor aliqua nisi
                                                                        ut
                                                                        aliquip. </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="tab-pane tab-content-double" id="side43">
                                                        <h5 className="mt-3 mb-4 tx-16">Activity</h5>
                                                        <div className="activity mt-3 p-0"> <img
                                                                src="/src/adminAssets/img/users/8.jpg" alt=""
                                                                className="img-activity" />
                                                            <div className="time-activity">
                                                                <div className="item-activity">
                                                                    <p className="mb-0 tx-13"><b>Samantha Melon</b> Add a
                                                                        new
                                                                        projects <b> AngularJS Template</b></p><small
                                                                        className="text-muted ">30 mins ago</small>
                                                                </div>
                                                            </div> <img src="/src/adminAssets/img/users/5.jpg" alt=""
                                                                className="img-activity" />
                                                            <div className="time-activity">
                                                                <div className="item-activity">
                                                                    <p className="mb-0 tx-13"><b>Allie Grater</b> Add a new
                                                                        projects
                                                                        <b>Free HTML Template</b>
                                                                    </p><small className="text-muted ">1 days ago</small>
                                                                </div>
                                                            </div> <img src="/src/adminAssets/img/users/6.jpg" alt=""
                                                                className="img-activity" />
                                                            <div className="time-activity">
                                                                <div className="item-activity">
                                                                    <p className="mb-0 tx-13"><b>Gabe Lackmen</b> Add a new
                                                                        projects
                                                                        <b>Free PSD Template</b>
                                                                    </p><small className="text-muted ">3
                                                                        days ago</small>
                                                                </div>
                                                            </div> <img src="/src/adminAssets/img/users/7.jpg" alt=""
                                                                className="img-activity" />
                                                            <div className="time-activity">
                                                                <div className="item-activity">
                                                                    <p className="mb-0 tx-13"><b>Abigail John</b> Add a new
                                                                        projects
                                                                        <b>Free UI Template</b>
                                                                    </p><small className="text-muted ">5
                                                                        days ago</small>
                                                                </div>
                                                            </div> <img src="/src/adminAssets/img/users/14.jpg" alt=""
                                                                className="img-activity" />
                                                            <div className="time-activity">
                                                                <div className="item-activity">
                                                                    <p className="mb-0 tx-13"><b>Jiggel mossin</b> Add a new
                                                                        projects <b> AngularJS Template</b></p><small
                                                                        className="text-muted ">30 mins ago</small>
                                                                </div>
                                                            </div> <img src="/src/adminAssets/img/users/3.jpg" alt=""
                                                                className="img-activity" />
                                                            <div className="time-activity">
                                                                <div className="item-activity">
                                                                    <p className="mb-0 tx-13"><b>Raven Chanan</b> Add a new
                                                                        projects
                                                                        <b>Free HTML Template</b>
                                                                    </p><small className="text-muted ">1 days ago</small>
                                                                </div>
                                                            </div> <img src="/src/adminAssets/img/users/1.jpg" alt=""
                                                                className="img-activity" />
                                                            <div className="time-activity">
                                                                <div className="item-activity">
                                                                    <p className="mb-0 tx-13"><b>Anna Ogden</b> Add a new
                                                                        projects
                                                                        <b>Free PSD Template</b>
                                                                    </p><small className="text-muted ">3
                                                                        days ago</small>
                                                                </div>
                                                            </div> <img src="/src/adminAssets/img/users/11.jpg" alt=""
                                                                className="img-activity" />
                                                            <div className="time-activity">
                                                                <div className="item-activity">
                                                                    <p className="mb-0 tx-13"><b>Allie Grater</b> Add a new
                                                                        projects
                                                                        <b>Free UI Template</b>
                                                                    </p><small className="text-muted ">5
                                                                        days ago</small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <div className="slide-right" id="slide-right"><svg xmlns="http://www.w3.org/2000/svg"
                                    fill="#7b8191" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z">
                                    </path>
                                </svg></div>
                        </div>
                        <div className="ps__rail-x" style={{left: "0px", bottom: "0px"}}>
                            <div className="ps__thumb-x" tabIndex="0" style={{left: "0px", width: "0px"}}></div>
                        </div>
                        <div className="ps__rail-y" style={{top: "0px", height: "463px", right: "0px"}}>
                            <div className="ps__thumb-y" tabIndex="0" style={{top: "0px", height: "203px"}}></div>
                        </div>
                    </div>
              
                <div className="jumps-prevent" style={{paddingTop: "63px"}}></div>
         {/* //  <!-- main-sidebar --> */}
            </div>
        
        </>
      );
}

export default AdminHeader;