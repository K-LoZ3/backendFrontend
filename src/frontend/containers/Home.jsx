import React from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Header from '../components/Header';

import '../assets/styles/App.scss';

const Home = ({ myList, trends, originals, search }) => {
  const list = [myList, trends, originals];
  const categories = ['Mi lista', 'Tendencias', 'Originales']/* Object.keys(list) */;

  const isSearch = search.length > 0;

  return (
    <>
      <Header />
      <Search isHome />
      {isSearch ? (
        <Categories title='Resultado'>
          <Carousel>
            {search.map((item) => <CarouselItem key={item.id} {...item} />)}
          </Carousel>
        </Categories>
      ) :
        categories.map((categorie, i) => list[i]?.length > 0 && (
          <Categories key={i} title={categorie}>
            <Carousel>
              {list[i].map((item) => (categorie === 'Mi lista' ?
                <CarouselItem key={item.id} {...item} /> :
                <CarouselItem key={item.id} {...item} isList />))}
            </Carousel>
          </Categories>
        ))}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
    search: state.search,
  };
};

export default connect(mapStateToProps, null)(Home);
