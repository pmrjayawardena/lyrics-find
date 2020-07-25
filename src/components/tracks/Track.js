import React from "react";
import { Link } from "react-router-dom";
const Track = (props) => {
  const { single_track } = props;
  return (
    <div className="col-md-6">
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h5>{single_track.artist_name}</h5>
          <p className="card-text">
            <strong>Track</strong>: {single_track.track_name} <br />
            <strong>Album</strong>: {single_track.album_name}
          </p>
          <Link
            to={`lyrics/tracks/${single_track.track_id}`}
            className="btn btn-dark btn-block"
          >
            View Lyrics
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Track;
