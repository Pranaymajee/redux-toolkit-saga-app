// THIS IS THE ROOT SAGA FILE
import { all } from 'redux-saga/effects';
import catSaga from './catSaga';

/* yield all -> IT INFORMS THE READER THAT WE'RE YIELDING MORE THAN 1 EFFECT. */

export default function* rootSaga() {
    yield all([
        catSaga(), // CALLING THE RESPECTIVE SAGA WATCHER FUNCTION.
        //CALL ALL WATCHER SAGA FUNCTIONS HERE ONE BY ONE
    ])
}