import React from 'react'

function Select (props) {
  return (
    <div style={{ marginBlock: 10 + 'px' }}>
        <select id={props.selectId} onChange={(e) => props.setter(e.target.value)}>
          {props.list.map((item, index) => (
            <option key={index} value={item}>{item}</option>
          ))}
        </select>

    </div>
  )
}

export default Select
