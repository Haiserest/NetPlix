import { useState } from 'react';
import './signIn.css';

export default function PageSignIn(){

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errUser, setErrUser] = useState("")
    const [errPass, setErrPass] = useState("")

    const passregex = new RegExp("^(?=.*[a-z])(?=.*[0-9])(?=.{4,60})");
    const userregex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,4}');

    function onClickSubmit(){

        let status = true;
        setErrUser("");
        setErrPass("");

        if(!username.length){
            setErrUser("Please enter a valid email or phone number.")
            status = false;
        }

        else if(!userregex.test(username)){
            setErrUser("Please enter a valid email.")
            status = false;
        }

        if(!password.length || !passregex.test(password)){
            setErrPass("Your password must contain between 4 and 60 characters.")
            status = false;
        }

        if(status){
            localStorage.setItem("user", username);
            localStorage.setItem("password", password);
            alert("sign in")
            setUsername("");
            setPassword("");
            setErrUser("");
            setErrPass("");
        }

    }

    return(
        <div className='signin-container'>
            <div className='signin-view'>
                <div className='signin-box'>
                    <div className='signin-input'>
                        <h1 className='signin-header'>Sign In</h1>
                        <br></br>
                        <div className='signin-field'>
                            <input
                            className='text-input'
                            id="username"
                            type="text"
                            value={username}
                            required
                            onChange={(e)=>{setUsername(e.target.value)}}
                            />
                            {errUser ? <div className='errMsg'>{errUser}</div> : null }
                            <label className='placeholder'>Email or phone number</label>
                        </div>
                        
                        <br></br>
                        <div className='signin-field'>
                            <input
                            className='text-input'
                            id="password"
                            type="password"
                            value={password}
                            required
                            onChange={(e)=>{setPassword(e.target.value)}}
                            />
                            {errPass ? <div className='errMsg'>{errPass}</div> : null }
                            <label className='placeholder'>Password</label>
                        </div>
                        
                        <br></br>
                        <button className='btnSignin' onClick={onClickSubmit}>Sign In</button>
                        <div className='option'>
                            <div className='option-box'>
                                <input type="checkbox" className='remem-box'/>
                                <label className='remem-text'>Remember me</label>
                            </div>
                            <a className='help-text' href='/'>Need help?</a>
                        </div>
                        
                        <p></p>
                        <div className='etc'>
                            <p>
                                New to Netflix? &nbsp;
                                <a href='/' className='signup-now'>Sign up now.</a>
                            </p>
                            This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href='/' className='learn-more'>Learn more.</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}