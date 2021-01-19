import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import CatalogCard from "../catalog-card/catalog-card.jsx";
import withVideoPlayer from "../../hocs/with-video-player/with-video-player.js";


const CatalogCardWrapped = withVideoPlayer(CatalogCard);
class CatalogList extends PureComponent {
  constructor(props) {
    super(props);

    this._catalogCardMouseEnterHandler = this._catalogCardMouseEnterHandler.bind(this);
    this._catalogCardMouseLeaveHandler = this._catalogCardMouseLeaveHandler.bind(this);

    this.state = {
      activeFilmId: -1,
    };
  }

  _catalogCardMouseEnterHandler(id) {
    this._timeout = setTimeout(() => {
      this.setState({
        activeFilmId: id
      });
    }, 1000);
  }

  _catalogCardMouseLeaveHandler() {
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
          <CatalogCardWrapped
            key={film.id + film.title}
            film={film}
            onCatalogCardMouseLeave={this._catalogCardMouseLeaveHandler}
            onCatalogCardMouseEnter={this._catalogCardMouseEnterHandler}
            isPlaying={film.id === activeFilmId}
          />
        )}

      </div>
    );
  }
}

CatalogList.propTypes = {
  films: PropTypes.array.isRequired,
};

export default CatalogList;
