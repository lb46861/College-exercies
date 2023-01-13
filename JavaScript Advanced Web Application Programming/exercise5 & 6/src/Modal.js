
import React from 'react'
import { createPortal } from 'react-dom'

export default function Modal ({ children, open, onClose, openCart }) {
  if (!open) return null

  return createPortal(
    <div id='modal'>
      <div>
        {children} <br /> <br />
        <button className='buttons' onClick={onClose}>Close Modal</button>
        <button className='buttons' onClick={openCart}>Open Cart</button>
      </div>
    </div>,
    document.getElementById('portal')
  )
}
