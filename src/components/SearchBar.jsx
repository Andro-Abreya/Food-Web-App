import React, { useState } from 'react';

const ExpandableSearchBar = () => {
  const [expanded, setExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleExpandToggle = () => {
    setExpanded(!expanded);
  };

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your search logic here
    console.log('Searching for:', searchQuery);
  };

  return (
    <div className={`search-bar ${expanded ? 'expanded' : ''}`}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
      <button className="expand-button" onClick={handleExpandToggle}>
        {expanded ? 'Collapse' : 'Expand'}
      </button>
    </div>
  );
};

export default ExpandableSearchBar;
