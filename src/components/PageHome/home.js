import { useState } from 'react'
import './home.css'

export default function PageHome() {
  const [showAns, setShowAns] = useState({
    q1: false,
    q2: false,
    q3: false,
    q4: false,
    q5: false,
    q6: false,
  });

  function questionClick(q) {
    setShowAns({ [q]: !showAns[q] })
  }

  function clickSignIn(){
    window.location.href="/signIn";
  }

  return (
    <div className="home-container">
      <div className='home-header'>
        <button className='btn-header' onClick={clickSignIn}>Sign In</button>
      </div>
      <div className="home-view">
        <div className="home-box1">
          <div className="text-view">
            <h1>Unlimited movies, TV shows, and more.</h1>
            <h4>Watch anywhere. Cancle anytime.</h4>
            <h4>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h4>
            <input placeholder="Email address" className="home-input" />
            <button className="home-btn">Get Started &#62;</button>
          </div>
        </div>

        <div className="home-box2">
          <div className="text-box2">
            <h1>Enjoy on your TV.</h1>
            <h2>
              Watch on Smart Dog, Table, Box, Calculator, Banana, Mouse, and
              more.
            </h2>
          </div>
          <img className="imageTV" src="/image/main/home/tv.png" />
          <video
            className="videoTV"
            src="/image/main/home/videoTV.m4v"
            loop
            autoPlay
            muted
          />
        </div>

        <div className="home-box3">
          <div className="text-box3">
            <h1>Download your shows to watch offline.</h1>
            <h3>
              Save your favorites easily and always have something to watch.
            </h3>
          </div>
          <div className="imag-box3">
            <img className="mobileImg" src="/image/main/home/mobile.jpg" />
            <div className="loading-mobile">
              <img
                className="poster-mobile"
                src="image/main/home/boxshot.png"
              />
              <h4 className="download-text">Downloading...</h4>
              <div className="loading-icon">
                <img
                  className="loading-gif"
                  src="/image/main/home/download-icon.gif"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="home-box4">
          <div className="text-box4">
            <h1>Watch everywhere.</h1>
            <h3>
              Stream limited movies and TV shows on your Shirt, Shoes, Dog, and
              Telegram.
            </h3>
          </div>
        </div>

        <div className="home-box5">
          <div className="text-box5">
            <h1>Create profiles for kids.</h1>
            <h3>
              Send kids on adventures with their favorite characters in a space
              made just for them—free with your membership.
            </h3>
          </div>
          <img className="kids-box5" src="/image/main/home/kids.png" />
        </div>

        <div className="home-box6">
          <h1>Frequently Asked Questions</h1>

          <div className="dropdown">
            <button
              className={showAns.q1 ? "btn active" : "btn"}
              value={'q1'}
              onClick={(e) => {
                questionClick(e.target.value)
              }}
            >
              What is NetPlix?
              <i className="btnarrow"></i>
            </button>

            {showAns.q1 ? (
              <div className="Q">
                <div className="ans">
                  NetPlix is a streaming service that offers a wide variety of
                  award-winning TV shows, movies, anime, documentaries, and more
                  on thousands of internet-connected devices.
                  <br></br>
                  <br></br>
                  You can watch as much as you want, whenever you want without a
                  single commercial – all for one low monthly price. There's
                  always something new to discover and new TV shows and movies
                  are added every week!
                </div>
              </div>
            ) : null}
          </div>

          <div className="dropdown">
            <button
              className={showAns.q2 ? "btn active" : "btn"}
              value={'q2'}
              onClick={(e) => {
                questionClick(e.target.value)
              }}
            >
              How much does NetPlix cost?
              <i className="btnarrow"></i>
            </button>

            {showAns.q2 ? (
              <div className="Q">
                <div className="ans">
                  Watch NetPlix on your smartphone, tablet, Smart TV, laptop, or
                  streaming device, all for one fixed monthly fee. Plans range
                  from THB99 to THB419 a month. No extra costs, no contracts.
                </div>{' '}
              </div>
            ) : null}
          </div>

          <div className="dropdown">
            <button
              className={showAns.q3 ? "btn active" : "btn"}
              value={'q3'}
              onClick={(e) => {
                questionClick(e.target.value)
              }}
            >
              Where can I watch?
              <i className="btnarrow"></i>
            </button>

            {showAns.q3 ? (
              <div className="Q">
                <div className="ans">
                  Watch anywhere, anytime. Sign in with your NetPlix account to
                  watch instantly on the web at netPlix.com from your personal
                  computer or on any internet-connected device that offers the
                  NetPlix app, including smart TVs, smartphones, tablets,
                  streaming media players and game consoles.
                  <br></br>
                  <br></br>
                  You can also download your favorite shows with the iOS,
                  Android, or Windows 10 app. Use downloads to watch while
                  you're on the go and without an internet connection. Take
                  NetPlix with you anywhere.
                </div>{' '}
              </div>
            ) : null}
          </div>

          <div className="dropdown">
            <button
              className={showAns.q4 ? "btn active" : "btn"}
              value={'q4'}
              onClick={(e) => {
                questionClick(e.target.value)
              }}
            >
              How do I cancel?
              <i className="btnarrow"></i>
            </button>

            {showAns.q4 ? (
              <div className="Q">
                <div className="ans">
                  NetPlix is flexible. There are no pesky contracts and no
                  commitments. You can easily cancel your account online in two
                  clicks. There are no cancellation fees – start or stop your
                  account anytime.
                </div>{' '}
              </div>
            ) : null}
          </div>

          <div className="dropdown">
            <button
              className={showAns.q5 ? "btn active" : "btn"}
              value={'q5'}
              onClick={(e) => {
                questionClick(e.target.value)
              }}
            >
              What can I watch on NetPlix?
              <i className="btnarrow"></i>
            </button>

            {showAns.q5 ? (
              <div className="Q">
                <div className="ans">
                  NetPlix has an extensive library of feature films,
                  documentaries, TV shows, anime, award-winning NetPlix
                  originals, and more. Watch as much as you want, anytime you
                  want.
                </div>
              </div>
            ) : null}
          </div>

          <div className="dropdown">
            <button
              className={showAns.q6 ? "btn active" : "btn"}
              value={'q6'}
              onClick={(e) => {
                questionClick(e.target.value)
              }}
            >
              Is NetPlix good for kids?
              <i className="btnarrow"></i>
            </button>

            {showAns.q6 ? (
              <div className="Q">
                <div className="ans">
                  The NetPlix Kids experience is included in your membership to
                  give parents control while kids enjoy family-friendly TV shows
                  and movies in their own space.
                  <br></br>
                  <br></br>
                  Kids profiles come with PIN-protected parental controls that
                  let you restrict the maturity rating of content kids can watch
                  and block specific titles you don’t want kids to see.
                </div>
              </div>
            ) : null}
          </div>

          <h4>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h4>
          <input placeholder="Email address" className="home-input" />
          <button className="home-btn">Get Started &#62;</button>
        </div>
      </div>
    </div>
  )
}
