import './header.css'

export default function HeaderApp(){

    function returnHome(){
        window.location.href="/";
    }

    return (
        <div className='header-container'>
            <img src='/image/header/netplix2.png' className='logo-header' onClick={returnHome}/>
        </div>
    );
}