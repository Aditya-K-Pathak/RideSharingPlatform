import axios from "axios"

class SignUpService {
    getCompanies = async () => {
        return await axios.get("http://localhost:7000/api/companies");
    }

    addRider = async (userDetails) => {
        return await axios.post("http://localhost:7000/api/applications/new", userDetails);
    }

    login = async (loginCredentials) => {
        return await axios.post("http://localhost:7000/api/users/login", loginCredentials);
    }
}

export default new SignUpService();