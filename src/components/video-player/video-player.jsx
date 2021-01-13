import React, {forwardRef} from "react";
import PropTypes from "prop-types";

const VideoPlayer = forwardRef((props, ref) => {
  const {film} = props;
  const {trailer, poster} = film;

  return (
    <video
      width="280" height="175"
      poster={poster}
      ref={ref}>
      <source src={trailer} />
    </video>
  );
});

VideoPlayer.propTypes = {
  film: PropTypes.object.isRequired,
};

export default VideoPlayer;
VideoPlayer.displayName = `VideoPlayer`;
