import axios from "axios"

export async function getLogin (email, pwd) {
    try {
        const { data } = await axios.post(
          "http://localhost:3001/api/v1/user/login",
          { "email": email, "password": pwd }
        );
        const token = data.body.token;
        localStorage.setItem("token", token);
        return data;
    } catch (err) {
        console.log("Erreur de requête : ", err.message);
        return "error"
    }
}

export async function fetchProfile(token) {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const bodyParameters = {
      key: "value",
    };
    try {
      const { data } = await axios.post(
        "http://localhost:3001/api/v1/user/profile",
        bodyParameters,
        config
      );
      return {
        firstName: data.body.firstName,
        lastName: data.body.lastName
      };
    } catch (err) {
      console.log(err.message);
    }
}

export async function updateUserProfile(fullName){
  const token = localStorage.getItem("token")
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  try{
    const { data } = await axios.put(
      "http://localhost:3001/api/v1/user/profile",
      fullName,
      config
    );
  }
  catch(error){
    console.error(error.message)
  }
}