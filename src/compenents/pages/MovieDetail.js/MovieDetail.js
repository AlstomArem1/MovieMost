
import "./MovieDetail.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { BsFillStarFill } from "react-icons/bs";

const MovieDetail = () => {
    const [currentMovieDetail, setcurrentMovieDetail] = useState(null);


    const { id } = useParams();
    const getData = async () => {
        const apikey = "4e44d9029b1270a757cddc766a1bcb63";
        const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apikey}&language=en-US`;

        axios
            .get(url)
            .then((res) => {
                console.log(res)
                setcurrentMovieDetail(res.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    useEffect(() => {
        getData();
    }, [id]);
    console.log(currentMovieDetail);
    return (
        
        <div className="movie">
            
            <div className="movie_intro">
                <img className="movie_backdrop" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.backdrop_path : ""}`} />
            </div>
            <div className="movie_detail">
                <div className="movie_detailLeft">
                    <div className="movie_posterBox">
                        <img className="movie_poster" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.poster_path : ""}`} />
                    </div>
                </div>
                <div className="movie_detailRight">
                    <div className="movie_detailRightTop">
                        <div className="movie_name">{currentMovieDetail ? currentMovieDetail.original_title : ""}</div>
                        <div className="movie_tagline">{currentMovieDetail ? currentMovieDetail.tagline : ""}</div>
                        <div className="movie_rating">
                            {currentMovieDetail ? currentMovieDetail.vote_average : ""} <i class="fas fa-star" /><BsFillStarFill style={{color:"gold"}}/>
                            <span className="movie_voteCount">{currentMovieDetail ? "(" + currentMovieDetail.vote_count + ") votes" : ""}</span>
                        </div>
                        <div className="movie_runtime">{currentMovieDetail ? currentMovieDetail.runtime + " mins" : ""}</div>
                        <div className="movie_releaseDate">{currentMovieDetail ? "Release date  " + currentMovieDetail.release_date : ""}</div>
                        <div className="movie_genres">
                            {
                                currentMovieDetail && currentMovieDetail.genres
                                ?
                                currentMovieDetail.genres.map(genre => (
                                    <><span className="movie_genre" id={genre.id}>{genre.name}</span></>
                                ))
                                :
                                ""
                            }
                        </div>
                    </div>
                    <div className="movie_detailRightBottom">
                        <div className="synopsisText">Synopsis</div>
                        <div>{currentMovieDetail ? currentMovieDetail.overview : ""}</div>
                    </div>
                </div>
            </div>
            <div className="movie_links">
                <div className="movie_heading">Useful Links </div>
                {
                    currentMovieDetail && currentMovieDetail.homepage && <a href={currentMovieDetail.homepage} target="blank" style={{ textDecoration: "none" }}><p><span className="movie_headingtop"></span></p></a>
                }
                {
                    currentMovieDetail && currentMovieDetail.imdb_id && <a href={"https://www.imdb.com/title/" + currentMovieDetail.imdb_id} target="blank" style={{ textDecoration: "none" }}></a>
                }
            </div>
            <div className="movie_heading">Production companies</div>
            <div className="movie_production">
                {
                    currentMovieDetail && currentMovieDetail.production_companies && currentMovieDetail.production_companies.map(company => (
                        <>
                            {
                                company.logo_path
                                &&
                                <span className="productionCompanyImage">
                                    <img className="movie_productionComapany" src={"https://image.tmdb.org/t/p/original" + company.logo_path} />
                                    <span>{company.name}</span>
                                </span>
                            }
                        </>
                    ))
                }
            </div>
        </div>
    );
};
export default MovieDetail;