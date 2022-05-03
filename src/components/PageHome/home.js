import './home.css';

export default function PageHome(){
    return(
        <div className='home-container'>
            <div className='home-view'>

                <div className='home-box1'>
                    {/* <img src='/image/main/home/home-bg.jpg' className='image-view'/> */}
                    <div className='text-view'>
                        <h1>Unlimited movies, TV shows, and more.</h1>
                        <h4>Watch anywhere. Cancle anytime.</h4>
                        <h4>Ready to watch? Enter your email to create or restart your membership.</h4>
                        <input placeholder='Email address' className='home-input'/>
                        <button className='home-btn'>Get Started &#62;</button>
                    </div>
                </div>

                <div className='home-box2'>
                    <h1>Enjoy on your TV.</h1>
                    <h2>Watch on Smart TVs, Playsrtation, Xbox, Chromecast, Apple TV, Blu-rat players, and more.</h2>
                </div>

                <div className='home-box3'>
                    <h1>Download your shows to watch offline.</h1>
                    <h3>Save your favorites easily and always have something to watch.</h3>
                </div>

                <div className='home-box4'>
                    <h1>Watch everywhere.</h1>
                    <h3>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h3>
                </div>

                <div className='home-box5'>
                    <h1>Create profiles for kids.</h1>
                    <h3>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</h3>
                </div>

                <div className='home-box6'>
                    <h1>Frequently Asked Questions</h1>
                    <h3>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</h3>
                    <h4>Ready to watch? Enter your email to create or restart your membership.</h4>
                    <input placeholder='Email address' className='home-input'/>
                    <button className='home-btn'>Get Started &#62;</button>
                </div>

            </div>
        </div>
    );
}