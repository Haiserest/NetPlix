import './PageBrowse.css'
import movieList from './movielist';

import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { useRef } from 'react';

export default function PageBrowse() {

    const listRef = useRef();

    const movieListElements = movieList.map((movie) =>{

        return(
            <div className='movie'>
                <img className='moviethum' src={movie.thum}/>
                <div className='movie-overlay'>
                    <div className='movie-detail'>
                        <h2>{movie.name}</h2>
                        <p>{movie.desc}</p>
                    </div>
                </div>
            </div>
        );
    })

    const clickArrow = (e) =>{
        let distance = listRef.current.getBoundingClientRect().x - 105;
        
        if(e === "left"){
            if (distance < 0){
                listRef.current.style.transform = `translateX(${325 + distance}px)`;
            }
            if (distance > 0){
                listRef.current.style.transform = `translateX(0px)`;
            }
            
        }
        if(e === "right"){
            if (distance > -4225){
                listRef.current.style.transform = `translateX(${-325 + distance}px)`;
            }
            if (distance < -4225){
                listRef.current.style.transform = `translateX(-4225px)`;
            }
        }

        console.log(distance)
    }

  return (
    <div className="browse-container">
      <div className="banner">
          <div className='bannerText'>
            <h1 className='titlemovie'>Movie Now</h1>
            <p className='desc'>
            Proident labore fugiat laboris mollit esse adipisicing ut ipsum sit
            enim ea amet magna. Voluptate Lorem mollit excepteur incididunt
            reprehenderit.
            </p>
            <button className='banner-btn'>PLAY</button>
          </div>
      </div>

      <div className='list'>
        <h2>Title List</h2>
        <div className='slidemovie'>
            <LeftOutlined className='arr-l' onClick={()=>clickArrow("left")}/>
            <div className='shell' ref={listRef}>
                {movieListElements}
            </div>
            <RightOutlined className='arr-r' onClick={()=>clickArrow("right")}/>
        </div>
      </div>

    </div>
  )
}
