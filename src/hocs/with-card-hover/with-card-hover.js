import React, {PureComponent} from "react";
import PropTypes from "prop-types";

// const CatalogCardWrapped = withTrailerPlayer(CatalogCard);

import CatalogCard from "../../components/catalog-card/catalog-card";
import withTrailerPlayer from "../../hocs/with-trailer-player/with-trailer-player";
const CatalogCardWrapperd = withTrailerPlayer(CatalogCard);


const withCardHover = (Component) => {
  class WithCardHover extends PureComponent {
    constructor(props) {
      super(props);

      this._catalogCardMouseEnterHandler = this._catalogCardMouseEnterHandler.bind(this);
      this._catalogCardMouseLeaveHandler = this._catalogCardMouseLeaveHandler.bind(this);
    }

    _catalogCardMouseEnterHandler(callback) {
      return (id) => {
        this._timeout = setTimeout(() => {
          callback(id);
        }, 1000);
      };
    }

    _catalogCardMouseLeaveHandler(callback) {
      return () => {
        clearTimeout(this._timeout);
        callback(-1);
      };
    }

    render() {
      const {films, activeItem, itemClickHandler} = this.props;

      return (
        <Component
          {...this.props}
        >
          {films.map((film) => {
            const {id, title, poster, trailer} = film;

            return (
              <CatalogCardWrapperd
                key={id + title}

                id={id}
                title={title}

                isPlaying={id === activeItem}
                onCatalogCardMouseEnter={this._catalogCardMouseEnterHandler(itemClickHandler)}
                onCatalogCardMouseLeave={this._catalogCardMouseLeaveHandler(itemClickHandler)}

                src={trailer}
                poster={poster}
              />
            );
          })}
        </Component>
      );
    }
  }

  WithCardHover.propTypes = {
    films: PropTypes.array.isRequired,
    activeItem: PropTypes.number.isRequired,
    itemClickHandler: PropTypes.func.isRequired,
  };

  return WithCardHover;
};

export default withCardHover;
