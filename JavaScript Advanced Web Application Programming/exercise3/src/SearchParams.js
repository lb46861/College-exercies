import React, { useState, useEffect } from 'react'
import Result from './Result'
import Select from './Select'

const SearchParams = () => {
  const [sport, setSport] = useState('')
  const [sports, setSports] = useState([])

  const [leagueDrop, setLeagueDrop] = useState('')
  const [leagueDrops, setLeagueDrops] = useState([])

  const [clubs, setClubs] = useState([])

  async function getSports () {
    const allSports = await fetch('https://demo4954048.mockable.io/sport')
    const json = await allSports.json()
    const result = await json.sports
    setSports(result)
    setSport(result[0])
  }

  async function getClubs () {
    const myLeague = leagueDrop.replace(/\s+/g, '').toLowerCase()
    const allClubs = await fetch(`https://demo4954048.mockable.io/sport/${sport}/${myLeague}`)
    const json = await allClubs.json()
    const result = await json.clubs
    setClubs(result)
  }

  // async function getLeagues() {
  //   const sportLeagues = await fetch(`https://demo4954048.mockable.io/sport/${sport}`);
  //   const json = await sportLeagues.json();
  //   const result = await json.leagues;
  //   setLeagueDrops(result);
  // }

  async function getLeaguesFromSport () {
    await fetch(
      `https://demo4954048.mockable.io/sport/${sport}`
    ).then((value) => value.json().then(({ leagues }) => {
      setLeagueDrops(leagues)
      setLeagueDrop(leagues[0])
      document.getElementById('leagueSelect').selectedIndex = 0
    })
    )
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
  //   if(leagueDrop) getClubs()
  // }, [leagueDrop]);

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
      </button>
      <br/>
      <br/>

      {clubs && leagueDrop && sport && <Result data={clubs} league={leagueDrop.replace(/\s+/g, '').toLowerCase()} sport={sport}/>}

    </form>
  )
}

export default SearchParams
