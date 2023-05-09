import React from "react";

const AuthPage = () => {
    return(
        <div className="authpage">
            <div className="loginbox">
                <div className="welcome">
                    <span className="title">Welcome!</span>
                    <br/>
                    <span className="subtitle">Enter a username to start chatting!</span>
                </div>
                
                <div className="form">
                    <input className="user" type="text" />
                    <button className="submit" type="submit">=&gt;</button>
                </div>
            </div>
        </div>
    );
}

export default AuthPage;