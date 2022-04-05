import React, { useEffect, useState } from 'react'
import request from '../MovieRequest';

import './banner.css'
import fetchUrl from '../axios'


const Banner = () => {
    const [movie, setMovies] = useState([]);
    const truncateDescription = (string, n) => {
        return string?.length > n ? string.substr(0, n) + '...' : string;
    }
    useEffect(() => {
        const fetchMovie = async () => {
            const fetcher = await fetchUrl.get(request.highestRateMovie)
            setMovies(fetcher.data.results[Math.floor(Math.random() * fetcher.data.results.length - 1)])

        }
        fetchMovie()
    },
        []);
    console.log(movie)
    return (
        <div className='banner' style={{
            backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path || movie?.poster_path}')`,
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',

        }}>
            {/* movie headseer */}
            <h2 className="title">{movie?.original_title || movie?.title || movie?.name}</h2>
            <div className="buttons">
                <button className='play'>Play</button>
                <button className='play'>My Lists</button>
            </div>
            <div className="desc">
                <p>{truncateDescription(movie?.overview, 150)}</p>
            </div>
        </div>
    )
}

export default Banner