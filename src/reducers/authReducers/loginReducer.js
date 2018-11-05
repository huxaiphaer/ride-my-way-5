import ACTION_TYPE from "../../actions/actionTypes";

const initialState = {
    visible: false,
    responseData: {},
    errorMessage: {}
};
const Loginreducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPE.LOGIN_START:
            return {
                ...state,
                loader: true
            };
        case ACTION_TYPE.LOGIN_FINISHED:
            return {
                ...state,
                loader: false
            };
        default:
            return state;
    }
};

export default Loginreducer;
