import React, { useState } from 'react';




const LoginPage = () => {
  const [credentials ,setCredentials] = useState<{
  username: string;
  password: string;
}>({
  username: '',
  password: '',
});

  function onHandleform(e: React.FormEvent<HTMLFormElement>) {
    alert("red")
    e.preventDefault();
    alert(
      "Username: " +
        credentials.username +
        "\nPassword: " +
        credentials.password
    );
  }
  return (
    <div>
 <section className="vh-100">
      <div className="container-fluid h-custom h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid"
              alt="Sample"
            />
          </div>

          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form onSubmit={onHandleform}>
              <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                <p className="lead fw-normal mb-0 me-3">Sign in with</p>

                <button type="button" className="btn btn-primary btn-floating mx-1">
                  <i className="fab fa-facebook-f"></i>
                </button>

                <button type="button" className="btn btn-primary btn-floating mx-1">
                  <i className="fab fa-twitter"></i>
                </button>

                <button type="button" className="btn btn-primary btn-floating mx-1">
                  <i className="fab fa-linkedin-in"></i>
                </button>
              </div>

              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0">Or</p>
              </div>

              {/* Email */}
              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="form3Example3"
                  className="form-control form-control-lg"
                  placeholder="Enter a valid email address"
                  value={credentials.username}
                  onChange={(e) =>setCredentials(prev =>({...prev,username: e.target.value}))}
                />
                <label className="form-label" htmlFor="form3Example3">
                  Email address
                </label>
              </div>

              {/* Password */}
              <div className="form-outline mb-3">
                <input
                  type="password"
                  id="form3Example4"
                  className="form-control form-control-lg"
                  placeholder="Enter password"
                  value={credentials.password}
                   onChange={(e) =>setCredentials(prev =>({...prev,password: e.target.value}))}
                />
                <label className="form-label" htmlFor="form3Example4">
                  Password
                </label>
              </div>

              <div className="d-flex justify-content-between align-items-center">
                <div className="form-check mb-0">
                  <input className="form-check-input me-2" type="checkbox" id="form2Example3" />
                  <label className="form-check-label" htmlFor="form2Example3">
                    Remember me
                  </label>
                </div>
                <a href="#!" className="text-body">
                  Forgot password?
                </a>
              </div>

              <div className="text-center text-lg-start mt-4 pt-2">
                <button 
                type="submit" 
                className="btn btn-primary btn-lg" 
                style={{ padding: "0.75rem 2.5rem" }}
                
                >
                  Login
                </button>

                <p className="small fw-bold mt-2 pt-1 mb-0">
                  <span>Dont have an account</span>
                  <a href="#!" className="link-danger">
                    Register
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default LoginPage;
