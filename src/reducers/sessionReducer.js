import * as types from '../constants/action-types'

const defaultState = {
    authenticated: false,
    user: null
};

const sessionReducer =  (state = defaultState, action) => {
    switch(action.type) {
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                authenticated: true,
                user: action.payload
            };

        default:
            return state;
    }

};

export default sessionReducer;