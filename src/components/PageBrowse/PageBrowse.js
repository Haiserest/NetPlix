import './PageBrowse.css'

import MovieCate from './MovieCate';

export default function PageBrowse(props) {
  let { listtype } = props;

  return (
    <div className="browse-container">
      
      <div className="banner">
          <div className='bannerText'>
            <h1 className='titlemovie'>JOKER</h1>
            <p className='desc'>
            Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a futile attempt to feel like he's part of the world around him.
            </p>
            <button className='banner-btn'>PLAY</button>
          </div>
      </div>
      {listtype === "Series" ? 
      (
        <div className='listcontent'>
        <MovieCate movieType={"Series"} />
      </div>
      ) : (listtype === "Film") ? (
        <div className='listcontent'>
        <MovieCate movieType={"Film"} />
      </div>
      ) : (listtype === "kids") ? (
        <div className='listcontent'>
        <MovieCate movieType={"Kid"} />
      </div>
      ) : (
        <div className='listcontent'>
        <MovieCate movieType={"Drama"} />
        <MovieCate movieType={"Comedy"} />
        <MovieCate movieType={"Adventure"} />
        <MovieCate movieType={"Documentary"} />
        <MovieCate movieType={"Thriller"} />
        <MovieCate movieType={"Crime"} />
        <MovieCate movieType={"Romance"} />
      </div>
      )}

    </div>
  )
}
