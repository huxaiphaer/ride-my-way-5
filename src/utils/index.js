export const APP_TOKEN ='SET_TOKEN';
export const IS_LOGGED_IN ='IS_LOGGED_IN';
export const IS_LOGGED_OUT ='IS_LOGGED_OUT';

export const saveToken =(token) =>{
    localStorage.setItem(APP_TOKEN, token);
}

export const  getToken = ()=>{
    localStorage.getItem(APP_TOKEN)
}

export const saveLogged =(logged) =>{
    localStorage.setItem(IS_LOGGED_IN, logged);
}

export const getisLoggedIn =() =>{

    localStorage.getItem(IS_LOGGED_IN)
}

export const logOut =(log) =>{
    localStorage.setItem(IS_LOGGED_OUT, log);

}

export const isLoggedOut =() =>{
    localStorage.setItem(IS_LOGGED_OUT);

}
