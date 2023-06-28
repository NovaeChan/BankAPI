import { useEffect } from 'react';
import { NavLink } from 'react-router-dom'
import argentBankLogo from '../../assets/images/argentBankLogo.png'
import { useDispatch, useSelector } from 'react-redux';
import { setLoggedIn } from '../../reducers/login';
import { setFirstName, setLastName } from "../../reducers/user.js"

function Header() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setFirstName(localStorage.getItem("firstName")));
        dispatch(setLastName(localStorage.getItem("lastname")));
    }, [dispatch])

    const isUserLogged = useSelector(state => state.login.logged);
    const firstName = useSelector(state => state.userProfile.firstName);

    const logOff = () => {
        localStorage.clear();
        dispatch(setLoggedIn(false));
        dispatch(setFirstName(""));
        dispatch(setLastName(""));
        console.log(localStorage.getItem("token"))
    }

    if(!isUserLogged){
        return(
            <nav className="main-nav">
                <NavLink to ="/">
                    <img
                        className="main-nav-logo-image"
                        src={argentBankLogo}
                        alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </NavLink>
                <div>
                    <NavLink to="/login">
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </NavLink>
                </div>
            </nav>
        )
    }
    return (
        <nav className="main-nav">
            <NavLink to="/">
                <img
                    className="main-nav-logo-image"
                    src={argentBankLogo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </NavLink>
            <div className="navigation">
                <i className="fa fa-user-circle"></i>
                <p className="user-name">{firstName}</p>
                <NavLink to="/login" onClick={logOff} >
                    {/* <FontAwesomeIcon icon={faArrowRightFromBracket} style={{marginLeft : 10, marginRight : 10}}></FontAwesomeIcon> */}
                    Sign out
                </NavLink>
            
        </div>
    </nav>
    )

    
}

export default Header;