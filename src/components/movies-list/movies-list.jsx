import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import MovieCard from "../movie-card/movie-card";

import withVideoPlayer from "../../hocs/with-video-player/with-video-player.js";
const MovieCardWrapped = withVideoPlayer(MovieCard);

class MoviesList extends PureComponent {
  constructor(props) {
    super(props);

    this._movieCardMouseEnterHandler = this._movieCardMouseEnterHandler.bind(this);
    this._movieCardMouseLeaveHandler = this._movieCardMouseLeaveHandler.bind(this);

    this.state = {
      activeFilmId: -1,
    };
  }

  _movieCardMouseEnterHandler(id) {
    this._timeout = setTimeout(() => {
      this.setState({
        activeFilmId: id
      });
    }, 1000);
  }

  _movieCardMouseLeaveHandler() {
    clearTimeout(this._timeout);

    this.setState({
      activeFilmId: -1,
    });
  }

  render() {
    const {films} = this.props;
    const {activeFilmId} = this.state;

    return (
      <div className="catalog__movies-list">

        {films.map((film) =>
          <MovieCardWrapped
            key={film.id + film.title}
            film={film}
            onMovieCardMouseLeave={this._movieCardMouseLeaveHandler}
            onMovieCardMouseEnter={this._movieCardMouseEnterHandler}
            isPlaying={film.id === activeFilmId}
          />
        )}

      </div>
    );
  }
}


MoviesList.propTypes = {
  films: PropTypes.array.isRequired,
};

export default MoviesList;

// $(`#thumbs div`).mouseenter(function () {
//   let that = this;
//   timer = setTimeout(function () {
//     $(`#thumbs div`).removeClass(`hovered`);
//     $(that).addClass(`hovered`);
//   }, 1000);
// }).mouseleave(function () {
//   clearTimeout(timer);
// });
