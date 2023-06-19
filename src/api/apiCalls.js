import axios from "axios"

export const login = async (email, pwd) => {
    try {
        const { data } = await axios.post("https://localhost:3001/api/v1/user/login", 
            {email: email, password: pwd}
        )
        const token = data.body.token;
        return token;
    } catch (error) {
        console.error(error.message)
        return "error";
    }
}