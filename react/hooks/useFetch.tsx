import { useEffect, useReducer, useState } from "react";

export interface userFetchProps {
    url: string
}

type FetchAcions = | { type: "loading" | "error" } | { type: "success", payload: any }

interface FetchState {
    loading: boolean,
    error: boolean,
    data: any
}

const initialState: FetchState = {
    loading: false,
    error: false,
    data: {}
}

const fetchReducer = (state: FetchState, action: FetchAcions) => {
    switch (action.type) {
        case "loading":
            return { ...state, loading: true }
        case "success":
            return { ...state, data: action.payload, loading: false }
        case "error":
            return { ...state, error: true }
        default:
            return state
    }
}



const useFetch = ({ url }: userFetchProps) => {
    const [state, dispatch] = useReducer(fetchReducer, initialState)


    useEffect(() => {
        const fetchData = async (url: string) => {
            let data = await fetch(url);
            let jsonData = await data.json()
            dispatch({ type: "success", payload: jsonData })
        }
        dispatch({ type: "loading" })
        fetchData(url)
    }, [url])

    return state;
}



export default useFetch

//const { data, loading, error } = useFetch({ url: 'http://example.com' })