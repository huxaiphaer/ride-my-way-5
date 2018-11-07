import ACTION_TYPE from "../../actions/actionTypes";

const RideReducer = (state = {}, action) => {
    switch (action.type) {
        case ACTION_TYPE.START_GET_RIDES:
            return {
                ...action.payload,
                ...state

            };
        default:
            return state;
    }
};

export default RideReducer;
