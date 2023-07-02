import React from 'react'
import './input.css';

const Input = ({
    name,
    onChange,
    type = "text",
    value,
    label,
    id
}) => {
    return (
        <div className='input'>
            <label htmlFor={id}>{label}</label>
            <input type={type} name={name} id={id} onChange={(e) => onChange(e.target.value, name)} value={value} />
        </div>
    )
}

export default Input