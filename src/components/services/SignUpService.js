import axios from "axios"

class SignUpService {
    getCompanies = async () => {
        return await axios.get("http://localhost:7000/api/companies");
    }

    addRider = async (userDetails) => {
        console.log(userDetails);
        
        return await axios.post("http://localhost:7000/api/applications/new", userDetails)
    }
}

export default new SignUpService();