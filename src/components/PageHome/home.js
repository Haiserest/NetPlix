import './home.css';

export default function PageHome(){
    
    return(
        <div className='home-container'>
            <div className='home-view'>

                <div className='home-box1'>
                    <div className='text-view'>
                        <h1>Unlimited movies, TV shows, and more.</h1>
                        <h4>Watch anywhere. Cancle anytime.</h4>
                        <h4>Ready to watch? Enter your email to create or restart your membership.</h4>
                        <input placeholder='Email address' className='home-input'/>
                        <button className='home-btn'>Get Started &#62;</button>
                    </div>
                </div>

                <div className='home-box2'>
                    <div className='text-box2'>
                        <h1>Enjoy on your TV.</h1>
                        <h2>Watch on Smart Dog, Table, Box, Calculator, Banana, Mouse, and more.</h2>
                    </div>
                    <img className='imageTV' src='/image/main/home/tv.png' />
                    <video className='videoTV' src='/image/main/home/videoTV.m4v' loop autoPlay muted /> 
                </div>

                <div className='home-box3'>
                    <div className='text-box3'>
                        <h1>Download your shows to watch offline.</h1>
                        <h3>Save your favorites easily and always have something to watch.</h3>
                    </div>
                    <div className='imag-box3'>
                        <img className='mobileImg' src='/image/main/home/mobile.jpg'/>
                        <div className='loading-mobile'>
                            <img className='poster-mobile' src='image/main/home/boxshot.png'/>
                            <h4 className='download-text'>Downloading...</h4>
                            <div className='loading-icon'>
                                <img className='loading-gif' src='/image/main/home/download-icon.gif'/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='home-box4'>
                    <div className='text-box4'>
                        <h1>Watch everywhere.</h1>
                        <h3>Stream limited movies and TV shows on your Shirt, Shoes, Dog, and Telegram.</h3>
                    </div>
                </div>

                <div className='home-box5'>
                    <div className='text-box5'>
                        <h1>Create profiles for kids.</h1>
                        <h3>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</h3>
                    </div>
                    <img className='kids-box5' src='/image/main/home/kids.png' />
                </div>

                <div className='home-box6'>
                    <h1>Frequently Asked Questions</h1>

                    <div className='dropdown'>
                        <button className='btn'>What is NetPlix?
                            <h4 className='btnarrow'>&#9587;</h4>
                        </button>
                        
                        <div className='Q'>Hello1</div>
                    </div>
                    
                    <div className='dropdown'>
                        <button className='btn'>How much does NetPlix cost?
                            <h4 className='btnarrow'>&#9587;</h4>
                        </button>
                        <div className='Q'>Hello2</div>
                    </div>

                    <div className='dropdown'>
                        <button className='btn'>Where can I watch?
                            <h4 className='btnarrow'>&#9587;</h4>
                        </button>
                        <div className='Q'>Hello3</div>
                    </div>

                    <div className='dropdown'>
                        <button className='btn'>How do I cancel?
                            <h4 className='btnarrow'>&#9587;</h4>
                        </button>
                        <div className='Q'>Hello4</div>
                    </div>

                    <div className='dropdown'>
                        <button className='btn'>What can I watch on NetPlix?
                            <h4 className='btnarrow'>&#9587;</h4>
                        </button>
                        <div className='Q'>Hello5</div>
                    </div>

                    <div className='dropdown'>
                        <button className='btn'>Is NetPlix good for kids?
                            <h4 className='btnarrow'>&#9587;</h4>
                        </button>
                        <div className='Q'>Hello6</div>
                    </div>

                    <h4>Ready to watch? Enter your email to create or restart your membership.</h4>
                    <input placeholder='Email address' className='home-input'/>
                    <button className='home-btn'>Get Started &#62;</button>
                </div>

            </div>
        </div>
    );
}