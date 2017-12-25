import {appName} from '../../config'
import {createSelector} from 'reselect'

/**
 * Constants
 * */
export const moduleName = 'iframeApp'
const prefix = `${appName}/${moduleName}`

export const FORM_SUBMIT = `${prefix}/FORM_SUBMIT`


/**
 * Reducer
 * */

export const AppState = {
  inputContent: ''
}


export default function reducer(state = AppState, action) {
  const {type, payload} = action

  switch (type) {
    case FORM_SUBMIT:
      return {
        inputContent: payload
      };

    default:
      return state
  }
}

/**
 * Selectors
 * */

export const stateSelector = state => state[moduleName]
export const inputContentSelector = createSelector(stateSelector, state => state.inputContent)

/**
 * Action Creators
 * */

export const formSubmit = (content) => ({
  type: FORM_SUBMIT,
  payload: content
});



/**
 * Sagas
 **/



