import React, { use, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router";
import { AuthContext } from "../../Provider/AuthContext/AuthContext";
import { toast } from "react-toastify";

const ForgetPassword = () => {

    const {resetPassword} = use(AuthContext);
    const emailRef = useRef();
    const location = useLocation();

  useEffect(() => {
    document.title = "Forget Password";

     if (location.state?.email) {
      emailRef.current.value = location.state.email;
    }
  }, [location.state]);

  const handleForgetPassword = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;

    resetPassword(email)
    .then(() => {
        toast("Please check your email");
        window.open("https://mail.google.com/", "_blank");
    })
    .catch()
    
    
  };

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5 bg-[linear-gradient(to_right,#00F260,#0575E6)]">
        <div className="card-body">
          <h3 className="font-semibold text-2xl text-center">
            {" "}
            Enter your mail to reset password{" "}
          </h3>
          <form onSubmit={handleForgetPassword}>
            <fieldset className="fieldset">
              {/* Email */}
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                ref={emailRef}
                placeholder="Email"
                required
              />

              <button
                type="submit"
                className="btn btn-neutral mt-4 btn-outline tracking-wide transition-transform transform hover:scale-105"
              >
                Reset Password
              </button>

              <p className="font-semibold text-center pt-5">
                Already have your password ? {" "}
                <Link className="text-secondary" to="/auth/login">
                  Login
                </Link>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
