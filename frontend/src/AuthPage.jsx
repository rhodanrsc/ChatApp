import React from "react";
import axios from 'axios';

const AuthPage = (props) => {

    const onSubmit = (e) => {
        e.preventDefault();
        const { value } = e.target[0];
        axios.post("http://localhost:3001/authenticate", { username: value })
        .then( r => props.onAuth({ ...r.data, secret: value }))
        .catch( e => console.log('error', e) );
        props.onAuth({ username: value, secret: value });
    }

    return(
        <div className="authpage">
            <form onSubmit={onSubmit} className="loginbox">
                <div className="welcome">
                    <span className="title">Welcome!</span>
                    <br/>
                    <span className="subtitle">Enter a username to start chatting!</span>
                </div>
                
                <div className="form">
                    <input className="user" type="text" />
                    <button className="submit" type="submit">=&gt;</button>
                </div>
            </form>
        </div>
    );
}

export default AuthPage;