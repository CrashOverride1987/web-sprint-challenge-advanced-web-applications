import React, { useEffect, useState } from "react";
import axios from 'axios';
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:5000/api/colors')
      .then(res => {
        setColorList(res.data)
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container">
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </div>
  );
};

export default BubblePage;

//Task List:
//1. When the component mounts, make an axios call to retrieve all color data and push to state.
