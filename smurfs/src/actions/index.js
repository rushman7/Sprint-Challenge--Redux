import axios from 'axios';

export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';
export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const UPDATING_SMURFS = 'UPDATING_SMURFS';
export const DELETING_SMURF = 'DELETING_SMURF';
export const ADDING_SMURF = 'ADDING_SMURF';

export const getSmurf = () => {
  const promise = axios.get('http://localhost:3333/smurfs')
  return dispatch => {
    dispatch({ type: FETCHING_SMURFS })
    promise.then(response => {
      dispatch({
        type: SUCCESS,
        payload: response.data
      })
    })
    .catch(err => {
      dispatch({
        type: ERROR,
        payload: err
      })
    })
  }
}

export const addSmurf = smurf => {
  const promise = axios.post('http://localhost:3333/smurfs', smurf)
  return dispatch => {
    dispatch({ type: ADDING_SMURF })
    promise.then(response => {
      dispatch({
        type: SUCCESS,
        payload: response.data
      })
    })
    .catch(err => {
      dispatch({
        type: ERROR,
        payload: err
      })
    })
  }
}

export const updateSmurf = smurf => {
  const promise = axios.put(`http://localhost:3333/smurfs/${smurf.id}`, smurf)
  return dispatch => {
    dispatch({ type: UPDATING_SMURFS })
    promise.then(response => {
      dispatch({
        type: SUCCESS,
        payload: response.data
      })
    })
    .catch(err => {
      dispatch({
        type: ERROR,
        payload: err
      })
    })
  }
}

export const deleteSmurf = smurfID => {
  const promise = axios.delete(`http://localhost:3333/smurfs/${smurfID}`)
  return dispatch => {
    dispatch({ type: DELETING_SMURF })
    promise.then(response => {
      dispatch({
        type: SUCCESS,
        payload: response.data
      })
    })
    .catch(err => {
      dispatch({
        type: ERROR,
        payload: err
      })
    })
  }
}

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
