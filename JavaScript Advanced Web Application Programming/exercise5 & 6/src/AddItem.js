import React, { useContext, useState } from 'react'
import { GlobalContext } from './context/GlobalState'
import Modal from './Modal'
import { useNavigate } from 'react-router-dom'

export const AddItem = (props) => {
  const item = props.data
  const { addItemToList } = useContext(GlobalContext)
  // const [openModal, setModal] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    addItemToList(item)
    setIsOpen(true)
  }

  const openCart = () => {
    setIsOpen(false)
    navigate('/cart')
  }

  return (

    <div>
      <form onSubmit={handleSubmit}>
        <button>Add to cart!</button><br /><br />
      </form>
      {/* { isOpen && <Modal toggleModal={setIsOpen} openCart={openCart} /> } */}

      <Modal open={isOpen} onClose={() => setIsOpen(false)} openCart={openCart} >
          Do you want to proceed to cart?
      </Modal>
    </div>
  )
}
