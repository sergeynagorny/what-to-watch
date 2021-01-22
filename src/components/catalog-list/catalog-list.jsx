import React from "react";
import PropTypes from "prop-types";
import CatalogCard from "../catalog-card/catalog-card.jsx";

import withVideoPlayer from "../../hocs/with-video-player/with-video-player.js";
import withHover from "../../hocs/with-hover/with-hover.js";
const CatalogCardWrapped = withHover(withVideoPlayer(CatalogCard));


const CatalogList = (props) => {
  const {films, activeItem, itemClickHandler} = props;

  return (
    <div className="catalog__movies-list">

      {films.map((film) =>
        <CatalogCardWrapped
          key={film.id + film.title}
          film={film}
          itemClickHandler={itemClickHandler}
          isPlaying={film.id === activeItem}
        />
      )}

    </div>
  );
};

// class CatalogList extends PureComponent {
//   constructor(props) {
//     super(props);

//     this._catalogCardMouseEnterHandler = this._catalogCardMouseEnterHandler.bind(this);
//     this._catalogCardMouseLeaveHandler = this._catalogCardMouseLeaveHandler.bind(this);

//     this.state = {
//       activeFilmId: -1,
//     };
//   }

//   _catalogCardMouseEnterHandler(id) {
//     this._timeout = setTimeout(() => {
//       this.setState({
//         activeFilmId: id
//       });
//     }, 1000);
//   }

//   _catalogCardMouseLeaveHandler() {
//     clearTimeout(this._timeout);

//     this.setState({
//       activeFilmId: -1,
//     });
//   }

//   render() {
//     const {films} = this.props;
//     const {activeFilmId} = this.state;

//     return (
//       <div className="catalog__movies-list">

//         {films.map((film) =>
//           <CatalogCardWrapped
//             key={film.id + film.title}
//             film={film}
//             onCatalogCardMouseLeave={this._catalogCardMouseLeaveHandler}
//             onCatalogCardMouseEnter={this._catalogCardMouseEnterHandler}
//             isPlaying={film.id === activeFilmId}
//           />
//         )}

//       </div>
//     );
//   }
// }

CatalogList.propTypes = {
  films: PropTypes.array.isRequired,
  activeItem: PropTypes.number.isRequired,
  itemClickHandler: PropTypes.func.isRequired,
};

export default CatalogList;
