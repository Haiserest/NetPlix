import { useEffect, useState } from 'react';
import './PageAvatar.css'

export default function PageAvatar(){

    const [username, setUsername] = useState("");

    useEffect(()=>{
        window.localStorage.removeItem("watcher");
        let user = JSON.parse(window.localStorage.getItem("user"));
        setUsername(user.name); 
    },[])

    const getIn = () =>{
        window.localStorage.setItem("watcher", username);
        window.location.href="/browse";
    }

    return (
        <div className='pageAvatar-container'>
            <div className='bg'>
                <div className='watcher'>
                    <h2 className='watcher-text'>Who's watching?</h2>
                    <img className='avatar-watcher' src='image/main/avatar.png' onClick={getIn}/>
                    <p className='name-watcher'>{username}</p>
                </div>
            </div>
        </div>
    );
}