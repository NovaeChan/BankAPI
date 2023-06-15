import React from 'react';
import { Link } from 'react-router-dom'
import argentBankLogo from '../../assets/images/argentBankLogo.png'

function Header() {
    return (
        <header>
            <nav className="main-nav">
                <Link className="main-nav-logo" to="/">
                    <img
                        className="main-nav-logo-image"
                        src={argentBankLogo}
                        alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </Link>
                <div>
                    <a className="main-nav-item" href="./sign-in.html">
                    <i className="fa fa-user-circle"></i>
                    Sign In
                    </a>
                </div>
            </nav>
        </header>
    );
};

export default Header;