import { configureStore } from '@reduxjs/toolkit';
import rocketreducer from './Rockets/rocketsSlice';
import missionsReducer from './missions/missionsSlice';

const store = configureStore({
  reducer: {
    missions: missionsReducer,
    rockets: rocketreducer,
  },
});

export default store;