import './Scroll.css'
import { UpOutlined } from '@ant-design/icons';

export default function ScrollUp(props){

    const { cc } = props; 

    const clickUp = () =>{
        window.scrollTo({
            top:0,
            behavior: "smooth"
        });
    }
    return (
        <div className='scrollUp-container'>
            <div className={cc} onClick={clickUp} >
                <UpOutlined className='upicon'/>
            </div>
        </div>
    );
}