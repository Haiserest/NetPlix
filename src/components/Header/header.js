import './header.css'
import { useEffect, useRef, useState } from 'react';
import { SearchOutlined, ExportOutlined, UserOutlined } from '@ant-design/icons';

export default function HeaderApp(){

    const [username, setUsername] = useState("");
    const [states, setStates] = useState(false);
    const [search, setSearch] = useState(false);
    const [menubar, setMenubar] = useState(false);
    const [headerbg, setHeaderbg] = useState(false);
    const [menubg, setMenubg] = useState(false);

    useEffect(()=>{
        if(window.localStorage.getItem("watcher") !== null){
            let user = JSON.parse(window.localStorage.getItem("user"));
            setUsername(user.name);
            setStates(true)
        }

        if (window.location.href.split("/")[3] === ""){
            setStates(false)
        }
    },[]);

    let menuRef = useRef();

    useEffect(()=>{
        document.addEventListener("mouseover", (event) =>{
            if(!menuRef.current.contains(event.target)){
                setMenubar(false);
                setMenubg(false)
            }

            else{
                setMenubar(true)
                if(window.scrollY > 50){
                    setMenubg(true)
                }
                else{
                    setMenubg(false)
                }
            }
        })
   
    });

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY > 50){
                setHeaderbg(true)
            }
            else{
                setHeaderbg(false)
            }
        })
    })

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

    const clickSearch = () =>{
        setSearch(!search)
    }

    return (
        <div className={headerbg ? 'header-containerBG' : 'header-container'}>
            <img src='/image/header/netplix2.png' className='logo-header' onClick={returnHome}/>
        {states ? (

            <div className='headermenu'>
                <div className='nav'>
                    <ul className='navmenu'>
                        <li className='nav-item'><a href="/browse/Series"> Series</a></li>
                        <li className='nav-item'><a href="/browse/Films"> Films</a></li>
                        <li className='nav-item'><a href="/browse/Kids"> Kids</a></li>
                    </ul>
                </div>

                <div className='option'>
                    <input className={search ? "searchbar" : "searchbarhide"}></input>
                    <SearchOutlined className='searchicon' onClick={clickSearch}/>
                    <div className='menuavatar' ref={menuRef}>
                        <img className='useravatar' src='/image/main/avatar.png'/>
                        <div className={menubg ? 'bg-boxask active' : 'bg-boxask'}></div>
                    
                        <div className={menubar ? "box-ask active" : "box-ask"}>
                            {menubar ? (
                                <ul>
                                    <li onClick={getOut}>
                                        <a><UserOutlined /> BackToAvatar</a>
                                    </li>
                                    <li onClick={SignOut}>
                                        <a><ExportOutlined /> SignOut</a>
                                    </li>
                                </ul>
                            ) : null}
                            
                        </div>
                    </div>
                    <h3>{username}</h3>
                    
                </div>
            </div>
        
        ) : null}
        
            
        </div>
    );
}