import React, { useState, useEffect } from 'react'
import Result from './Result'
import Select from './Select'
import { NavLink } from 'react-router-dom'

const SearchParams = () => {
  const [sport, setSport] = useState('')
  const [sports, setSports] = useState([])

  const [leagueDrop, setLeagueDrop] = useState('')
  const [leagueDrops, setLeagueDrops] = useState([])

  const [clubs, setClubs] = useState([])

  async function getSports () {
    const allSports = await (await fetch('http://localhost:3000/sport')).json()
    const result = allSports.sports
    setSports(result)
    setSport(result[0])
  }

  async function getClubs () {
    const myLeague = leagueDrop.replace(/\s+/g, '').toLowerCase()
    const allClubs = await (await fetch(`http://localhost:3000/sport/${sport}/${myLeague}`)).json()
    const result = await allClubs.clubs
    setClubs(result)
  }

  async function getLeaguesFromSport () {
    const allClubs = await (await fetch(`http://localhost:3000/sport/${sport}`)).json()
    setLeagueDrops(allClubs.leagues)
    setLeagueDrop(allClubs.leagues[0])
    document.getElementById('leagueSelect').selectedIndex = 0
  }

  useEffect(() => {
    getSports()
  }, [])

  useEffect(() => {
    if (sport) {
      getLeaguesFromSport()
    }
  }, [sport])

  // useEffect(() => {
  //   if (leagueDrop) getClubs()
  // }, [leagueDrop])

  return (

    <form onSubmit={(e) => {
      e.preventDefault()
      getClubs()
    }}>
    <h2>Filter your results</h2>

{/* Parent dropDown */}
      <label>
      Select Sport:
        <br />
        {sports.length ? <Select selectId='sportSelect' list={sports} setter={setSport}/> : ''}
      </label>

{/* Child dropDown */}
      <label>
        Select League:
        <br />
        {leagueDrops.length ? <Select selectId='leagueSelect' list={leagueDrops} setter={setLeagueDrop}/> : ''}
      </label>

      < br />

      <button type="submit">
        Search
      </button> &nbsp; &nbsp;

      <NavLink to="/cart"><button>My cart</button></NavLink>

      <br/>
      <br/>

      {clubs && leagueDrop && sport && <Result data={clubs} league={leagueDrop.replace(/\s+/g, '').toLowerCase()} sport={sport}/>}

    </form>
  )
}

export default SearchParams
