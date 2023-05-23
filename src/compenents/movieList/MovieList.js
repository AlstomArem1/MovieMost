import axios from "axios";
import { useState, useEffect } from "react";
import Cards from "../Card/card";
import "./MovieList.css";
import { useParams } from "react-router-dom";


const MovieList = () => {
    const [movieList, setMovieList] = useState(null);


    const { type } = useParams();
    const getData = async () => {
        const apikey = "4e44d9029b1270a757cddc766a1bcb63";
        const url = `https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=${apikey}&language=en-US`;

        axios
            .get(url)
            .then((res) => {
                console.log(res)
                setMovieList(res.data.results);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    useEffect(() => {
        getData();
    }, [type]);


    return (
        <div className="movie_list">
            <h2 className="list_title">{(type ? type : "POPULAR").toUpperCase()}</h2>
            <div className="list_cards">
                {movieList && movieList.map((movie, index) => (
                    <Cards key={index} movie={movie} />
                ))}

            </div>
        </div>
    )
}
export default MovieList;