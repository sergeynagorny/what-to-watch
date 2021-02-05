import React, {PureComponent, createRef} from 'react';
import PropTypes from "prop-types";
import Video from "../../components/video/video";


const withMoviePlayer = (Component) => {
  class WithMoviePlayer extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        progress: 0,
        duration: 0,
        isLoading: true,
        isPlaying: false,
        isEnded: false,
      };

      this._videoRef = createRef();
    }

    componentDidMount() {
      const {film} = this.props;
      const {src: {movie}, background: {image}} = film;
      const video = this._videoRef.current;

      video.src = movie;
      video.poster = image;

      video.oncanplaythrough = () => this.setState({
        isLoading: false,
        isPlaying: true
      });

      video.onplay = () => this.setState({
        isPlaying: true
      });

      video.onended = () => this.setState({
        isEnded: true
      });

      video.onpause = () => this.setState({
        isPlaying: false
      });

      video.onloadedmetadata = () => this.setState({
        duration: Math.floor(video.duration),
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
      video.onended = null;
      video.onloadedmetadata = null;
      video.src = ``;
    }

    componentDidUpdate() {
      const {isLoading, isPlaying} = this.state;
      const video = this._videoRef.current;


      if (isPlaying && !isLoading) {
        video.play();
      } else {
        video.pause();
      }
    }

    _onPlayButtonClick(isPlaying) {
      return () => {
        this.setState({isPlaying: !isPlaying});
      };
    }

    _onFullScreenButtonClick() {
      const video = this._videoRef.current;

      return () => {
        video.requestFullscreen();
      };
    }

    render() {
      const {isLoading, isPlaying, duration, progress} = this.state;

      return (
        <Component
          {...this.props}
          isLoading={isLoading}
          isPlaying={isPlaying}
          duration={duration}
          progress={progress}
          onPlayButtonClick={this._onPlayButtonClick(isPlaying)}
          onFullScreenButtonClick={this._onFullScreenButtonClick()}
        >
          <Video
            className={`player__video`}
            ref={this._videoRef}
          />
        </Component>
      );
    }
  }

  WithMoviePlayer.propTypes = {
    film: PropTypes.object.isRequired,
  };

  return WithMoviePlayer;
};

export default withMoviePlayer;
