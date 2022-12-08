import React, { Component } from 'react'
import { useParams } from 'react-router'

class Details extends Component {
  constructor (props) {
    super(props)
    this.state = { loading: true }
    this.props = { sport: props.sport, league: props.league, id: props.id }
  }

  componentDidMount () {
    fetch(`https://demo4954048.mockable.io/sport/${this.props.sport}/${this.props.league}`)
      .then((response) => response.json())
      .then(({ clubs }) => {
        const filteredClub = clubs.filter((club) => club.id === +this.props.id)
        this.setState({
          id: filteredClub[0].id,
          name: filteredClub[0].name,
          description: filteredClub[0].description,
          loading: false
        })
      })
      .catch((err) => console.log(err))
  }

  render () {
    const { loading, name, description } = this.state
    return (
        <div>
          <h1>{name}</h1>
          {name && <p>Description: {description}</p>}
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
