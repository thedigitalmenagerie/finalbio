/* eslint-disable arrow-body-style */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Carousel,
  Inner,
  Item,
  Indicators,
  Button
} from './CarouselElements';

export const CarouselItem = ({ children, width }) => (
      <Item style={{ width }}>
          {children}
      </Item>
);

const CarouselContainer = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = React.Children.count(children) - 1;
    }
    setActiveIndex(newIndex);
  };
  return (
        <Carousel>
            <Inner style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                {React.Children.map(children, (child, index) => {
                  return React.cloneElement(child, { width: '100%' });
                })}
            </Inner>
            <Indicators>
                <Button onClick={() => { updateIndex(activeIndex - 1); }}>PREV</Button>
                <Button onClick={() => { updateIndex(activeIndex + 1); }}>NEXT</Button>
            </Indicators>
        </Carousel>
  );
};

CarouselItem.propTypes = {
  children: PropTypes.any,
  width: PropTypes.any,
};

CarouselContainer.propTypes = {
  children: PropTypes.any,
};

export default CarouselContainer;
