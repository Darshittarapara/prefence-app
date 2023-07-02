import React from 'react'
import './Home.css'
import { useSelector } from 'react-redux'
import MealsItem from '../../components/Meals/MeaslItem/MealsItem'
import MealsTitle from '../../components/Meals/MeaslTitle/MealsTitle'
const Home = () => {
    const { list } = useSelector((state) => state.MealsReducer);

    return (
        <div className='home'>
            {Object.entries(list).map(([key, value]) => {
                return (
                    <div className='meals-container'>
                        <MealsTitle title={key} />
                        <div className='meals-item-container'>
                            <ul>
                                {value.map((item) => {
                                    return (<MealsItem mealsName={item.name} />)
                                })}
                            </ul>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Home