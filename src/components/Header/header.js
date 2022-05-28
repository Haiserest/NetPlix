import './header.css'
import { useEffect, useRef, useState } from 'react';
import { SearchOutlined, ExportOutlined, UserOutlined } from '@ant-design/icons';

export default function HeaderApp(){

    const [username, setUsername] = useState("");
    const [states, setStates] = useState(false);
    const [search, setSearch] = useState(false);
    const [menubar, setMenubar] = useState(false);

    useEffect(()=>{
        if(window.localStorage.getItem("watcher") !== null){
            setUsername(window.localStorage.getItem("user").split("@")[0]); 
            setStates(true)
        }

        if (window.location.href.split("/")[3] === ""){
            setStates(false)
        }
    },[]);

    let menuRef = useRef();

    useEffect(()=>{
        document.addEventListener("mousedown", (event) =>{
            if(!menuRef.current.contains(event.target))
                setMenubar(false);

            else if(menubar){
                setInterval(() =>{
                    setMenubar(false)
                },8000);
        }
        })
   
    });

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

    const SignOut = () =>{
        localStorage.clear();
        window.location.href="/";
    }

    const clickAvatar = () =>{
        setMenubar(true)
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
                        <li className='nav-item'><a> Series</a></li>
                        <li className='nav-item'><a> Films</a></li>
                        <li className='nav-item'><a> Kids</a></li>
                    </ul>
                </div>

                <div className='option'>
                    <input className={search ? "searchbar" : "searchbarhide"}></input>
                    <SearchOutlined className='searchicon' onClick={clickSearch}/>
                    <img className='useravatar' src='image/main/avatar.png' onClick={clickAvatar} ref={menuRef}/>
                    
                        <div className={menubar ? "box-ask active" : "box-ask"}>
                            <ul>
                                <li onClick={getOut}>
                                    <a><UserOutlined /> BackToAvatar</a>
                                </li>
                                <li onClick={SignOut}>
                                    <a><ExportOutlined /> SignOut</a>
                                </li>
                            </ul>
                        </div>
                        
                    <h3>{username}</h3>
                </div>
            </div>
        
        ) : null}
        
            
        </div>
    );
}