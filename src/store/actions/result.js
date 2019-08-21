import * as actionTypes from './actionTypes';

export const saveResult = ( res ) =>{
   // const updatedResult = res * 2; DON'T update state here the recomended way is to do it in the reducer
    return {
        type: actionTypes.STORE_RESULT,
        result: res
    };
}

export const storeResult = (res) => {
    return (dispatch, getState) => {
        setTimeout( () => {
            // You can access state here but it's best to send it over params instead. 
            // const oldCounter = getState().ctr.counter;
            // console.log(oldCounter)
            dispatch(saveResult(res))
        },2000);
    }

};

export const deleteResult = (resElId) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultElId: resElId
    };
};