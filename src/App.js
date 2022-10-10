import './App.css';
import { useState, useEffect } from 'react';
import {mobile} from './Constants'
import axios from 'axios';

function App(props) {
const [rsData, setRsData] = useState([])
const [sort, sortData] = useState('')
const [filter, sortFilter] = useState('')

useEffect(() => {
  axios.get(mobile.url+sort+filter).then((resp)=>{
    console.log(mobile.url+sort+filter)
    console.log(resp.data.results)
    setRsData(resp.data.results)
  })

}, [sort, filter])

function sortList(sortparm, event) {
  var liElement = document.querySelectorAll('.sort-ul li');
  for (var i =0; i < liElement.length; i++) {
    liElement[i].classList.remove('sort-ul-active');
  }
  event.currentTarget.classList.add('sort-ul-active');
  sortData(`&ordering=${mobile[sortparm]}`)
  console.log(sort)
}

function checkboxChange(e ,name, id, query, qValue) {
  // console.log(e.target.checked)
    if (document.getElementById(id).checked) {
      if(filter.includes(query)) {
        console.log('1')
        sortFilter(filter.replace(query,query+qValue))
        // console.log(filter)
      }else {
        console.log('2')
        sortFilter(filter + query + qValue)
        // console.log(filter)
      }
    } else {
      console.log('3')
      sortFilter(filter.replace(qValue,''))
      // console.log(a.replace(" world", ""))
      // console.log(filter)
      // console.log('unchecked')
    }
}


  return (
    <div className="app">
      {/* filter field */}
      <div className='filter'>
        <div className='head-tag'>
          Filters
        </div>
        <hr></hr>
        <div>

        </div>
        <div>
          {mobile.filter.map((obj) =><div>
              <div>{obj.nameObj}</div>
              <div>{obj.checkItem.map((object, index)=><div>
                <label htmlFor=""><input onChange={(e)=>{checkboxChange(e,object.nameobj,object.idobj,object.query,object.qValue)}} type="checkbox" id={object.idobj}/>{object.nameobj}</label>
                </div>
              )}</div>
              <hr></hr>
            </div>
          )}
        </div>
      </div>
      {/* list item and sort */}
      <div className='list-item'>
        <div className='title'>Mobiles</div>
        <ul className='sort-ul'>
          <li>Sort By</li>
          <li onClick={(event) => sortList("new", event)} className='sort-ul-active'>Newest First</li>
          <li onClick={(event) => sortList("old", event)}>Oldest First</li>
          <li onClick={(event) => sortList("low", event)}>Price - Low to High</li>
          <li onClick={(event) => sortList("high", event)}>Price - High to Low</li>
        </ul>
        <hr></hr>
        {rsData==0 ? <div className='error'>
          <img src='/error-no-search.png'></img>
          <h1>Sorry, no results found!</h1>
          <h3 style={{color:'#808080'}}>Please check the spelling or try searching for something else</h3>
        </div>:
          rsData.map((obj => <div>
            <div className='list-obj'>
            <div className='list-obj-1'><img src={obj.mobileNames?.mobile_image} alt="" /></div>
            <div className='list-obj-2'>
             <div className='list-obj-2-div'>{obj?.mobileNames?.brandName.brand_name} {obj?.mobileNames?.mobile_name} {`(${obj.mobileStorage?.device_storage} GB)`}</div>
              <ul className='list-obj-2-ul'>
                <li>{`${obj.mobilePerformance?.ram} GB RAM | ${obj.mobileStorage?.device_storage} GB ROM`}</li>
                <li>{`${obj.mobileDisplay?.screen_size} inch ${obj.mobileDisplay?.display_type} GB ROM`}</li>
                <li>{`${obj.mobileCamera?.primary_camera_str} | ${obj.mobileCamera?.secondary_camera_str}`}</li>
                <li>{`${obj.mobileBattery?.battery_capacity} mAh ${obj.mobileBattery?.battery_type} Battery`}</li>
                <li>{`${obj.mobilePerformance?.processor_company} ${obj.mobilePerformance?.processor}`}</li>
                <li>{obj.otherFeature?.warranty}</li>
              </ul>
            </div>
            <div className='list-obj-3'><div className='obj-3-price'>₹{obj.mobileGeneral?.price}<span><img src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png'></img></span></div>
            <p>Free delivery</p>
            <p>Top Discount on Sale</p>
            </div>
            </div>
            <hr></hr>
          </div>))
        }
      </div>
    </div>
  );
}

export default App;
