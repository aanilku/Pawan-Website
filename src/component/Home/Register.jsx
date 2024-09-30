import { Link } from "react-router-dom";

function Register() {
    return (
      <>
       <link rel="stylesheet" href="/src/assets/css/login.css"></link>
        <div className="main">
          {/* <!-- Sign up form --> */}
          <section className="signup">
            <div className="container">
              <div className="signup-content">
                <div className="signup-form">
                  <h2 className="form-title">Sign up</h2>
                  <form
                    method="POST"
                    className="register-form"
                    id="register-form"
                  >
                    <div className="form-group">
                      <label htmlFor="name">
                        <i className="zmdi zmdi-account material-icons-name"></i>
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">
                        <i className="zmdi zmdi-email"></i>
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="pass">
                        <i className="zmdi zmdi-lock"></i>
                      </label>
                      <input
                        type="password"
                        name="pass"
                        id="pass"
                        placeholder="Password"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="re-pass">
                        <i className="zmdi zmdi-lock-outline"></i>
                      </label>
                      <input
                        type="password"
                        name="re_pass"
                        id="re_pass"
                        placeholder="Repeat your password"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="checkbox"
                        name="agree-term"
                        id="agree-term"
                        className="agree-term"
                      />
                      <label htmlFor="agree-term" className="label-agree-term">
                        <span>
                          <span></span>
                        </span>
                        I agree all statements in{" "}
                        <a href="#" className="term-service">
                          Terms of service
                        </a>
                      </label>
                    </div>
                    <div className="form-group form-button">
                      <input
                        type="submit"
                        name="signup"
                        id="signup"
                        className="form-submit"
                        value="Register"
                      />
                    </div>
                  </form>
                </div>
                <div className="signup-image">
                  <figure>
                    <img src="/src/assets/images/products/feature-product-3.png" alt="sing up image" />
                  </figure>
                  <Link to="/login" className="signup-image-link">
                    I am already member
                  </Link>
                  <br />
                  <Link to="/" className="signup-image-link">
                   go to website
                  </Link>
                </div>
              </div>
            </div>
          </section>  
        </div>
      </>
    );
  }
  
  export default Register;
  