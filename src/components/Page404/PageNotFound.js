import './PageNotFound.css'

export default function PageNotFound(){
    return (
        <div className='error-container'>
            <div className='errorBG'>
                <img className='imageError' src='/image/error/bg-error.png'/>
                <a href='/' className='wrapError'>
                    <span className='textError1'>PAGE NOT FOUND</span>
                    <span className='textError2'>WRAP PORTAL</span>
                </a>
            </div>
        </div>
    );
}