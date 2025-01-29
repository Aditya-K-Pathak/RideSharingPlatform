const MotoristDetails = () => {
  return (
    <>
      <h3 className="text-primary my-2 fw-bold ls-tight text-center ">Driving License Details</h3>
      <div className="mb-3 mt-3" >
        <input
          type="number"
          className="form-control"
          placeholder="License No"
          name="licenseNo"
          id="licenseNo"
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
        />
      </div>

      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="RTA"
          name="rta"
          id="rta"
        />
      </div>

      <select
        name="allowedVehicles"
        id="allowedVehicles"
        className="form-select"
      >
        <option value="null">Select Allowed Vehicles</option>
        <option value="Rider">Two Wheeler</option>
        <option value="Motorist">Four Wheeler</option>
      </select>
    </>
  );
};

export default MotoristDetails;
