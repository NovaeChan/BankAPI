import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserProfile } from '../api/apiCalls'
import { setUser, setLoading, setError, setFirstName, setLastName } from '../reducers/user'
import { Navigate } from 'react-router-dom';

import '../styles/profile.scss'

const Profile = () => {
    const dispatch = useDispatch();

    const isLogged = localStorage.getItem("isLogged");

    if(!isLogged){
        return (
            <Navigate to="/login"></Navigate>
        )
    }

    const firstName = useSelector(state => state.userProfile.firstName);
    const lastName = useSelector(state => state.userProfile.lastName)

    const [newFirstName, setNewFirstName] = useState("");
    const [newLastName, setNewLastName] = useState("");

    const handleEdit = () => {
        document.getElementById("fullName").style.display = "none";
        document.getElementById("edit-button").style.display = "none";
        document.getElementById("edit-section").style.display = "block";
    }

    const handleEditSave = () => {
        document.getElementById("fullName").style.display = "block";
        document.getElementById("edit-button").style.display = "initial";
        document.getElementById("edit-section").style.display = "none";
        dispatch(setFirstName(newFirstName));
        dispatch(setLastName(newLastName));
        const fullName = {"firstName": newFirstName, "lastName": newLastName};
        updateUserProfile(fullName);
    }

    const handleEditCancel = () => {
        document.getElementById("fullName").style.display = "block";
        document.getElementById("edit-button").style.display = "initial";
        document.getElementById("edit-section").style.display = "none";
    }

    return (
        <main className="main bg-dark">
            <div className="header">
                <h1 id="welcome-name">
                    Welcome back<br />
                    <span id="fullName">{firstName} {lastName}</span>
                </h1>
                <button id="edit-button" type="button" onClick={handleEdit}>Edit Name</button>
                <div id="edit-section">
                    <form>
                        <div className="profil-input-wrapper">
                            <input type="text" placeholder={firstName} onChange={e => setNewFirstName(e.target.value)} required />
                        </div>
                        <div className="profil-input-wrapper">
                            <input type="text" placeholder={lastName} onChange={e => setNewLastName(e.target.value)} required />
                        </div>
                    </form>
                    <div className="btn-form">
                        <button type="submit" className="save-button" onClick={handleEditSave}>Save</button>
                        <button type="button" className="cancel-button" onClick={handleEditCancel}>Cancel</button>
                    </div>
                </div>
            </div>            
            <h2 className="sr-only">Accounts</h2>
            <section className="account">
                <div className="account-content-wrapper">
                <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                <p className="account-amount">$2,082.79</p>
                <p className="account-amount-description">Available Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                <button className="transaction-button">View transactions</button>
                </div>
            </section>
            <section className="account">
                <div className="account-content-wrapper">
                <h3 className="account-title">Argent Bank Savings (x6712)</h3>
                <p className="account-amount">$10,928.42</p>
                <p className="account-amount-description">Available Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                <button className="transaction-button">View transactions</button>
                </div>
            </section>
            <section className="account">
                <div className="account-content-wrapper">
                <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
                <p className="account-amount">$184.30</p>
                <p className="account-amount-description">Current Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                <button className="transaction-button">View transactions</button>
                </div>
            </section>
        </main>
    );
};

export default Profile;