import React from "react";
import "../styles/SkeletonCard.css";

const SkeletonCard = ({ isLarge }) => (
  <div className={`skeleton-card${isLarge ? " skeleton-card-large" : ""}`}>
    <div className="skeleton-image shimmer" />
    <div className="skeleton-title shimmer" />
    <div className="skeleton-meta shimmer" />
  </div>
);

export default SkeletonCard;
