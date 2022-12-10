import React, { useState, useEffect } from "react";
import Select from "./Select";
import ColorSelect from "./ColorSelect";
import ColorObject from "./ColorObject";

const SearchParams = () => {



  const [pallet, setPallete] = useState('')
  const [pallets, setPallets] = useState([])

  const [colors, setColors] = useState([])
  const [color, setColor] = useState('')

  const [colorHex, setColorHex] = useState('')

  const [colorObj, setColorObj] = useState({})

  
  async function getPallets(){
    const allColors = await fetch("https://demo0945922.mockable.io/colors");
    const json = await allColors.json();
    const result = await json.data;
    setPallets(result);
    setPallete(result[0].id.toString())
  }

  function getColors(){
    const myClrs = pallets[Number(pallet)].colors
    setColors(myClrs)
    setColor(myClrs[0].colorName)
  }

  function getColorHex(){
    myClr = pallets[Number(pallet)].colors.find(({colorName}) => colorName === color)
    setColorObj(myClr)
    setColorHex(myClr.hexCode);
  }

  useEffect(() => {
    getPallets();
  }, []);

  useEffect(() => {
    if(pallet) getColors();
  }, [pallet]);


  useEffect(() => {
    if(color) getColorHex();
  }, [color]);

  return (

    <form>

{/* Parent dropDown */}
    <label>
      Select Pallete:
        <br />
        {pallets.length ? <Select selectId='palleteSelect' list={pallets} setter={setPallete}/> : ''}   <br />
      </label>


     <label>
      Select Color:
        <br />
        {colors.length ? <ColorSelect selectId='colorSelect' list={colors} setter={setColor}/> : ''}   <br />
      </label>  




      {/* <button
        onClick={(e) => {
          e.preventDefault();
          getClubs();
        }}
      >
        Generate
      </button> */}

      <p>Color hex: {colorHex}</p>

      <ColorObject data={colorObj} />
      
    </form>
  );
};

export default SearchParams;
