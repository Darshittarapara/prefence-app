import React from 'react'

const Button = ({ text, type, onClick, disable }) => {
    return <button disabled={disable} type={type} onClick={onClick}>{text}</button>;
};
export default Button