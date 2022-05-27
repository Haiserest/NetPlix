import './MovieCate.css'
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import movieList from './movielist';
import { useRef } from 'react';

export default function MovieCate(props){

    const { movieType } = props;

    const cateRef = useRef();
    let countPage = -1;

    const moveCate = (direc) => {
        const max = -325*(countPage-1);
        let distance = cateRef.current.getBoundingClientRect().x - 70;

        if (direc === "left"){
            if (distance < 0){
                cateRef.current.style.transform = `translateX(${325 + distance}px)`;
            }
            if (distance > -325){
                cateRef.current.style.transform = `translateX(0px)`;
            }
        }

        if (direc === "right"){
            if (distance > max){
                cateRef.current.style.transform = `translateX(${-325 + distance}px)`;
            }
            if (distance <= max){
                cateRef.current.style.transform = `translateX(${max-325}px)`;
            }
        }
    }

    const ListCateElements = movieList.map((movie)=>{
        
        if (movie.type.search(movieType) > -1){
            countPage++;
            return(
            <div className='catemovie'>
                <img src={movie.thum}/>
                <div className='cate-overlay'>
                    <div className='cate-detail'>
                        <h2>{movie.name}</h2>
                        <p>{movie.desc}</p>
                    </div>
                </div>
            </div>
        );
        }

    });

    return (
        <div className="moviecate-container">
            <div className='cate-con'>
                <h2>{movieType}</h2>
                <div className='movie-box'>
                    <LeftOutlined className='al' onClick={()=> moveCate("left")}/>
                    <div className='cate' ref={cateRef}>
                        {ListCateElements}
                    </div>
                    <RightOutlined className='ar' onClick={()=> moveCate("right")}/>
                </div>
            </div>
        </div>
    );
}