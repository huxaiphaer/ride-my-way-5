import ACTION_TYPE from "../../actionTypes";

export const requestLoadingAction = loading => ({

    type: ACTION_TYPE.REQUEST_LOADING,
    isRequestLoading: loading
});

