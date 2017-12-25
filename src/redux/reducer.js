import {combineReducers} from 'redux'
import iframeReducer, {moduleName as ifameModule} from '../redux/ducks/app'

// import the root reducer


export default combineReducers({
  [ifameModule]: iframeReducer,
})