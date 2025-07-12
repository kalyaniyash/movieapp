import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Loader from "../components/Loader";
import { useEffect } from "react";
import Row from "../components/Row";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useAppStateContext from "../hooks/useAppStateContext";
import {
  getMovies,
  getMoviesStatus,
  selectAllMovies,
} from "../slices/movieSlice";

const HomePage = () => {
  const dispatch = useDispatch();
  const status = useSelector(getMoviesStatus);
  const movies = useSelector(selectAllMovies);
  const navigate = useNavigate();
  const { dispatch: appDispatch } = useAppStateContext();

  const handleLogout = () => {
    appDispatch({ type: "Logout" });
    navigate("/login");
  };

  useEffect(() => {
    if (status === "idle") {
      dispatch(getMovies());
    }
  }, [status, dispatch]);

  // Debug: log movies and status
  console.log('HomePage status:', status);
  console.log('HomePage movies:', movies);

  // Defensive rendering
  if (status === 'loading') {
    return (
      <div style={{ backgroundColor: "#111", minHeight: "100vh" }}>
        <Navbar />
        <Loader size="large" message="Loading amazing movies for you..." />
      </div>
    );
  }
  if (status === 'failed') {
    return <div style={{ color: 'red', textAlign: 'center', marginTop: 40 }}>Failed to load movies.</div>;
  }
  if (!movies || typeof movies !== 'object' || Object.keys(movies).length === 0) {
    return <div style={{ color: 'white', textAlign: 'center', marginTop: 40 }}>No movies found.</div>;
  }

  return (
    <div
      className="page"
      style={{ backgroundColor: "#111", overflow: "hidden" }}
    >
      <button style={{position: 'absolute', top: 10, right: 10, zIndex: 1000}} onClick={handleLogout}>Logout</button>
      <Navbar />
      <Banner />
      {Object.keys(movies).map((title) => (
        <Row key={title} title={title} movies={movies[title]} />
      ))}
    </div>
  );
};

export default HomePage;
