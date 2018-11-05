import ACTION_TYPE from "../actions/actionTypes";

const initialState ={
    isRequestLoading: false
};

export const requestLoadingReducer =(state=initialState, action) =>{

    switch (action.type) {
        case ACTION_TYPE.REQUEST_LOADING:
            return {...state, isRequestLoading: action.isRequestLoading};

        default:
            return state;

    }
};
