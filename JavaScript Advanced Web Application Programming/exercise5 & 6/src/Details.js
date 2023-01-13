import React, { Component } from 'react'
import { useParams } from 'react-router'
import { AddItem } from './AddItem'
import { NavLink } from 'react-router-dom'

class Details extends Component {
  constructor (props) {
    super(props)
    this.state = { loading: true }
    this.props = { sport: props.sport, league: props.league, id: props.id }
  }

  async componentDidMount () {
    try {
      const allClubs = await (await fetch(`http://localhost:3000/sport/${this.props.sport}/${this.props.league}`)).json()
      const filteredClub = allClubs.clubs.filter((club) => club.id === +this.props.id)
      this.setState({
        id: filteredClub[0].id,
        name: filteredClub[0].name,
        description: filteredClub[0].description,
        loading: false
      })
    } catch (error) {
      console.log(error.message)
    }
  }

  render () {
    const { loading, name, description } = this.state
    return (
        <div>
          <h1>{name}</h1>
          {name && <p>Description: {description}</p>}
          <AddItem data={ this.state }></AddItem>

          <NavLink to="/cart"><button>My cart</button></NavLink>

          <h1>{loading ? 'loading...' : ''}</h1>
        </div>
    )
  }
}

const WrappedDetails = (props) => {
  const params = useParams()
  return <Details {...props} {...params} />
}

export default WrappedDetails
