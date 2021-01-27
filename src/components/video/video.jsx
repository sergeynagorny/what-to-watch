import React, {forwardRef} from "react";
import PropTypes from "prop-types";


const Video = forwardRef((props, ref) => {
  const {style, className} = props;

  return (
    <video
      className={className || ``}
      style={style}

      ref={ref}
    />
  );
});

Video.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

Video.displayName = `Video`;

export default Video;
