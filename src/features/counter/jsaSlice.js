import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  jobSafety:[],
  jobStep:[],
  Tools:[],
  R_PPE:[],
  attendence:[]
  // status: 'idle',
};

export const jsaSlice = createSlice({
  name: 'jsa',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    jobSafety: (state,action) => {
      state.jobSafety =[]
      state.jobSafety.push(action.payload)
    },
    jobStep: (state,action) => {
      state.jobStep = [];
      state.jobStep.push(action.payload)
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    Tools: (state, action) => {
      state.Tools = [];
      state.Tools.push(action.payload)
    },
    R_PPE: (state,action)=>{
      state.R_PPE = [];
      state.R_PPE.push(action.payload)
    },
    attendence: (state,action)=>{
      state.attendence = [];
      state.attendence.push(action.payload)
    }
  },
 
});

export const { jobSafety, jobStep, Tools,R_PPE,attendence } = jsaSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectJobSafety = (state) => state.jsa.jobSafety;
export const selectJobStep = (state) => state.jsa.jobStep;
export const selectTools = (state) => state.jsa.Tools;
export const selectRppe = (state) => state.jsa.R_PPE;
export const selectAttendence = (state) => state.jsa.attendence;

export default jsaSlice.reducer;
