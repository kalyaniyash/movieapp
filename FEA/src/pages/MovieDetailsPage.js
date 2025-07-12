import { useLocation } from "react-router-dom";
import "../styles/MovieDetailsPage.css";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Comment from "../components/Comment";
import CommentBox from "../components/CommentBox";
import Loader from "../components/Loader";
import { mockComments } from "../constants/commentsData";
import SkeletonCard from "../components/SkeletonCard";

const MovieDetailsPage = () => {
  const location = useLocation();
  const movie = location.state?.movie;

  // Show loader if movie data is not present
  if (!movie) {
    return (
      <div className="movie-page">
        <Navbar />
        <Loader size="large" message="Loading movie details..." />
      </div>
    );
  }

  return (
    <div className="movie-page">
      <Navbar />
      <Banner selectedMovie={movie}/>
      <div className="comment-section">
        <h2 className="reviews">Comments & Reviews</h2>
        <div className="movie-page-bottom">
          <div className="comments">
            {mockComments.length === 0 ? (
              <div className="no-comments-message">
                <span>No Comments</span>
              </div>
            ) : (
              mockComments.map((comment, index) => (
                <Comment key={index} comment={comment} />
              ))
            )}
          </div>
          <CommentBox />
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
