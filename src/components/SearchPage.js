import React from 'react';
import { data } from '../data';
import { Button } from '@mui/material';
import SearchResult from './SearchResult';
import '../css/SearchPage.css';

const SearchPage = () => {
  return (
    <div className='searchPage'>
      <div className='searchPage__info'>
        <p>62 stays • 05 december to 15 decmember • 2 guest</p>
        <h1>Stays nearby</h1>
        <Button variant='outlined'>Cancellation Flexibility</Button>
        <Button variant='outlined'>Type of place</Button>
        <Button variant='outlined'>Price</Button>
        <Button variant='outlined'>Rooms and beds</Button>
        <Button variant='outlined'>More filters</Button>
      </div>
      {data.map(({ img, location, title, description, star, price, total }) => (
        <SearchResult
          img={img}
          location={location}
          title={title}
          description={description}
          star={star}
          price={price}
          total={total}
        />
      ))}
    </div>
  );
};

export default SearchPage;
