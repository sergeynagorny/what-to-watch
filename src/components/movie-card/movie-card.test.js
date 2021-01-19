import React from "react";
import renderer from "react-test-renderer";
import MovieCard from "./movie-card.jsx";
import {MovieCardType} from "../../const.js";

const mock = {
  film: {
    id: 1,
    title: `The Grand Budapest Hotel`,
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    description: [`In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&apos;s friend and protege.`, `Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`],
    director: [`Wes Andreson`],
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`, `Tony Revoloru`, `Tilda Swinton`, `Tom Wilkinson`],
    rating: {
      score: 8.9,
      count: 240,
    },
    background: {
      image: `img/bg-the-grand-budapest-hotel.jpg`,
      color: `#E1B0B2`,
    },
    genre: [`Comedy`],
    released: new Date(`2014-2-6`),
    runtime: 112,
  },
  reviews: [
    {
      author: `Kate Muir`,
      score: 8.9,
      description: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
      date: new Date(`December 24, 2016`),
    },
    {
      author: `Matthew Lickona`,
      score: 7.2,
      description: `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`,
      date: new Date(`December 20, 2016`),
    }
  ],
};

describe(`Should MovieCard render correctly`, () => {
  const {film, reviews} = mock;

  it(`with type MovieCardType.FULL`, () => {
    const tree = renderer.create(
        <MovieCard
          type={MovieCardType.FULL}
          film={film}
          reviews={reviews}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`with type MovieCardType.PREVIEW`, () => {
    const tree = renderer.create(
        <MovieCard
          type={MovieCardType.PREVIEW}
          film={film}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

});

