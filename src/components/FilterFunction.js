import React from 'react'

const FilterFunction = ({ filters, handleChange }) => {
  return (
    <div className="filter-container">
      <input type="text" name="searchTerm" placeholder='Search...' value={filters.searchTerm} onChange={handleChange} />
    </div>
  )
}

export default FilterFunction