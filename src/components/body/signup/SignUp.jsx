import React from 'react';

const SignUp = () => {
    return (
        <div>
            <section className="vh-100" style={{ backgroundColor: 'hsl(0, 0%, 96%)' }}>
                <div className="px-4 py-5 px-md-5 text-center text-lg-start">
                    <div className="container">
                        <div className="row gx-lg-5 align-items-center">
                            <div className="col-lg-6 mb-5 mb-lg-0">
                                <h1 className="my-5 display-3 fw-bold ls-tight">
                                    Go Cabby <br />
                                    <span className="text-primary">@ RAHEJA IT PARK</span>
                                </h1>
                                <p style={{ color: 'hsl(217, 10%, 50.8%)' }}>
                                    This app is solely for Employees working Raheja IT Park.
                                </p>
                            </div>

                            <div className="col-lg-6 mb-5 mb-lg-0">
                                <div className="card">
                                    <div className="card-body py-5 px-md-5">
                                        <form>
                                            <div className="row">
                                                <div className="col-md-6 mb-4">
                                                    <div className="form-outline">
                                                        <input type="text" id="form3Example1" className="form-control" placeholder="First name" />
                                                        <label className="form-label" htmlFor="form3Example1"></label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-4">
                                                    <div className="form-outline">
                                                        <input type="text" id="form3Example2" className="form-control" placeholder="Last name" />
                                                        <label className="form-label" htmlFor="form3Example2"></label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="email" id="form3Example3" className="form-control" placeholder='Email Address' />
                                                <label className="form-label" htmlFor="form3Example3"></label>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="password" id="form3Example4" className="form-control" placeholder='Password' />
                                                <label className="form-label" htmlFor="form3Example4"></label>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <select id="form3Example5" className="form-control" placeholder="Select your role">
                                                    <option value="">Select your role</option>
                                                    <option value="Motorist">Motorist</option>
                                                    <option value="Security Head">Security Head</option>

                                                </select>
                                                <label className="form-label" htmlFor="form3Example5"></label>
                                            </div>

                                            <div className="form-check d-flex justify-content-center mb-4">
                                                <input className="form-check-input me-2" type="checkbox" value="" id="form2Example33" defaultChecked />
                                                <label className="form-check-label" htmlFor="form2Example33">
                                                    Agree to terms and Conditions
                                                </label>
                                            </div>

                                            <div className="d-flex justify-content-center">
                                                <button type="submit" className="btn btn-dark btn-block mb-4">Submit</button>
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
    )
}

export default SignUp;