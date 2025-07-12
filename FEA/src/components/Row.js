import React, { useState } from "react";
import SkeletonCard from "./SkeletonCard";
import "../styles/Row.css";
import movieTrailer from "movie-trailer";
import { useNavigate } from "react-router-dom";
import YouTube from "react-youtube";

const opts = {
  height: "400",
  width: "100%",
  playerVars: {
    autoplay: 1,
  },
};


const Row = ({ movies, title, isLarge }) => {
  // Debug: log movies prop and type
  console.log('Row:', title, 'movies:', movies, 'type:', typeof movies, 'isArray:', Array.isArray(movies));

  // Defensive: ensure movies is always an array
  const safeMovies = Array.isArray(movies) ? movies : [];

  const [movie, setMovie] = useState({});
  const [trailerUrl, setTrailerUrl] = useState("");
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  // setup page navigation

  const handlePlayClick = (event) => {
    event.preventDefault();
    if (!movie || !movie.title) {
      alert("No movie selected or missing title.");
      return;
    }
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie.title || "")
        .then((url) => {
          if (!url) {
            alert("Trailer not found.");
            return;
          }
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => {
          console.log("Trailer error:", error);
          alert("Error finding trailer.");
        });
    }
  };

  const handleViewClick = (event) => {
    event.preventDefault();
    if (!movie || !movie.movie_id) {
      alert("No movie selected.");
      return;
    }
    navigate(`/movie/${movie.movie_id}`, {state: {movie}});
  };

  const handleMovieClick = (event, movieObj) => {
    event.preventDefault();
    if (!movieObj) {
      alert("Invalid movie data.");
      return;
    }
    setMovie(movieObj);
    if (trailerUrl) {
      setTrailerUrl("");
    }
    setShowModal(!showModal);
  };

  // Defensive rendering for movies prop
  if (!Array.isArray(safeMovies) || safeMovies.length === 0) {
    // Show skeletons while loading or if no movies
    return (
      <div className="row">
        <h2>{title}</h2>
        <div className="row_posters">
          {Array.from({ length: isLarge ? 5 : 8 }).map((_, idx) => (
            <SkeletonCard key={idx} isLarge={isLarge} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {safeMovies.map((movie) => {
          // Defensive: fallback for missing poster/backdrop
          const imgSrc = isLarge ? movie.poster : movie.backdrop_poster;
          const fallbackImg = "https://via.placeholder.com/300x450?text=No+Image";
          return (
            <img
              key={movie.movie_id}
              className={`row_poster ${isLarge ? "row_posterLarge" : ""}`}
              src={imgSrc || fallbackImg}
              alt={movie.title || "Untitled"}
              onClick={(event) => handleMovieClick(event, movie)}
              onError={e => { e.target.onerror = null; e.target.src = fallbackImg; }}
            />
          );
        })}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>} 
      {showModal && (
        <div className="movie_options">
            <button className="movie_button" onClick={(event) => handlePlayClick(event)}>Play</button>
            <button className="movie_button" onClick={(event) => handleViewClick(event)}>View</button>
        </div>
      )}
    </div>
  );
};

export default Row;
