import React from 'react'
import '../../App.css'

function Input({ type, value, handleInputchange, placeholder, labelvalue, inputname, errorvalue }) {
    return (
        <div className='form-inputs'>
            <label className="form-label" htmlFor={labelvalue}> {labelvalue} </label>
            <input name={inputname} type={type} value={value} onChange={handleInputchange} placeholder={placeholder} className={`form-input`} />
            {errorvalue && <p className='form-error'>{errorvalue}</p>}
        </div>
    )
}

export default Input
