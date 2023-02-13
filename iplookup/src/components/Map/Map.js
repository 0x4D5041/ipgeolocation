import { useEffect, useContext } from 'react';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';
import Context from '../Context/Context';

import L from 'leaflet'
import 'leaflet/dist/leaflet.css';


const Icon = new L.icon({
    iconUrl: require('../../assets/icon.png'),
    iconSize: [80, 80]
})

const Map = () => {

  const AppContext = useContext(Context);

  function FlyMapTo(){
    const map = useMap();

    useEffect(() => {
        map.setView([AppContext.ipdata.latitude, AppContext.ipdata.longitude], 17)
      }, [map])
      return null;
    }
    
  return(
    <>
      <MapContainer
        center={{lat:AppContext.ipdata.latitude, lng:AppContext.ipdata.longitude}}
        zoom={17}
        zoomControl={false}
        className="map">
        <FlyMapTo/>
        <TileLayer url="https://api.mapbox.com/styles/v1/marpeand/cle1e8e11004j01qo52t4ugp4/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFycGVhbmQiLCJhIjoiY2xlMGozZnc2MWJoZzNxbWpha3FtNDJ0dCJ9.3bZRYLhJEQET0GHIJ6uErA" attribution="&copy; <a href=&quot;https://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors" />  
        <Marker position={[AppContext.ipdata.latitude, AppContext.ipdata.longitude]} icon={Icon}>
          <Popup> {AppContext.ip} </Popup>
        </Marker>
      </MapContainer>
    </>
    )
}

export default Map;
