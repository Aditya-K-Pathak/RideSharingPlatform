import "./Login.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import SignUpService from "../../../services/SignUpService";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  let username, password;
  const path = useNavigate();
  const [invalidCredentials, setInvalidCredentials] = useState(false);

  const formik = useFormik({
    initialValues: { username: "", password: "" },
    validationSchema: Yup.object({
      username: Yup.string().required("Username is required"),
      password: Yup.string()
        .required("Password is required")
        .min(6, "Password should be at least 6 characters long"),
    }),
  });

  return (
    <div id="login-container">
      <div>
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
          alt="Login Image"
          class="figure-img img-fluid rounded"
        />
      </div>
      <div>
        <form action="/applications" onSubmit={formik.handleSubmit}>
          {invalidCredentials && (
            <div className="mb-3 border border-danger text-center rounded text-danger">
              {/* <label className="">
                Invalid Credentials
              </label> */}
              Invalid Credentials
            </div>
          )}
          <div className="mb-3">
            <label htmlFor="username" className="form form-label">
              Username
            </label>
            <input
              type="text"
              id="username"
              onFocus={() => setInvalidCredentials(false)}
              className={`form form-control ${
                formik.errors.username && "is-invalid"
              }`}
              placeholder="UserName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
            />
            {formik.errors.username && (
              <p className="text text-danger">{formik.errors.username}</p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              onFocus={() => setInvalidCredentials(false)}
              className={`form form-control ${
                formik.errors.password && "is-invalid"
              }`}
              placeholder="Password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.errors.password && (
              <p className="text text-danger">{formik.errors.password}</p>
            )}
          </div>
          <p>
            Not a User? <a href="/register">Register</a>
          </p>
          <div className="mb-3">
            <button
              className="btn btn-dark"
              type="button"
              onClick={async () => {
                try {
                  const response = await SignUpService.login({
                    username: username,
                    password: password,
                  });
                  const data = await response.data;
                  localStorage.setItem("jwtToken", data.token);
                  path("/");
                } catch (error) {
                  setInvalidCredentials(true);
                }
              }}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
