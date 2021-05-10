import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './../features/Counter/counterSlice';

const rootReducer = {
  count: counterReducer, // useSelector sẽ lấy state ở đây.
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
