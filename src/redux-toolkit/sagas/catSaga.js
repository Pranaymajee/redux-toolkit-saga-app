import { call, put, takeEvery } from 'redux-saga/effects';
import { getCatsSuccess } from '../catState';
// import { getCatsFetch } from '../catState'; IF WE USE THIS IN THE WATCHER FUNCTION.

/* yield -> IT IS A BUILT-IN FUNCTION WHICH ALLOWS TO USE GENERATOR FUNCTIONS SEQUENTIALLY.
WHEN USED IN JAVASCRIPT, THE GENERATOR FUNCTIONS WILL ALLOW TO YIELD ALL VALUES FROM THE NESTED FUNCTIONS. */

/* call -> call IS A BLOCKING EFFECT CREATOR.
THIS MEANS THAT THE SAGA WILL NOT CONTINUE TO RUN TO THE NEXT yield UNTIL THE API CALL FINISHES. */

/* put -> ONCE call IS FINISHED, WE yield put.
put IS DISPATCHING A NEW ACTION WITH THE RESULT FROM THE PREVIOUS YIELD i.e call */

/* takeEvery -> takeEvery CALLS A GENERATOR FUNCTION(WORKER FUNCTION)
WHENEVER A DISPATCHED ACTION MATCHES THE SPECIFIED PATTERN OR TYPE INSIDE IT. */

// SAGA GENERATOR FUNCTION ALSO CALLED AS THE "WORKER FUNCTION".
function* workGetCatsFetch() {
    try{
        const responseData = yield call(() => fetch('http://api.thecatapi.com/v1/breeds'));
        const data = yield responseData.json();
        // PUTTING(SENDING) THE responseData TO THE REDUCER "getCatsSuccess()"
        yield put(getCatsSuccess(data));
    }
    catch (err) {
        console.log(err);// CATCHING ANY ERRORS.
    }
}

/* "WATCHER FUNCTION" THAT WATCHES FOR THE ACTION TYPE WHICH IS DISPATCHED.
(HERE THE ACTION IS "cats/getCatsFetch" FROM getCatsFetch ACTION) */
function* catSaga() {

    yield takeEvery("cats/getCatsFetch", workGetCatsFetch);

    /* IF WE CONSOLE LOG getCatsFetch.type, IT WILL PRINT "cats/getCatsFetch" */
    // console.log(getCatsFetch.type); 
    /* SO WE CAN ALSO WRITE
    yield takeEvery(getCatsFetch.type, workGetCatsFetch);
    */
}

export default catSaga;