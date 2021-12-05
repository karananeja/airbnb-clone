import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { DateRangePicker } from 'react-date-range';
import { People } from '@mui/icons-material';
import { Button } from '@mui/material';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import '../css/Search.css';

const Search = () => {
  const history = useHistory();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  return (
    <div className='search'>
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
      <h2>
        Number of guests <People />
      </h2>
      <input min={0} defaultValue={2} type='number' />
      <Button onClick={() => history.push('/search')}>Search Airbnb</Button>
    </div>
  );
};

export default Search;
