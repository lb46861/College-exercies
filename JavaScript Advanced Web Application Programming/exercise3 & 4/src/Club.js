import React from 'react'
import { Link } from 'react-router-dom'

const Club = (props) => {
  return (
    <div style={{ marginBlock: 10 + 'px' }}>
      {props.item.name} &nbsp;
      <Link to={`${props.sport}/${props.league}/${props.item.id}`}>
        <button>Details </button>
      </Link>
    </div>
  )
}

export default Club
