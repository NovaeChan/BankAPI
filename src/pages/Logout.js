import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../reducers/login";
import { setFirstName, setLastName } from "../reducers/user";
import { Navigate } from "react-router-dom";

function Logout() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setToken(0))
        dispatch(setFirstName(""))
        dispatch(setLastName(""));

        localStorage.removeItem("token");
        console.log(localStorage.getItem("token"))
    });
    console.log("Token : ", localStorage.getItem("token"));
    console.log("First name : ", useSelector((state) => state.userProfile.firstName))
    return <Navigate to="/"></Navigate>
}

export default Logout;