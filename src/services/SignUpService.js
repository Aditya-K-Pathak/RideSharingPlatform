import axios from "axios"

class SignUpService {
    getCompanies = async () => {
        return await axios.get("http://localhost:7000/api/companies");
    }

    addRider = async (userDetails) => {
        return await axios.post("http://localhost:7000/api/applications/new", userDetails);
    }

    addMotorist = async (userDetails, licenseDetails) => {
        let response = await axios.post("http://localhost:7000/api/applications/new", userDetails);
        let userData = await response.data
        licenseDetails = {...licenseDetails, "userId": userData.userId}
        return await axios.post("http://localhost:7000/api/drivinglicense/new", licenseDetails);
    }

    login = async (loginCredentials) => {
        return await axios.post("http://localhost:7000/api/users/login", loginCredentials);
    }

    register = async (userCredentials) => {
        return await axios.post("http://localhost:7000/api/users/signup", userCredentials);
    }
}

export default new SignUpService();