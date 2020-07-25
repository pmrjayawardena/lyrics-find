import React, { Component, Fragment } from "react";
import Spinner from "../layouts/Spinner";
import Track from "../tracks/Track";
import { Consumer } from "../../context";
class Tracks extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { track_list, heading } = value;
          if (track_list === undefined || track_list.length === 0) {
            return <Spinner loading={true} />;
          } else {
            return (
              <Fragment>
                <h3 className="text-center mb-4">{heading}</h3>
                <div className="row">
                  {track_list.map((item) => {
                    return (
                      <Track
                        key={item.track.track_id}
                        single_track={item.track}
                      />
                    );
                  })}
                </div>
              </Fragment>
            );
          }
        }}
      </Consumer>
    );
  }
}

export default Tracks;
