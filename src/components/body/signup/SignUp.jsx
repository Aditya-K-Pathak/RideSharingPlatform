import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import SignUpService from "../../../services/SignUpService";
import MotoristDetails from "./MotoristDetails";

const SignUp = () => {
  const [companies, setCompanies] = useState([]);
  const [motorist, setMotorist] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState('');
  const [designation, setDesignation] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [companyId, setCompanyId] = useState('');
  
  const [licenseNo, setLicenseNo] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [rta, setRta] = useState('');
  const [allowedVehicles, setAllowedVehicles] = useState('');

  useEffect(() => {
    async function getCompanies() {
      try {
        const response = await SignUpService.getCompanies();
        const data = await response.data;
        setCompanies(data);
      } catch (error) {
        console.log(error);
      }
    }
    getCompanies();
  }, []);

//   const formik = useFormik({
//     initialValues: { username: "", password: "" },
//     validationSchema: Yup.object({
//       username: Yup.string().required("Username is required"),
//       password: Yup.string()
//         .required("Password is required")
//         .min(6, "Password should be at least 6 characters long"),
//     }),
//   });

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      officialEmail: "",
      phoneNumber: "",
      designation: "",
      employeeId: "",
      aadharNumber: "",
      companyId: "",
      role: "",
      licenseNo: "",
      expirationDate: "",
      rta: "",
      allowedVehicles: ""
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Username is required"),
      password: Yup.string().required("Password is required"),
      officialEmail: Yup.string().email("Invalid email format").required("Email is required"),
      phoneNumber: Yup.string().matches(/^\d{10}$/, "Phone number must be exactly 10 digits").required("Phone number is required"),
      designation: Yup.string().required("Designation is required"),
      employeeId: Yup.string().required("Employee ID is required"),
      aadharNumber: Yup.string().matches(/^\d{12}$/, "Aadhar number must be exactly 12 digits").required("Aadhar number is required"),
      companyId: Yup.string().required("Company ID is required"),
      role: Yup.string().oneOf(["Motorist", "Rider"], "Role must be Motorist or Rider").required("Role is required"),

      licenseNo: Yup.string().matches(/^[A-Z]{3}\d{4}[A-Z]{3}$/, "Driving license number must be 10 characters in format as 3 letters followed by 4 digits and 3 letters").required("License number is required"),
      expirationDate: Yup.date().required("Expiration date is required"),
      rta: Yup.string().required("RTA is required"),
      allowedVehicles: Yup.string().required("Allowed vehicles is required")
    }),
    });

  return (
    <div>
      <section
        style={{ backgroundColor: "hsl(0, 0%, 96%)" }}
      >
        <div className="px-4 py-5 px-md-5 text-center text-lg-start">
          <div className="container">
            <div className="row gx-lg-5 align-items-center">
              <div className="col-lg-6 mb-5 mb-lg-0">
                <h1 className="my-5 display-3 fw-bold ls-tight">
                  Go Cabby <br />
                  <span className="text-primary">@ RAHEJA IT PARK</span>
                </h1>
                <p style={{ color: "hsl(217, 10%, 50.8%)" }}>
                  This app is solely for Employees working Raheja IT Park.
                </p>
              </div>

              <div className="col-lg-6 mb-5 mb-lg-0">
                <div className="card">
                  <div className="card-body py-4 px-md-5">
                    {/* <form onSubmit={() => false} > */}
                    <form onSubmit={formik.handleSubmit}>
                        <h5 className="text-primary my-2 display-6 fw-bold ls-tight text-center mb-4">User Registeration</h5>
                      <div className="mb-3">
                        <input
                          type="text"
                          className={`form-control ${formik.errors.username && "is-invalid"}`}
                          placeholder="Username"
                          name="username"
                          id="username"
                        //   onChange={(event) => setUsername(event.target.value)}
                          onChange={formik.handleChange }
                          onBlur={formik.handleBlur}
                          value={formik.values.username}
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Password"
                          name="password"
                          id="password"
                          onChange={(event) => setPassword(event.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email"
                          name="officialEmail"
                          id="email"
                          onChange={(event) => setEmail(event.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Phone Number"
                          name="phoneNumber"
                          id="phoneNumber"
                          onChange={(event) => setPhone(event.target.value)}
                        />
                      </div>

                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Designation"
                          name="designation"
                          id="designation"
                          onChange={(event) => setDesignation(event.target.value)}
                        />
                      </div>

                      <div className="mb-3">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Employee Id"
                          name="employeeId"
                          id="employeeId"
                          onChange={(event) => setEmployeeId(event.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Aadhar Number"
                          name="aadharNumber"
                          id="aadharNumber"
                          onChange={(event) => setAadhar(event.target.value)}
                        />
                      </div>
                      <div className="row">
                        <div className="col-md-8 col">
                          <select
                            name="companies"
                            id="company"
                            className="form-select"
                            onChange={(event) => setCompanyId(event.target.value)}
                          >
                            <option value="null">Select Company</option>
                            {companies.map((data, index) => {
                              return (
                                <option key={index} value={data.id}>
                                  {data.companyName}
                                </option>
                              );
                            })}
                          </select>
                        </div>
                        <div className="col-md-4 col">
                          <select name="role" id="role" className="form-select" onChange={(event) => {
                            event.target.value === "Motorist" ? setMotorist(true):setMotorist(false)
                            setRole(event.target.value)
                          }}>
                            <option value="null">Select Role</option>
                            <option value="Rider">Rider</option>
                            <option value="Motorist">Motorist</option>
                          </select>
                        </div>
                      </div>
                      {
                        motorist && <MotoristDetails data={{setLicenseNo, setAllowedVehicles, setExpirationDate, setRta}} />
                      }
                      <p className="mt-3">Not a User? <a href="/login">Login</a> </p>
                      <div className="mt-3">
                        <button type="button" className="btn btn-primary" onClick={() => {
                            console.log(companyId);
                            
                            try {
                                if (!motorist) {
                                    async function addRider (){
                                        try {        
                                            await SignUpService.addRider({
                                                "username": username,
                                                "officialEmail": email,
                                                "phoneNumber": phone,
                                                "companyId": companyId,
                                                "designation": designation,
                                                "role": "Rider",
                                                "employeeId": employeeId,
                                                "aadharNumber": aadhar
                                              }).then(
                                                () => {
                                                    SignUpService.register({username, password, "roles": "RIDER"})
                                                }
                                              )
                                        } catch(error) {
                                            console.log(error.response.data)
                                        }
                                    }
                                    addRider();
                                } else {
                                    async function addRider (){
                                        try {   
                                            await SignUpService.addMotorist({
                                                "username": username,
                                                "officialEmail": email,
                                                "phoneNumber": phone,
                                                "companyId": companyId,
                                                "designation": designation,
                                                "role": "Motorist",
                                                "employeeId": employeeId,
                                                "aadharNumber": aadhar
                                              }, {licenseNo, rta, expirationDate, allowedVehicles}).then(
                                                () => {
                                                    SignUpService.register({username, password, "roles": "MOTORIST"})
                                                }
                                              )
                                        } catch(error) {
                                            console.log(error)
                                        }
                                    }
                                    addRider();
                                }
                            } catch(error) {
                                alert (error)
                            }
                        }}>Register</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
