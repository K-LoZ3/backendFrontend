import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { searchRequest } from '../actions';
import '../assets/styles/components/Search.scss';

const Search = (props) => {
  const { isHome } = props;

  const inputStyle = classNames('input', {
    isHome,
  });

  const handleSearch = (event) => {
    props.searchRequest(event.target.value);
  };

  return (
    <section className='main'>
      <h2 className='main__title'>¿Qué quieres ver hoy?</h2>
      <input
        name='search'
        type='text'
        className={inputStyle}
        placeholder='Buscar...'
        onChange={handleSearch}
      />
    </section>
  );
};

const mapDispatchToProps = {
  searchRequest,
};

export default connect(null, mapDispatchToProps)(Search);
