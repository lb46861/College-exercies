import React, { useState, useEffect } from "react";
import Result from "./Result";
//const moviesGenres = ["drama", "SF", "Familie", "Horror"];

const SearchParams = () => {

  const [sport, setSport] = useState("football");
  const [sports, setSports] = useState([]);

  const [leagueDrop, setLeagueDrop] = useState([])
  const [leagueDrops, setLeagueDrops] = useState([])


  async function getSports() {
    const allSports = await fetch("https://demo4954048.mockable.io/sport");

    const json = await allSports.json();

    const result = await json.sports;

    setSports(result);
  }

  async function getLeagues() {
    const sportLeagues = await fetch(`https://demo4954048.mockable.io/sport/${sport}`);
    const json = await sportLeagues.json();
    const result = await json.leagues;
    setLeagueDrops(result);
  }




  async function getLeaguesFromSport() {
    const response = await fetch(
      `https://demo4954048.mockable.io/sport/${sport}`
    ).then((value) => value.json().then(({ leagues }) => setLeagueDrops(leagues)));
  }

  useEffect(() => {
    getSports();
    // getLeagues();
  }, []);


  useEffect(() => {
    getLeaguesFromSport();
    // getLeagues();
  }, [sport]);


  /* useEffect(() => {
    getLeaguesFromSport();
  }, [genre]); */


  return (
    // <form>
    <>
    
{/* Parent dropDown */}
      <label>
        Choose Sport:
        <br />
        <select value={sport} onChange={(e) => {
          setSport(e.target.value);
          // leagueDrop = leagueDrops[0];
          // setLeagueDrop(leagueDrop);
        }
        }>
          {sports.map((item) => (
            <option value={item}>{item}</option>
          ))}
        </select>
      </label>

{/* Child dropDown */}
      <label>
       <br />
        Choose League:
        <br />
        <select value={leagueDrop} onChange={(e) => setLeagueDrop(e.target.value)}>
          {leagueDrops.map((item) => (
            <option value={item}>{item}</option>
          ))}
        </select>
      </label>
      < br />
      {/* <button
        onClick={(e) => {
          e.preventDefault();
          getLeaguesFromSport();
        }}
      >
        Generate
      </button> */}

      {/* {movies.map((item) => (
        <Movie name={item.name} />
      ))} */}
      <Result data={leagueDrops} />
      </>
    // </form>
  );
};

export default SearchParams;
