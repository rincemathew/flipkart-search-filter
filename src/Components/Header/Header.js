import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <div>
      <div className="head">
        <div className="percentage head-item">
          <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt='img'></img>
          <div><a className='head-button' target="_blank" href='https://github.com/rincemathew/flipkart-search-filter'>github</a></div>
          {/* <div><Link className='head-button' to="/mobiles">Go to mobiles</Link></div> */}
          {/* <div><Link className='head-button' to="/audio">Go to Audio(headphone)</Link></div> */}
        </div>
      </div>
      <div style={{height:'56px'}}></div>
      <div className="nav">
        <div className="percentage nav-item">
          <div className="nav-button">Electronics</div>
          <div className="nav-button">TVs & Appliances</div>
          <div className="nav-button">Men</div>
          <div className="nav-button">Women</div>
          <div className="nav-button">Baby & Kids</div>
          <div className="nav-button">Home & Furniture</div>
          <div className="nav-button">Sports, Books & More</div>
          <div className="nav-button">Flights</div>
          <div className="nav-button">Offer Zone</div>
        </div>
      </div>
    </div>
  );
}

export default Header;