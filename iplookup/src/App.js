import './App.scss';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import Map from './components/Map/Map';
import Banner from './components/Banner/Banner';
import Dashboard from './components/Dashboard';
import Context from './components/Context/Context'
import { useState, useEffect } from 'react';

import axios from 'axios';

function App() {

  const [ipAddress, setIpAddress] = useState("142.251.133.4");
  const [ipData, setIpData] = useState({
    latitude:'0',
    longitude:'0',
    country:null,
    continent:null,
    region:null,
    city:null,
    capital:null,
    isp:null,
    asn:null,
    type:null
  });
  const [error, setError] = useState("");

  useEffect(() => {
    const requestOptions = {
      redirect: 'follow',
      headers: {"apikey":"hhFEP4kLYsGC5MUbYaNnTHtoGreNOF1r"}
    }

    axios.get(`https://api.apilayer.com/ip_to_location/${ipAddress}`, requestOptions)
    .then((res) => {
      const data = res.data;
      setIpData({
        latitude: data.latitude,
        longitude:data.longitude,
        country: data.country_name,
        continent:data.continent_name,
        region: data.region_name,
        city: data.city,
        capital: data.location.capital,
        isp: data.connection.isp,
        asn:data.connection.asn,
        type: data.type

      })
    })
    .catch((error) => {
      setError(error.response.data.message)
    })
  },[ipAddress]);

  return (
    <>
    <Banner/>
      <Context.Provider value={{
        ip: ipAddress,
        ipdata: ipData,
        error,
        setIpAddress
      }}>
      
      <Map/>
      <Dashboard/>
      </Context.Provider>
    </>
  );
}

export default App;
