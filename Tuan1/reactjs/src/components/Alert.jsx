import React, { useState } from 'react'
import './Alert.css'
const Alert = () => {
    const [alert, setAlert] = useState("")
    return (
        <div>
            <button className='success' onClick={() => setAlert("Success")}>Success</button>
            <button className='danger' onClick={() => setAlert("Error")}>Error</button>
            <button className='warning' onClick={() => setAlert("Warning")}>Warning</button>
            {alert && <div className='alert'>{alert}</div>}
        </div>
    )
}

export default Alert