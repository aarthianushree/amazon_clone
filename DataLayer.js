import React, { createContext, useContext, useReducer } from 'react'

export const dataLayerContext = createContext();

export const DataLayer = ({initialState,reducer,children})=>{
    return(
        <dataLayerContext.Provider value={ useReducer(reducer, initialState)}>
         {children}
        </dataLayerContext.Provider>
        
    )
}

export const useDataLayerContext = ()=>{
    return(
        useContext(dataLayerContext)
    )
}