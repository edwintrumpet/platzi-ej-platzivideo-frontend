import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';

const Home = ({ mylist, trends, originals, searchText }) => {
  const regex = new RegExp(`.*${searchText.toLowerCase()}.*`);

  return (
    <>
      <Search isHome />
      {
        searchText && (
          <Categories title='Resultados de la búsqueda'>
            <Carousel>
              {
                trends.filter((item) => regex.test(item.title.toLowerCase()))
                  .map((item) => (
                    <CarouselItem key={item.id} {...item} />
                  ))
              }
              {
                originals.filter((item) => regex.test(item.title.toLowerCase()))
                  .map((item) => (
                    <CarouselItem key={item.id} {...item} />
                  ))
              }
            </Carousel>
          </Categories>
        )
      }
      {
        mylist.length > 0 && (
          <Categories title='Mi lista'>
            <Carousel>
              {
                mylist.map((item) => (
                  <CarouselItem key={item.id} {...item} isMylist />
                ))
              }
            </Carousel>
          </Categories>
        )
      }
      {
        trends.length > 0 && (
          <Categories title='Tendencias'>
            <Carousel>
              {
                trends.map((item) => (
                  <CarouselItem key={item.id} {...item} />
                ))
              }
            </Carousel>
          </Categories>
        )
      }
      {
        originals.length > 0 && (
          <Categories title='Originales de PlatziVideo'>
            <Carousel>
              {
                originals.map((item) => (
                  <CarouselItem key={item.id} {...item} />
                ))
              }
            </Carousel>
          </Categories>
        )
      }
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    mylist: state.mylist,
    trends: state.trends,
    originals: state.originals,
    searchText: state.searchText,
  };
};

Home.propTypes = {
  mylist: PropTypes.array.isRequired,
  trends: PropTypes.array.isRequired,
  originals: PropTypes.array.isRequired,
  searchText: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Home);
