import './header.css'

export default function HeaderApp(){
    return (
        <div className='header-container'>
            <img src='/image/header/netplix2.png' className='logo-header'/>
            <button className='btn-header'>Sign In</button>
        </div>
    );
}