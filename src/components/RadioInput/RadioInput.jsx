import React, { useState } from 'react'

export const RadioInput = ({
    label,
    id,
    onChange,
    value,
    name,
    stateId
}) => {
    console.log(id)
    const handlerChange = (checkedId) => {
        console.log(checkedId)
        onChange(checkedId, stateId);

    }
    return (
        <>
            <input type='radio' id={id} onChange={(e) => handlerChange(e.target.id)} name={name} value={value} checked={value === id} />
            <label htmlFor={id} >{label}</label>
        </>
    )
}
