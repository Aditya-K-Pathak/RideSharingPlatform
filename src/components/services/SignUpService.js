import axios from "axios"

class SignUpService {
    getCompanies = async () => {
        return await axios.get("http://localhost:7000/api/companies");
    }
}

export default new SignUpService();