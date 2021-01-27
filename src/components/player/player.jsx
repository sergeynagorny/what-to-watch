import React from "react";
import PropTypes from "prop-types";


const PlayerIcon = {
  PLAY: `#play-s`,
  PAUSE: `#pause`,
};

const convertSecondToDuration = (seconds) => {
  const duration = new Date(seconds * 1000);

  if (duration.getUTCHours() === 0) {
    return duration.toISOString().substr(15, 4);
  } else {
    return duration.toISOString().substr(12, 7);
  }
};

const convertProgressToBar = (progress, duration) => {
  return Math.floor((progress / duration) * 100) || 0;
};

const Player = (props) => {
  const {
    title,
    duration,
    progress,
    isLoading,
    isPlaying,
    children,
    onPlayButtonClick,
    onFullScreenButtonClick,
  } = props;

  const progressBar = convertProgressToBar(progress, duration);

  return (
    <div className="player">
      {children}
      <button type="button" className="player__exit">Exit</button>
      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={progressBar} max={100} />
            <div className="player__toggler"
              style={{
                left: `${progressBar}%`,
              }}
            >
              Toggler
            </div>
          </div>
          <div className="player__time-value">{convertSecondToDuration(progress)}/{convertSecondToDuration(duration)}</div>
        </div>
        <div className="player__controls-row">
          <button type="button" className="player__play"
            onClick={onPlayButtonClick}
            disabled={isLoading}
          >
            <svg viewBox="0 0 19 19" width={19} height={19}>
              <use xlinkHref={isPlaying ? PlayerIcon.PAUSE : PlayerIcon.PLAY} />
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">{title}</div>
          <button type="button" className="player__full-screen"
            onClick={onFullScreenButtonClick}
          >
            <svg viewBox="0 0 27 27" width={27} height={27}>
              <use xlinkHref="#full-screen" />
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

Player.propTypes = {
  title: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  progress: PropTypes.number.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
  onFullScreenButtonClick: PropTypes.func.isRequired,
};

export default Player;
