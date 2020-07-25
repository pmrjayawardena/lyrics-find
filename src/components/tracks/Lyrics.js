import React, { Component, Fragment } from "react";
import axios from "axios";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import Spinner from "../layouts/Spinner";
class Lyrics extends Component {
  state = {
    track: {},
    lyrics: {},
    loading: false,
  };

  componentDidMount() {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${this.props.match.params.id}&apikey=f4e45019303e192651fccdf533577d7c`
      )
      .then((res) => {
        // console.log(res.data);
        this.setState({ lyrics: res.data.message.body.lyrics, loading: true });

        return axios.get(
          `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=${this.props.match.params.id}&apikey=f4e45019303e192651fccdf533577d7c`
        );
      })
      .then((res) => {
        console.log(res.data);
        this.setState({ track: res.data.message.body.track, loading: false });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    const { track, lyrics, loading } = this.state;
    console.log(track);
    return (
      <Fragment>
        {loading ? (
          <Spinner loading={true} />
        ) : (
          <Fragment>
            <Link to="/" className="btn btn-dark btn-sm mb-4">
              Go Back
            </Link>
            <div className="card">
              <h5 className="card-header">
                {track.track_name} by
                <span className="text-secondary">{track.artist_name}</span>
              </h5>

              <div className="card-body">
                <p className="card-text">{lyrics.lyrics_body}</p>
              </div>
            </div>
            <ul className="list-group mt-3">
              <li className="list-group-item">
                <strong>Album ID </strong> : {track.album_id}
              </li>

              <li className="list-group-item">
                <strong>Explicit Words</strong>
                {track.eplicit === 0 ? "No" : "Yes"}
              </li>

              <li className="list-group-item">
                <strong>Release Date </strong> :{" "}
                <Moment format="MM/DD/YYYY">{track.updated_time}</Moment>
              </li>
            </ul>
          </Fragment>
        )}
      </Fragment>
    );
  }
}

export default Lyrics;
