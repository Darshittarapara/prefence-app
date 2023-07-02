import React from 'react'

const Contact = ({
    contacts
}) => {
    return (
        <div>
            {contacts.map((item) => {
                return <h4>{item}</h4>
            })}
        </div>
    )
}

export default Contact