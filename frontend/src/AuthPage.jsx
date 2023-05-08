import React from "react";

const AuthPage = () => {
    return(
        <div className="loginbox">
            <span className="title">Welcome!</span>
            <span className="subtitle">Enter a username to start chatting!</span>
            <input className="user" type="text" />
            <button className="submit" type="submit">Enter</button>
        </div>
    );
}

export default AuthPage;