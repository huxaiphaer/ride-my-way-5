import ACTION_TYPE from "../../actions/actionTypes";

const RideReducer = (state = {rides: []}, action) => {
    switch (action.type) {
        case ACTION_TYPE.START_GET_RIDES:
            return {
                ...state,
                rides: action.payload

            };
        default:
            return state;
    }
};

export default RideReducer;
