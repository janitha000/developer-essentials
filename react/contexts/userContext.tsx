import React, { createContext, useReducer } from "react";

const iniialState: LoginState = {
    username: "",
    password: "",
    loading: false,
    variant: "login",
    isLoggedIn: false
}

interface IUserContextProps {

    state: LoginState;
    dispatch: (action: LoginAction) => void;
}


export const UserContext = createContext({} as IUserContextProps)

const loginReducer = (state: LoginState, action: LoginAction) => {
    switch (action.type) {
        case 'login':
            return {
                ...state,
                loading: true,
            }
        case 'loggedIn':
            return {
                ...state,
                loading: false,
                username: action.payload,
                isLoggeIn: true
            }
        case 'error':
            return {
                ...state,
                loading: false,
                isLoggedIn: false
            }
        case 'reset':
            return {
                ...state,
                username: action.payload
            }
    }
    return state;
}



interface LoginState {
    username: string,
    password: string,
    loading: boolean,
    isLoggedIn: boolean,
    variant: "login" | "register"
}

type LoginAction = | { type: "login" | "error" } | { type: "field" | "loggedIn" | "reset", payload: string }



export const UserContextProvider = ({ children }: any) => {
    const [state, dispatch] = useReducer(loginReducer, iniialState)
    return <UserContext.Provider value={{ state, dispatch }}>{children}</UserContext.Provider>
}

//const { state, dispatch } = useContext(UserContext)

//const { username } = state;

// dispatch({ type: 'login' })
// let result = await login({ username, password })
// console.log(result);
// dispatch({ type: 'loggedIn', payload: username as string })