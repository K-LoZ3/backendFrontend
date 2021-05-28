import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { favoriteRequest, deleteFavoriteRequest } from '../actions';
import '../assets/styles/components/CarouselItem.scss';

import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';
import removeIcon from '../assets/static/remove-icon.png';

const CarouselItem = (props) => {
  const { _id, id, cover, title, year, contentRating, duration, isList, user, myList } = props;
  const handleSetFavorite = () => {
    // Revisamos la lista de favoritos.
    // Buscamos en esta si ya esta el item que vamos a agregar.
    const exist = myList.find((item) => item.id === id);

    // Si este no existe agregamos a la lista y creamos la userMovie en la DB.
    if (!exist) {
      props.favoriteRequest({
        _id, id, cover, title, year, contentRating, duration,
      }, user);
    } // TODO: Poner aviso de que ya esta en favoritos.
    
  };
  const handleDeleteFavorite = (itemId) => {
    console.log(props);
    props.deleteFavoriteRequest(_id, itemId);
  };
  /*
      Otra forma puede ser asi, no estoy seguro de si es segura pero esta.
      const handleDeleteFavorite = () => {
         props.deleteFavorite(id);
      };
      // ...
      onClick={handleDeleteFavorite}
   */
  return (
    <div className='carousel-item'>
      <img className='carousel-item__img' src={cover} alt={title} />
      <div className='carousel-item__details'>
        <div>
          <Link to={`/player/${id}`}>
            <img
              className='carousel-item__details--img'
              src={playIcon}
              alt='Play Icon'
            />
          </Link>
          {isList ? (
            <img
              className='carousel-item__details--img'
              src={plusIcon}
              alt='Plus Icon'
              onClick={handleSetFavorite}
            />
          ) : (
            <img
              className='carousel-item__details--img'
              src={removeIcon}
              alt='Remove Icon'
              onClick={() => handleDeleteFavorite(id)}
            />
          )}
        </div>
        <p className='carousel-item__details--title'>{title}</p>
        <p className='carousel-item__details--subtitle'>
          {`${year} ${contentRating} ${duration} minutos`}
        </p>
      </div>
    </div>
  );
};

CarouselItem.propTypes = {
  id: PropTypes.number.isRequired,
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  contentRating: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  isList: PropTypes.bool,
  favoriteRequest: PropTypes.func,
  deleteFavoriteRequest: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    myList: state.myList,
    user: state.user,
  };
};

const mapDispatchToProps = {
  favoriteRequest,
  deleteFavoriteRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(CarouselItem);
