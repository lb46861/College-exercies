/* eslint-disable no-unused-vars */
import React from 'react'

const addProductToCart = (product, state) => {
  const updatedCart = [...state.itemList]
  const updatedItemIndex = updatedCart.findIndex(item => {
    return item.id === product.id
  }
  )

  if (updatedItemIndex < 0) {
    updatedCart.push({ ...product, quantity: 1 })
  } else {
    const updatedItem = {
      ...updatedCart[updatedItemIndex]
    }
    updatedItem.quantity++
    updatedCart[updatedItemIndex] = updatedItem
  }
  return { ...state, itemList: updatedCart }
}

const removeProductFromCart = (myItemId, state) => {
  const updatedCart = [...state.itemList]
  const updatedItemIndex = updatedCart.findIndex(item => item.id === myItemId)

  const updatedItem = {
    ...updatedCart[updatedItemIndex]
  }
  updatedItem.quantity--
  if (updatedItem.quantity <= 0) {
    updatedCart.splice(updatedItemIndex, 1)
  } else {
    updatedCart[updatedItemIndex] = updatedItem
  }
  return { ...state, itemList: updatedCart }
}

export default (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return addProductToCart(action.payload, state)

    case 'REMOVE_ITEM':
      return removeProductFromCart(action.payload.id, state)

    case 'REMOVE_ALL':
      return {
        itemList: state.itemList.filter((item) => item !== action.payload)
      }

    default:
      return state
  }
}
