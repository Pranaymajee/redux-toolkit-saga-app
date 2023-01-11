import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import catsReducer from './catState';
import rootSaga from './sagas';

// CREATING A MIDDLEWARE USING THE FACTORY FUNCTION createSagaMiddleware EXPORTED BY THE REDUX-SAGA LIBRARY.
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        //catsReducer IS BASICALLY THE ROOTREDUCER
        cats: catsReducer // cats IS THE NAME VALUE IN catState.js
    },
    middleware: [sagaMiddleware]
});
sagaMiddleware.run(rootSaga);

export default store;