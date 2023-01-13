import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer.js'

const initialState = {
  itemList: []
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  function addItemToList (item) {
    dispatch({
      type: 'ADD_ITEM',
      payload: item
    })
  }

  function removeItemFromList (item) {
    dispatch({
      type: 'REMOVE_ITEM',
      payload: item
    })
  }

  function removeAllFromList (item) {
    dispatch({
      type: 'REMOVE_ALL',
      payload: item
    })
  }

  return (
    <GlobalContext.Provider
      value={{
        itemList: state.itemList,
        addItemToList,
        removeItemFromList,
        removeAllFromList
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
