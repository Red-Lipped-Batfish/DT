import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Info from './display/Info';
import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regStar } from '@fortawesome/free-regular-svg-icons';

const Window = (props) => {
  // props.country={current.countryData} props.addFavorite={setFavorites} />
  return (
    <div id="window">
      <div id="country-name">{props.country.name}</div>
      <img className="country-flag" src={props.country.flag} />
      <Info countryData={props.country} />
      <a id="wiki" href={`https://en.wikipedia.org/wiki/${props.country.name}`}>
        Read more on wiki!
      </a>
    </div>
  );
};

export default Window;
