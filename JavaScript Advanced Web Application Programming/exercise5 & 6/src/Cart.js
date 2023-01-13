/* eslint-disable react/jsx-key */
import React, { useContext } from 'react'
import { GlobalContext } from './context/GlobalState'
import { RemoveItem } from './DeleteItem'
import { RemoveAll } from './DeleteAll'

import { NavLink } from 'react-router-dom'

export const Cart = () => {
  const { itemList } = useContext(GlobalContext)

  const myCart = itemList.map((item, index) => (
    <li>
      {item.name} --- Qty: {item.quantity} &nbsp; <RemoveItem item={item} /> <RemoveAll item={item} />
    </li>
  ))

  return (
    <div>
        <br />
      <NavLink to="/"><button>Home page</button></NavLink>
      <br />
      <h4>Your Cart:</h4>
      <ul>{myCart}</ul>

    </div>
  )
}
