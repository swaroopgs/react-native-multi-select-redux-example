import { UPDATE_ITEM } from '../utils/Types';

export const updateList = (item) => {
    return {
        type: UPDATE_ITEM,
        payload: item,
    };
};

