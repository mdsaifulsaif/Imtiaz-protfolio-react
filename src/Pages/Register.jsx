import React, { use, useRef } from "react";
import { Link } from "react-router";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useNavigate } from "react-router";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

function Register() {
  const { crateUser, updateUser, setUser, googleLogin } = use(AuthContext);
  const navigate = useNavigate();
  const [errorMassage, setErrorMassage] = useState();
  const emailref = useRef();
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photorul = e.target.photourl.value;
    const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (regex.test(password) == false) {
      setErrorMassage(
        "Password must be 6+ chars with uppercase & lowercase letters."
      );
      return;
    }
    crateUser(email, password)
      .then((res) => {
        const user = res.user;
        updateUser({ displayName: name, photoURL: photorul })
          .then((res) => {
            setUser({ ...user, displayName: name, photoURL: photorul });
            navigate("/");
          })
          .catch((error) => {
            const errorM = error.message;
            setErrorMassage(errorM);
          });
        navigate("/");
      })
      .catch((error) => {
        const errorM = error.message;
        setErrorMassage(errorM);
      });
  };

  // google singup

  const handleGoogleLogin = () => {
    googleLogin()
      .then((res) => {
        navigate("/");
      })
      .catch((error) => {
        const errorM = error.message;
        setErrorMassage(errorM);
      });
  };

  return (
    <div className="">
      <div className="flex my-5  items-center justify-center h-screen">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <Helmet>
              <title>Job House | Register</title>
            </Helmet>
            <h1 className="text-3xl font-bold">Register Now!</h1>
            <form onSubmit={handleRegister} className="fieldset">
              {/* name  */}
              <label className="label">Name</label>
              <input
                name="name"
                type="text"
                className="input"
                placeholder="Name"
              />
              {/* name  */}
              <label className="label">Photo URL</label>
              <input
                name="photourl"
                type="text"
                className="input"
                placeholder="Photo URl"
              />
              {/* email  */}
              <label className="label">Email</label>
              <input
                ref={emailref}
                name="email"
                type="email"
                className="input"
                placeholder="Email"
              />
              {/* password  */}
              <label className="label">Password</label>
              <input
                name="password"
                type="password"
                className="input"
                placeholder="Password"
              />

              <button type="submit" className="btn text-white bg-blue-700 mt-4">
                Register
              </button>

              <p className="text-sm mt-2">
                You Have An Account ?{" "}
                <Link className="text-blue-700" to="/auth/Login">
                  Login
                </Link>
              </p>
              <p className="text-red-700">{errorMassage}</p>
            </form>
            {/* google login  */}
            <div className="mx-auto">
              <button
                onClick={handleGoogleLogin}
                className="btn bg-white text-black border-[#e5e5e5]"
              >
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Login with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
