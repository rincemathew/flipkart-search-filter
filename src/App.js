import './App.css';
import { useState, useEffect } from 'react';
import {mobile, audio} from './Constants'
import axios from 'axios';

function App(props) {
var item = props.title === mobile.name ? mobile:audio;
const [rsData, setRsData] = useState([])
const [sort, sortData] = useState('')

useEffect(() => {
  axios.get(item.url+sort).then((resp)=>{
    console.log(item.url+sort)
    console.log(resp.data.results)
    setRsData(resp.data.results)
  })

}, [item, sort])

function sortList(sortparm, event) {
  var liElement = document.querySelectorAll('.sort-ul li');
  for (var i =0; i < liElement.length; i++) {
    liElement[i].classList.remove('sort-ul-active');
  }
  event.currentTarget.classList.add('sort-ul-active');
  var sort1 = `?ordering=${item[sortparm]}`
  sortData(sort1)
  console.log(sort)
}


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
          <li onClick={(event) => sortList("new", event)} className='sort-ul-active'>Newest First</li>
          <li onClick={(event) => sortList("old", event)}>Oldest First</li>
          <li onClick={(event) => sortList("low", event)}>Price - Low to High</li>
          <li onClick={(event) => sortList("high", event)}>Price - High to Low</li>
        </ul>
        <hr></hr>
        {rsData.map((obj => <div>
          <div className='list-obj'>
          <div className='list-obj-1'><img src={item==mobile?obj.mobileNames?.mobile_image:obj.ear_picture} alt="" /></div>
          <div className='list-obj-2'>
            {item==mobile?<div className='list-obj-2-div'>{obj?.mobileNames?.brandName.brand_name} {obj?.mobileNames?.mobile_name} {`(${obj.mobileStorage?.device_storage} GB)`}</div>:<div className='list-obj-2-div'>{obj.earBrandName?.ear_brand_name} {obj.ear_name}</div>}
            <ul className='list-obj-2-ul'>
              {item==mobile?<li>{`${obj.mobilePerformance?.ram} GB RAM | ${obj.mobileStorage?.device_storage} GB ROM`}</li>:<li>{obj.ear_type}</li>}
              {item==mobile?<li>{`${obj.mobileDisplay?.screen_size} inch ${obj.mobileDisplay?.display_type} GB ROM`}</li>:<li>{`WaterProof:${obj.ear_waterproof}`}</li>}
              {item==mobile?<li>{`${obj.mobileCamera?.primary_camera_str} | ${obj.mobileCamera?.secondary_camera_str}`}</li>:''}
              {item==mobile?<li>{`${obj.mobileBattery?.battery_capacity} mAh ${obj.mobileBattery?.battery_type} Battery`}</li>:''}
              {item==mobile?<li>{`${obj.mobilePerformance?.processor_company} ${obj.mobilePerformance?.processor}`}</li>:''}
              {item==mobile?<li>{obj.otherFeature?.warranty}</li>:''}
            </ul>
          </div>
          <div className='list-obj-3'><div className='obj-3-price'>₹{item==mobile?obj.mobileGeneral?.price:obj.ear_price}<span><img src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png'></img></span></div>
          <p>Free delivery</p>
          <p>Top Discount on Sale</p>
          </div>
          </div>
          <hr></hr>
        </div>))}
      </div>
    </div>
  );
}

export default App;
