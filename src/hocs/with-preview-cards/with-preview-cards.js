import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import PreviewCard from "../../components/preview-card/preview-card";


const withPreviewCards = (Component) => {
  class WithPreviewCards extends PureComponent {
    constructor(props) {
      super(props);

      this._previewCardMouseEnterHandler = this._previewCardMouseEnterHandler.bind(this);
      this._previewCardMouseLeaveHandler = this._previewCardMouseLeaveHandler.bind(this);
    }

    _previewCardMouseEnterHandler(callback) {
      return (id) => {
        this._timeout = setTimeout(() => {
          callback(id);
        }, 1000);
      };
    }

    _previewCardMouseLeaveHandler(callback) {
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
            const {id, title, image: {preview}, src: {trailer}} = film;

            return (
              <PreviewCard
                key={`${id} + ${title}`}

                id={id}
                title={title}

                isPlaying={id === activeItem}
                onPreviewCardMouseEnter={this._previewCardMouseEnterHandler(itemClickHandler)}
                onPreviewCardMouseLeave={this._previewCardMouseLeaveHandler(itemClickHandler)}

                src={trailer}
                poster={preview}
              />
            );
          })}
        </Component>
      );
    }
  }

  WithPreviewCards.propTypes = {
    films: PropTypes.array.isRequired,
    activeItem: PropTypes.number.isRequired,
    itemClickHandler: PropTypes.func.isRequired,
  };

  return WithPreviewCards;
};

export default withPreviewCards;
