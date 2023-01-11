import { createSlice } from '@reduxjs/toolkit';

/* CREATING A SLICE REQUIRES A STRING NAME TO IDENTIFY THE SLICE,
AN INITIAL STATE VALUE, AND ONE OR MORE REDUCER FUNCTIONS TO DEFINE HOW THE STATE CAN BE UPDATED.
ONCE A SLICE IS CREATED, WE CAN EXPORT THE GENERATED REDUX ACTION CREATORS
AND THE REDUCER FUNCTION FOR THE WHOLE SLICE. */

export const catSlice = createSlice ({
    name: 'cats',
    // SETTING INITIAL STATES HERE.
    initialState: {
        cats: [],
        isLoading: false
    },
    reducers: {
        getCatsFetch: (state) => {
            state.isLoading = true;
        },
        getCatsSuccess: (state, action) => {
            state.cats = action.payload;
            state.isLoading = false;
        },
        getCatsFailed: (state) => {
            state.isLoading = false;
        }
    }
});

/* wE DON'T HAVE TO CREATE AN ACTION FOR EACH TASK, THAT CAN BE DONE USING catSlice.actions LIKE BELOW
(HERE, getCatsFetch, getCatsSuccess, getCatsFailed ARE THE ACTION CREATORS)*/
export const { getCatsFetch, getCatsSuccess, getCatsFailed } = catSlice.actions;

export default catSlice.reducer;