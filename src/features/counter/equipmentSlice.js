import {createSlice } from '@reduxjs/toolkit';
// import { fetchCount } from './counterAPI';

const initialState = {
  equipment:[],
  // status: 'idle',
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const equipmentSlice = createSlice({
  name: 'equipment',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    equipment: (state,action) => {
      state.equipment = []
      state.equipment.push(action.payload)
    },
    
}
});

export const { equipment } = equipmentSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectEquipment = (state) => state.equipment.equipment;

export default equipmentSlice.reducer;
