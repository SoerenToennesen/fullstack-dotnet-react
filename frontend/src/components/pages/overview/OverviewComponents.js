import React from 'react'
import '../../TextSections.css';
import MealItem from './MealItem';

export default function OverviewComponents({meals}) {

    function mealList(mealType) {
        return(meals.length ? (
            meals.map((meal, idx) => (
                <MealItem
                    key = {idx}
                    meal = {meal}
                    mealType = {mealType}
                />
            ))
        ) : (
            <p className="center">No meals recorded for {mealType}.</p>
        ))
    }

    

    return (
        <div className="title-container">
            <h1>OVERVIEW</h1>
            <h2>Todays metrics</h2>
            <h3>Breakfast</h3>
            <ul>
               {mealList("breakfast")}
            </ul>
            <p className="food-list">Snacks: </p>
            <h3>Lunch</h3>
            <ul>
               {mealList("lunch")}
            </ul>
            <h3>Dinner</h3>
            <ul>
               {mealList("dinner")}
            </ul>
            <h3>Snacks</h3>
            <ul>
               {mealList("snacks")}
            </ul>
            <h3>Water</h3>
        </div>
    )
}