import React, {createRef, PureComponent} from "react";
import PropTypes from "prop-types";


class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      progress: 0,
      isLoading: true,
      isPlaying: props.isPlaying,
    };

    this._videoRef = createRef();
  }

  componentDidMount() {
    const {film} = this.props;
    const {trailer} = film;
    const video = this._videoRef.current;

    video.src = trailer;

    video.oncanplaythrough = () => this.setState({
      isLoading: false
    });

    video.onplay = () => this.setState({
      isPlaying: true
    });

    video.onpause = () => this.setState({
      isPlaying: false
    });

    video.ontimeupdate = () => this.setState({
      progress: Math.floor(video.currentTime),
    });
  }

  componentWillUnmount() {
    const video = this._videoRef.current;

    video.oncanplaythrough = null;
    video.onplay = null;
    video.onpause = null;
    video.ontimeupdate = null;
    video.src = ``;
  }

  componentDidUpdate() {
    const video = this._videoRef.current;

    if (this.props.isPlaying) {
      video.play();
    } else {
      video.pause();
      video.load();
    }
  }

  render() {
    const {film} = this.props;
    const {trailer, poster} = film;

    return (
      <video
        muted="muted"
        width="280" height="175"
        poster={poster}
        ref={this._videoRef}
        src={trailer}>
      </video>
    );
  }
}

VideoPlayer.propTypes = {
  film: PropTypes.object.isRequired,
  isPlaying: PropTypes.bool.isRequired,
};

export default VideoPlayer;
