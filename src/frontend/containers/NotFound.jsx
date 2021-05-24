import React from 'react';
import '../assets/styles/components/NoFound.scss';
import { Link } from 'react-router-dom';

const NotFonud = () => (
  <section className='error'>
    <div className='error__main'>
      <h1 className='animate__pulse'>404</h1>
      <label>Pagina no encontrada</label>
      <Link to='/'>
        <button className='btn-back-home' type='button'>Regresa al Home</button>
        {' '}
      </Link>
    </div>
  </section>
);

export default NotFonud;
