import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import {  BASE_URL, API_KEY } from './constants/index';
import Header from './Header'
import PicInfo from './PicInfo'
import Picture from './Picture'

function App() {

  const [picData, setPicData] = useState([]);

  useEffect(() => {
    axios
    .get(`${BASE_URL}?api_key=${API_KEY}`)
    .then((res) => {
      setPicData(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }, [])

  return (
    <div className="App">
      <Header />
      <PicInfo title={picData.title} date={picData.date} copyright={picData.copyright}/>
      <Picture url={picData.url} explanation={picData.explanation}/>
      {
        console.log(picData)
      }
    </div>
  );
}

export default App;
