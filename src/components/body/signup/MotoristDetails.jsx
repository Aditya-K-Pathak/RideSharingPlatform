import { useState } from "react";

const MotoristDetails = (props) => {
  return (
    <>
      <h3 className="text-primary my-2 fw-bold ls-tight text-center mt-4 fs-4">Driving License Details</h3>
      <div className="mb-3 mt-3" >
        <input
          type="text"
          className="form-control"
          placeholder="License No"
          name="licenseNo"
          id="licenseNo"
          onChange={(event) => {
            props.data.setLicenseNo(event.target.value)
          }}
        />
      </div>

      <div className="input-group mb-3">
        <span className="input-group-text">License Expiration Date</span>
        <input
          type="date"
          className="form-control"
          placeholder="Expiration Date"
          name="expirationDate"
          id="expirationDate"
          onChange={(event) => {
            props.data.setExpirationDate(event.target.value)
          }}
        />
      </div>

      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="RTA"
          name="rta"
          id="rta"
          onChange={(event) => {
            props.data.setRta(event.target.value)
          }}
        />
      </div>

      <select
        name="allowedVehicles"
        id="allowedVehicles"
        className="form-select"
        onChange={(event) => {
            props.data.setAllowedVehicles(event.target.value)
          }}
      >
        <option value="null">Select Allowed Vehicles</option>
        <option value="Rider">Two Wheeler</option>
        <option value="Motorist">Four Wheeler</option>
      </select>
    </>
  );
};

export default MotoristDetails;
