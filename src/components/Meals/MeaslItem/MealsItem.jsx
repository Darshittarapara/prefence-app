import React from 'react'

const MealsItem = ({
    mealsName
}) => {
    return (
        <li className='meals-item'>
            {mealsName}
        </li>
    )
}

export default MealsItem