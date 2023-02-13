import { useContext } from "react";
import Context from "../Context/Context";

const Table = () => {

    const AppContext = useContext(Context);

    return(
        <div className="table-container">
            <div className="table">
                <div className="middle">
                    <div className="ip-address">
                        <h1>{AppContext.ip}</h1>
                        <small>{AppContext.ipdata.type}</small>
                    </div>
                </div>
                <div className="bottom">
                    <span class="material-symbols-outlined">
                        pin_drop
                    </span>
                    <div className="country-name">
                        <h1>{AppContext.ipdata.country}</h1>
                        <small>{AppContext.ipdata.continent}</small>
                    </div>
                </div>
            </div>
            <div className="table">
                <div className="ip-information">
                    <h2>IP Location Information</h2>
                    <div className="information-box">
                        <p>Capital: <span>{AppContext.ipdata.capital}</span></p>
                        <p>Region: <span>{AppContext.ipdata.region}</span></p>
                        <p>City: <span>{AppContext.ipdata.city}</span></p>
                        <p>Latitude: <span>{AppContext.ipdata.latitude}</span></p>
                        <p>Longitude: <span>{AppContext.ipdata.longitude}</span></p>
                    </div>
                </div>
            </div>
            <div className="table">
                <div className="ip-information">
                    <h2>Internet Provider Information</h2>
                    <div className="information-box">
                        <p>ISP: <span>{AppContext.ipdata.isp}</span></p>
                        <p>asn: <span>{AppContext.ipdata.asn}</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Table;