import { configureStore } from '@reduxjs/toolkit';
import jobHeaderReducer from '../features/counter/jobHeaderSlice';
import equimentReducer from '../features/counter/equipmentSlice'
import jsaReducer from '../features/counter/jsaSlice'

export const store = configureStore({
  reducer: {
    jobHeader: jobHeaderReducer,
    equipment: equimentReducer,
    jsa:jsaReducer

  },
});

