import { Routes, Route } from "react-router-dom";
import Home from "./compenents/pages/home/Home";
import Header from "./compenents/Header/header";
import MovieDetail from "./compenents/pages/MovieDetail.js/MovieDetail";
import MovieList from "./compenents/movieList/MovieList";

export default function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/*" element={<h1>Error Page</h1>}></Route>
        <Route path="movies/:type" element={<MovieList/>}></Route>
        <Route path="movie/:id" element={<MovieDetail />}></Route>
     
      </Routes>
    </div>
  )
}
