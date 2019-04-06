export const LOGOUT = "LOGOUT";

// с выходом всё проще, т.к. он не делает запросов.
export const logout = () => {
    return dispatch => {
        // удаляется auth-token из localStorage при выходе
        localStorage.removeItem('auth-token');
        let a = localStorage.getItem('auth-token');
        console.log(a, 'auth-token remove');
        dispatch({type: LOGOUT});
    };
};