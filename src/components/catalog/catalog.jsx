import React from "react";
import PropTypes from "prop-types";
import CatalogGenres from "../catalog-genres/catalog-genres.jsx";
import CatalogList from "../catalog-list/catalog-list.jsx";
import AppFooter from "../app-footer/app-footer.jsx";
import withActiveItem from "../../hocs/with-active-item/with-active-item.js";

import withVideoPlayer from "../../hocs/with-video-player/with-video-player.js";
import withHover from "../../hocs/with-hover/with-hover.js";
import CatalogCard from "../catalog-card/catalog-card.jsx";
const CatalogCardWrapped = withHover(withVideoPlayer(CatalogCard));

const CatalogGenresWrapped = withActiveItem(CatalogGenres);
const CatalogListWrapped = withActiveItem(CatalogList);

const _renderCatalogButton = (onCatalogButtonClick) => {
  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button"
        onClick={() => {
          onCatalogButtonClick();
        }}
      >
        Show more
      </button>
    </div>
  );
};

const Catalog = (props) => {
  const {
    films,
    count,
    allGenres,
    activeGenre,
    onCatalogButtonClick,
    onCatalogGenresButtonClick,
  } = props;

  const filmsShown = films.slice(0, count);
  const isCatalogButtonShowing = count <= films.length;

  return (
    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <CatalogGenresWrapped
          allGenres={allGenres}
          defaultActiveItem={activeGenre}
          onCatalogGenresButtonClick={onCatalogGenresButtonClick}
        />

        {/* <div className="catalog__movies-list">

          {films.map((film) =>
            <CatalogCardWrapped
              key={film.id + film.title}
              film={film}
              itemClickHandler={itemClickHandler}
              isPlaying={film.id === activeItem}
            />
          )}

        </div> */}

        <CatalogListWrapped
          films={filmsShown}
          itemClickHandler={() => { }}
          defaultActiveItem={-1}
        />

        {isCatalogButtonShowing ? _renderCatalogButton(onCatalogButtonClick) : ``}

      </section>

      <AppFooter />

    </div>
  );
};

Catalog.propTypes = {
  films: PropTypes.array.isRequired,
  count: PropTypes.number.isRequired,
  allGenres: PropTypes.array.isRequired,
  activeGenre: PropTypes.string.isRequired,
  onCatalogButtonClick: PropTypes.func.isRequired,
  onCatalogGenresButtonClick: PropTypes.func.isRequired,
};

export default Catalog;


//   <div className="page-content">
//     <section className="catalog catalog--like-this">
//       <h2 className="catalog__title">More like this</h2>

//       <div className="catalog__movies-list">
//         <article className="small-movie-card catalog__movies-card">
//           <div className="small-movie-card__image">
//             <img src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg" alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175" />
//           </div>
//           <h3 className="small-movie-card__title">
//             <a className="small-movie-card__link" href="movie-page.html">Fantastic Beasts: The Crimes of Grindelwald</a>
//           </h3>
//         </article>
//       </div>
//     </section>

//     <footer className="page-footer">
//       <div className="logo">
//         <a href="main.html" className="logo__link logo__link--light">
//           <span className="logo__letter logo__letter--1">W</span>
//           <span className="logo__letter logo__letter--2">T</span>
//           <span className="logo__letter logo__letter--3">W</span>
//         </a>
//       </div>

//       <div className="copyright">
//         <p>© 2019 What to watch Ltd.</p>
//       </div>
//     </footer>
//   </div>

// // ===========================================================================================================

//   <div className="page-content">
//     <section className="catalog">
//       <h2 className="catalog__title visually-hidden">Catalog</h2>

//       <ul className="catalog__genres-list">
//         <li className="catalog__genres-item catalog__genres-item--active">
//           <a href="#" className="catalog__genres-link">All genres</a>
//         </li>
//         <li className="catalog__genres-item">
//           <a href="#" className="catalog__genres-link">Comedies</a>
//         </li>
//         <li className="catalog__genres-item">
//           <a href="#" className="catalog__genres-link">Crime</a>
//         </li>
//         <li className="catalog__genres-item">
//           <a href="#" className="catalog__genres-link">Documentary</a>
//         </li>
//         <li className="catalog__genres-item">
//           <a href="#" className="catalog__genres-link">Dramas</a>
//         </li>
//         <li className="catalog__genres-item">
//           <a href="#" className="catalog__genres-link">Horror</a>
//         </li>
//         <li className="catalog__genres-item">
//           <a href="#" className="catalog__genres-link">Kids & Family</a>
//         </li>
//         <li className="catalog__genres-item">
//           <a href="#" className="catalog__genres-link">Romance</a>
//         </li>
//         <li className="catalog__genres-item">
//           <a href="#" className="catalog__genres-link">Sci-Fi</a>
//         </li>
//         <li className="catalog__genres-item">
//           <a href="#" className="catalog__genres-link">Thrillers</a>
//         </li>
//       </ul>

//       <div className="catalog__movies-list">

//         <article className="small-movie-card catalog__movies-card">
//           <div className="small-movie-card__image">
//             <img src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg"
//               alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175" />
//           </div>
//           <h3 className="small-movie-card__title">
//             <a className="small-movie-card__link" href="movie-page.html">Fantastic Beasts: The Crimes of Grindelwald</a>
//           </h3>
//         </article>

//       </div>

//       <div className="catalog__more">
//         <button className="catalog__button" type="button">Show more</button>
//       </div>
//     </section>

//     <footer className="page-footer">
//       <div className="logo">
//         <a className="logo__link logo__link--light">
//           <span className="logo__letter logo__letter--1">W</span>
//           <span className="logo__letter logo__letter--2">T</span>
//           <span className="logo__letter logo__letter--3">W</span>
//         </a>
//       </div>

//       <div className="copyright">
//         <p>© 2019 What to watch Ltd.</p>
//       </div>
//     </footer>
//   </div>
