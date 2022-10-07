import './App.css';
import { useState, useEffect } from 'react';
import {mobile, audio} from './Constants'
import axios from 'axios';

function App(props) {
var item = props.title === mobile.name ? mobile:audio;
const [rsData, setRsData] = useState([])
useEffect(() => {
  axios.get(item.url).then((resp)=>{
    // console.log(resp.data.results)
    setRsData(resp.data.results)
  })

}, [item])


  return (
    <div className="app">
      <div className='filter'>
        {props.title}
        {item.url}
      </div>
      <div className='list-item'>
        {rsData.map((obj => <div>
          {obj.mobile_variants}
          {/* {console.log(`${obj}.${item.modelName}`)} */}
        {console.log(obj[item.modelName])}
        </div>))}
      </div>
    </div>
  );
}

export default App;
