import React, { useState } from 'react';

import styled from 'styled-components';
import ItemList from './ItemList';
const Tab = styled.button`
  font-size: 16px;
  padding: 10px 30px;
  cursor: pointer;
  opacity: 0.6;
  background: white;
  border: 0;
  outline: 0;
  ${({ active }) =>
    active &&
    `
    border-bottom: 2px solid black;
    opacity: 1;
  `}
`;
const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const types = ['Cereals', 'Pulses', 'Vegetables','Fish','Beef','Chicken', 'Spices', 'Milk&Milk Products','Oil','Others'];
function TabGroup() {
  const [active, setActive] = useState(types[0]);
  return (
    <>
      <ButtonGroup className='ease-in-out duration-900'>
        {types.map(type => (
          <Tab
            key={type}
            active={active === type}
            onClick={() => setActive(type)}
          >
            {type}
          </Tab>
        ))}
      </ButtonGroup>
      <p />
     
      <div>
        <ItemList/>
      </div>
    </>
  );
}

export default TabGroup;
