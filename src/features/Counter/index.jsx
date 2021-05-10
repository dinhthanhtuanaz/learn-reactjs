import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { increase } from './counterSlice';

CounterFeature.propTypes = {};

function CounterFeature(props) {
  console.log('CounterFeature');
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);

  const handleIncreaseClick = () => {
    const action = increase(); // action creator
    dispatch(action);
  };
  return (
    <div>
      Counter Feature
      <p>Counte: {count}</p>
      <div>
        <button onClick={handleIncreaseClick}>Increase (+)</button>
        <button>Decrease (-)</button>
      </div>
    </div>
  );
}

export default CounterFeature;
