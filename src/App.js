import './App.css';
import { useState, useEffect } from 'react';
import {mobile, audio} from './Constants'
import axios from 'axios';

function App(props) {
var item = props.title === mobile.name ? mobile:audio;
const [rsData, setRsData] = useState([])
useEffect(() => {
  axios.get(item.url).then((resp)=>{
    console.log(resp.data.results)
    setRsData(resp.data.results)
  })

}, [item])


  return (
    <div className="app">
      {/* filter field */}
      <div className='filter'>
        {props.title}
      </div>
      {/* list item and sort */}
      <div className='list-item'>
        <div className='title'>{item.title}</div>
        <ul className='sort-ul'>
          <li>Sort By</li>
          <li className='sort-ul-active'>Newest First</li>
          <li>Oldest First</li>
          <li>Price - Low to High</li>
          <li>Price - High to Low</li>
        </ul>
        <hr></hr>
        {rsData.map((obj => <div>
          <div className='list-obj'>
          <div className='list-obj-1'><img src={item==mobile?obj.mobileNames?.mobile_image:obj.ear_picture} alt="" /></div>
          <div className='list-obj-2'>jkjjghg</div>
          <div className='list-obj-3'>gughhj</div>
          </div>
          <hr></hr>
        </div>))}
      </div>
    </div>
  );
}

export default App;
