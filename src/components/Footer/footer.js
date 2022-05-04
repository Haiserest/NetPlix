import './footer.css'

export default function FooterApp(){
    return (
        <div className='footer-container'>
            <div className='footer-area'>
                <p className='footer-headmenu'>Question? </p>
                <div className='footer-menu'>
                    <ul className='footer-items'>
                        <li><a>FAQ</a></li>
                        <li><a>Investor Relations</a></li>
                        <li><a>Ways to Watch</a></li>
                        <li><a>Corporate Information</a></li>
                        <li><a>Only on NetPlix</a></li>
                    </ul>

                    <ul className='footer-items'>
                        <li><a>Help Center</a></li>
                        <li><a>Jobs</a></li>
                        <li><a>Terms of Use</a></li>
                        <li><a>Contact Us</a></li>
                    </ul>

                    <ul className='footer-items'>
                        <li><a>Account</a></li>
                        <li><a>Redeem Gift Cards</a></li>
                        <li><a>Privacy</a></li>
                        <li><a>Speed Test</a></li>
                    </ul>

                    <ul className='footer-items'>
                        <li><a>Media Center</a></li>
                        <li><a>Buy Gift Cards</a></li>
                        <li><a>Cookie Preferences</a></li>
                        <li><a>Legal Notices</a></li>
                    </ul>
                    
                </div>
                <select className='footer-selecter'>
                    <option>ไทย</option>
                    <option>English</option>
                </select> 

                <p className='footer-copy'>NETPLIX</p>
            </div>
        </div>
    );
}