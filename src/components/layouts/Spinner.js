import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/core";
const Spinner = (props) => {
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

  return (
    <div className="sweet-loading">
      <ClipLoader
        css={override}
        size={50}
        color={"#123abc"}
        loading={props.loading}
      />
    </div>
  );
};

export default Spinner;
