
import React, { useEffect, useState } from 'react'
import fetchUrl from '../axios'
import './catgories.css'

const Catagories = ({ title, url }) => {

    const [movies, setMovies] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const fetch = await fetchUrl.get(url)
            setMovies(fetch.data.results)
        }
        fetchData()
    }, [url])

    return (
        <div className='catagory'>
            <h1>{title}</h1>
            <div className="image-holder">
                {
                    movies.map((image) => (
                        <img src={`https://image.tmdb.org/t/p/original/${image?.backdrop_path || image?.poster_path}`} alt="" className='imageContent' srcset="" />
                    )
                    )
                }
            </div>

        </div>
    )
}

export default Catagories
