import React, { useState, useEffect } from "react";
import SignUpService from "../../../services/SignUpService";
import MotoristDetails from "./MotoristDetails";

const SignUp = () => {
  const [companies, setCompanies] = useState([]);
  const [motorist, setMotorist] = useState(false);
  let username, email, phone, companyId, designation, role, employeeId, aadhar;

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

  return (
    <div>
      <section
        // className="vh-100"
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
                    <form onSubmit={() => false}>
                        <h5 className="text-primary my-2 display-6 fw-bold ls-tight text-center ">User Registeration</h5>
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Username"
                          name="username"
                          id="username"
                          onChange={(event) => username=event.target.value}
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email"
                          name="officialEmail"
                          id="email"
                          onChange={(event) => email=event.target.value}
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Phone Number"
                          name="phoneNumber"
                          id="phoneNumber"
                          onChange={(event) => phone=event.target.value}
                        />
                      </div>

                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Designation"
                          name="designation"
                          id="designation"
                          onChange={(event) => designation=event.target.value}
                        />
                      </div>

                      <div className="mb-3">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Employee Id"
                          name="employeeId"
                          id="employeeId"
                          onChange={(event) => employeeId=event.target.value}
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Aadhar Number"
                          name="aadharNumber"
                          id="aadharNumber"
                          onChange={(event) => aadhar=event.target.value}
                        />
                      </div>
                      <div className="row">
                        <div className="col-md-8 col">
                          <select
                            name="companies"
                            id="company"
                            className="form-select"
                            onChange={(event) => companyId=event.target.value}
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
                            role=event.target.value
                          }}>
                            <option value="null">Select Role</option>
                            <option value="Rider">Rider</option>
                            <option value="Motorist">Motorist</option>
                          </select>
                        </div>
                      </div>
                      {
                        motorist && <MotoristDetails />
                      }
                      <p className="mt-3">Not a User? <a href="/login">Login</a> </p>
                      <div className="mt-3">
                        <button type="button" className="btn btn-primary" onClick={() => {
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
                                                "role": role,
                                                "employeeId": employeeId,
                                                "aadharNumber": aadhar
                                              })
                                              const data = await response.data
                                              console.log(data)
                                        } catch(error) {
                                            console.log(error.response.data)
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
