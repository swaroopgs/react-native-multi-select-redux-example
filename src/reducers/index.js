import { combineReducers } from 'redux';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
    selectionData : SelectionReducer,
    //combine if more reducers are configured
});