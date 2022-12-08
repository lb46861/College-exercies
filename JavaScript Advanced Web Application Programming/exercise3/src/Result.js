import React from 'react'
import Club from './Club'

const Result = (props) => {
  return (
    <div>
      {props.data.map((item, index) => (
        <Club item={item} sport={props.sport} league={props.league} key = {index} />
      ))}
    </div>
  )
}

export default Result
