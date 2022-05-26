import './header.css'
import { useEffect, useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';

export default function HeaderApp(){

    const [username, setUsername] = useState("");
    const [states, setStates] = useState(false);
    const [search, setSearch] = useState(false);

    useEffect(()=>{

        if(window.localStorage.getItem("watcher") !== null){
            setUsername(window.localStorage.getItem("user").split("@")[0]); 
            setStates(true)
        }

    },[]);

    function returnHome(){
        if(window.localStorage.getItem("user") !== null){
            window.location.href="/browse";
        }
            
        else
            window.location.href="/";
    }

    const getOut = () =>{
        window.localStorage.removeItem("watcher");
        window.location.href="/avatar";
    }

    const clickSearch = () =>{
        setSearch(!search)
    }

    return (
        <div className='header-container'>
            <img src='/image/header/netplix2.png' className='logo-header' onClick={returnHome}/>
        {states ? (

            <div className='headermenu'>
                <div className='nav'>
                    <ul className='navmenu'>
                        <li className='nav-item'><a> series</a></li>
                        <li className='nav-item'><a> Films</a></li>
                    </ul>
                </div>

                <div className='option'>
                    <input className={search ? "searchbar" : "searchbarhide"}></input>
                    <SearchOutlined className='searchicon' onClick={clickSearch}/>
                    <img className='useravatar' src='image/main/avatar.png' onClick={getOut}/>
                    <h3>{username}</h3>
                </div>
            </div>
        
        ) : null}
        
            
        </div>
    );
}