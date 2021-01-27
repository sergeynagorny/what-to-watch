import React, {PureComponent, createRef} from 'react';
import PropTypes from "prop-types";
import Video from "../../components/video/video";


const withTrailerPlayer = (Component) => {
  class WithTrailerPlayer extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isLoading: true,
        isPlaying: props.isPlaying,
      };

      this._videoRef = createRef();
    }

    componentDidMount() {
      const {src, poster} = this.props;
      const video = this._videoRef.current;

      video.src = src;
      video.poster = poster;
      video.muted = `muted`;
      video.defaultPlaybackRate = 2.0;

      video.oncanplaythrough = () => this.setState({
        isLoading: false
      });

      video.onplay = () => this.setState({
        isPlaying: true
      });
    }

    componentWillUnmount() {
      const video = this._videoRef.current;

      video.oncanplaythrough = null;
      video.onplay = null;
      video.src = ``;
    }

    componentDidUpdate() {
      const {isLoading} = this.state;
      const {isPlaying} = this.props;
      const video = this._videoRef.current;

      if (isPlaying && !isLoading) {
        video.play();
      } else {
        video.load();
      }
    }

    render() {
      return (
        <Component
          {...this.props}
        >
          <Video
            style={{
              width: 280,
              height: 170,
            }}

            ref={this._videoRef}
          />
        </Component>
      );
    }
  }

  WithTrailerPlayer.propTypes = {
    src: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    isPlaying: PropTypes.bool.isRequired,
  };

  return WithTrailerPlayer;
};

export default withTrailerPlayer;
