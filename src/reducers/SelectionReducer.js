import { UPDATE_ITEM } from '../utils/Types';
import { cityList } from '../utils/Data';

const INITIAL_STATE = {
    cityList: cityList
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UPDATE_ITEM:
            return {
                ...state,
                cityList: state.cityList.map(
                    (cityList) => cityList.id === action.payload.id ? { ...cityList, check: action.payload.check }
                        : cityList
                )
            }
            return INITIAL_STATE;
        default:
            return state;
    }
}