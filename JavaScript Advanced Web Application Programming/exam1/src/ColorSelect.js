import React from 'react'

function Select(props) {
  return (
    <div>
        <select id={props.selectId} onChange={(e) => props.setter(e.target.value)}>
          {props.list.map((item, index) => (
            <option key={index} value={item.colorName}>{item.colorName}</option>
          ))}
        </select>
        
    </div>
  )
}

export default Select