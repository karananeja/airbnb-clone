import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExpandMore, Language, Search } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import '../css/Header.css';

const Header = () => {
  const [inputSearch, setInputSearch] = useState('');

  const searchInput = () => {
    setInputSearch('');
  };

  return (
    <div className='header'>
      <Link to='/'>
        <img
          src='https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png'
          alt='header logo'
          className='header__icon'
        />
      </Link>

      <div className='header__center'>
        <input
          type='text'
          placeholder='Search'
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
        />
        <Link to={`/${inputSearch}`}>
          <Search className='header__inputButton' onClick={searchInput} />
        </Link>
      </div>
      <div className='header__right'>
        <p>Become a host</p>
        <Language />
        <ExpandMore />
        <Avatar />
      </div>
    </div>
  );
};

export default Header;
