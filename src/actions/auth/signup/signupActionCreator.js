import ACTION_TYPE from '../../actionTypes';

const SignupActionCreator = (response) => ({
    'visible': false

});

export const messageRegistration = (message) => ({
    'type': ACTION_TYPE.MESSAGE,
    'message': message
});

export default SignupActionCreator;
