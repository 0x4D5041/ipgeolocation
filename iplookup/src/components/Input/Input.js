
import React, { useContext, useEffect, useState } from "react";
import Context from "../Context/Context";


const ErrorBox = ({ handleClose, Message }) => {
    return (
      <div className="error-box">
        <p>{Message}</p>
        <button onClick={handleClose}>X</button>
      </div>
    );
};

const Input = () => {

    const AppContext = useContext(Context);
    const [ip, setIP] = useState();
    const [errorMessage, setErrorMessage] = useState("");
    const [showError, setShowError] = useState(false);

    function handleCloseError() {
        setErrorMessage("")
        setShowError(false);
    }

    function saveData(){
        const regexExp = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi;

        if (regexExp.test(ip)){
            AppContext.setIpAddress(ip)
        }
        else{
            setErrorMessage("Invalid IP Address")
        }
    }

    useEffect(() => {
        if (AppContext.error || errorMessage) {
            setShowError(true);
        }

    }, [AppContext.error, errorMessage])

    return (
        <>
            <div className="input-box">
                <input type="text" 
                    placeholder="Enter IP address"
                    onChange={e => setIP(e.target.value)}></input>
                <button type="submit" onClick={saveData}>LookUp!</button>
            </div>
            
            {
                showError && <ErrorBox handleClose={handleCloseError} Message={errorMessage}/>
            }

        </>
        )
}

export default Input;