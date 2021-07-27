import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { fetchCount } from './counterAPI';

const initialState = {
  jobHeader:[],
  specification1:[],
  specification12:[],
  methodTouse:[]
  // status: 'idle',
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const jobHeaderSlice = createSlice({
  name: 'jobHeader',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    jobHeader: (state,action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.jobHeader =[]
      state.jobHeader.push(action.payload)
    },
    specification1: (state,action) => {
      state.specification1 = [];
      state.specification1.push(action.payload)
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    specification12: (state, action) => {
      state.specification12 = [];
      state.specification12.push(action.payload)
    },
    methodTouse: (state,action)=>{
      state.methodTouse = [];
      state.methodTouse.push(action.payload)
    }
  },
 
});

export const { jobHeader, specification1, specification12,methodTouse } = jobHeaderSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectJobHeader = (state) => state.jobHeader.jobHeader;
export const selectS1 = (state) => state.jobHeader.specification1;
export const selectS2 = (state) => state.jobHeader.specification12;
export const selectMethoduse = (state) => state.jobHeader.methodTouse;





export default jobHeaderSlice.reducer;
