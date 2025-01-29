import React, { useState, useEffect } from "react";
import SignUpService from "../../services/SignUpService";

const SignUp = () => {
  const [companies, setCompanies] = useState([]);

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
        className="vh-100"
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
                  <div className="card-body py-5 px-md-5">
                    <form>
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Username"
                          name="username"
                          id="username"
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email"
                          name="officialEmail"
                          id="email"
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Phone Number"
                          name="phoneNumber"
                          id="phoneNumber"
                        />
                      </div>

                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Designation"
                          name="designation"
                          id="designation"
                        />
                      </div>

                      <div className="mb-3">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Employee Id"
                          name="employeeId"
                          id="employeeId"
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Aadhar Number"
                          name="aadharNumber"
                          id="aadharNumber"
                        />
                      </div>
                      <div className="row">
                        <div className="col-md-8 col">
                          <select
                            name="companies"
                            id="company"
                            className="form-select"
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
                          <select name="role" id="role" className="form-select">
                            <option value="Rider">Rider</option>
                            <option value="Motorist">Motorist</option>
                          </select>
                        </div>
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
