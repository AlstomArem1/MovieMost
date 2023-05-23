import { Link, useParams } from "react-router-dom";
import "./card.css"
import { GiRoundStar } from "react-icons/gi";
const Cards = (props) => {
    const { movie } = props;
   
    return (
        <>
            <Link
                to={`/movie/${movie.id}`}
                style={{ textDecoration: "none", color: "white" }}
            >
                <div className="cards">
                    <img
                        className="cards_img"
                        src={`https://image.tmdb.org/t/p/original${movie ? movie.poster_path : ""
                            }`}
                    /> 
                    <div className="cards_overlay">
                        <div className="card_title">
                            {movie ? movie.original_title : ""}
                           
                        </div>
                        <div className="card_runtime">
                            {movie ? movie.release_date : ""}
                            <span>
                                {movie ? movie.vote_average : ""}
                                <i className="fas fa-star" />
                                <GiRoundStar />
                            </span>
                        </div>
                        <div className="card_description">
                            {movie ? movie.overview.slice(0, 118) + "...": ""}
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
}
export default Cards;