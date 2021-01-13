import React, {PureComponent, createRef} from 'react';
import PropTypes from "prop-types";
import VideoPlayer from "../../components/video-player/video-player.jsx";

const withActivePlayer = (Component) => {
  class WithActivePlayer extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isPlaying: props.isPlaying,
      };

      this._videoRef = createRef();
    }

    render() {
      return <Component
        {...this.props}
        renderPlayer={() => {
          return (
            <VideoPlayer
              {...this.props}
              ref={this._videoRef}
            />
          );
        }}
      />;
    }

    componentDidUpdate() {
      const video = this._videoRef.current;

      if (this.props.isPlaying) {
        video.muted = true;
        video.playbackRate = 2;
        video.play();
      } else {
        video.load();
      }
    }
  }

  WithActivePlayer.propTypes = {
    isPlaying: PropTypes.bool.isRequired,
  };

  return WithActivePlayer;
};

export default withActivePlayer;
