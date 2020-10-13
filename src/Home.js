import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className="home">
      <img className="homeImage" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="banner" />
      <div className="home_row">
        <Product
        id="142567"
        title="HP 15 Laptop AMD Ryzen 3 3200U 2.5GHz 8GB RAM 1TBHDD 15.6 Inch Screen"
        price={390}
        rating={5}
        image="https://i0.wp.com/fgee.co.ke/wp-content/uploads/2020/06/EDA39331AF1542A505FD82CE0834A494A2489B84_gallery.jpg?fit=1200%2C1141&ssl=1"
        />
       <Product
       id="176543"
       title="TACKLIFE compact refrigerator, 3.2 Cu Ft Mini Fridge with freezer,low noise"
       price={230}
       rating={5}
       image="https://images-na.ssl-images-amazon.com/images/I/71Nc8gOJQML._AC_SX569_.jpg"
       />
      </div>
      <div className="home_row">
        <Product
        id="145347"
        title="IphoneX 3GB RAM 256GB Storage Camera 12MP + 12MP,Front camera 7MP,5.8 inch screen"
        price={655}
        rating={5}
        image="https://www.phoneplacekenya.com/wp-content/uploads/2018/09/apple-iphone-x.jpg"
        />
       <Product
       id="132456"
       title="Aldyn A9E Bluetooth Smart Watch,Touchscreen,with 4g sim-card port "
       price={15.74}
       rating={5}
       image="https://images-na.ssl-images-amazon.com/images/I/51ES%2BT96q4L._AC_SY355_.jpg"
       />
        <Product
        id="123456"
        title="DHI phantom 4 advanced plus 4K Resolution"
        price={450}
        rating={5}
        image="https://images-na.ssl-images-amazon.com/images/I/71pLTk92uPL._AC_SL1500_.jpg"
        />
      </div>
      <div className="home_row">
        <Product
        id="134565"
        title="TCL 43P8 -'43' - ANDROID ULTRA HDR 4K Smart LED TV"
        price={375}
        rating={5}
        image="https://www.globalguds.com/wp-content/uploads/2019/10/43P8-1.jpg"
        />
      </div>

      {/*product*/}
    </div>
  );
}

export default Home;
