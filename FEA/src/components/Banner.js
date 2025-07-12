import { useEffect, useState } from "react";
import "../styles/Banner.css";
import { movieApi } from "../constants/axios";
import { movieRequests } from "../constants/requests";
import useAppStateContext from "../hooks/useAppStateContext";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

const opts = {
  height: "400",
  width: "100%",
  playerVars: {
    autoplay: 1,
  },
};

const Banner = ({selectedMovie}) => {
  const { user } = useAppStateContext();

  const [movie, setMovie] = useState(selectedMovie ? selectedMovie : {
    title: "",
    release_date: "",
    backdrop_poster: "",
    overview: "",
  });
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await movieApi.get(
          movieRequests.fetchNetflixOriginals,
          {
            headers: {
              Authorization: `Bearer ${user?.token}`,
            },
          }
        );
        setMovie(
          request.data.movies[
            Math.floor(Math.random() * (request.data.movies.length - 1))
          ]
        );
      } catch (error) {
        console.log(error);
      }
    };

    if(!selectedMovie){
      fetchData();
    }
  }, [selectedMovie, user?.token]);

  const truncate = (str, limit) => {
    return str?.length > limit ? str.substr(0, limit - 1) + "..." : str;
  };

  const handlePlayClick = (event) => {
    event.preventDefault();

    // here we should the call seen movies

    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie.title || "").then((url) => {
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get("v"))
      }).catch((error) => console.log(error));
    }
  };

  return (
    <div>
      <header
        className="banner"
        style={{
          backgroundImage: `url("${movie.backdrop_poster}")`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="banner_contents">
          <h1 className="banner_title">{movie.title}</h1>
          <div className="banner_buttons">
            <button
              className="banner_button"
              onClick={(event) => handlePlayClick(event)}
            >
              Play
            </button>
            <button className="banner_button">My List</button>
            <span className="banner_release_date">
              {movie.release_date
                ? new Date(movie?.release_date).toISOString().split("T")[0]
                : ""}
            </span>
            <p className="banner_description">
              {truncate(movie.overview, 150)}
            </p>
          </div>
          {/* <div className="fade"></div> */}
        </div>
      </header>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
    </div>
  );
};

export default Banner;
