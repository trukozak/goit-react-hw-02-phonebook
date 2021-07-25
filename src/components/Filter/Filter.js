import React from 'react';
import PropTypes from 'prop-types';
import { FilterStyled } from './FilterStyled';

const Filter = ({ onHandleChange }) => {
  return (
    <FilterStyled>
      <label className="labelFilter">
        Find contacts by name:
        <input
          className="inputFilter"
          type="text"
          name="filter"
          onChange={onHandleChange}
        />
      </label>
    </FilterStyled>
  );
};

Filter.propTypes = {
  onHandleChange: PropTypes.func.isRequired,
};
export default Filter;
