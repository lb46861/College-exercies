import React, { useContext } from 'react'
import { GlobalContext } from './context/GlobalState'

export const RemoveAll = (props) => {
  const { item } = props

  const { removeAllFromList } = useContext(GlobalContext)

  const handleClick = () => {
    removeAllFromList(item)
  }

  return <button onClick={handleClick}>X</button>
}
