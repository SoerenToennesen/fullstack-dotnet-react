import React from 'react';
import './Overview.css';

export default function MealItem({ meal, mealType }) {
    function getAllMeals(description, timestamp) {
        timestamp = Number(timestamp.slice(11,-3));
        console.log(timestamp);
        console.log(mealType);
        if ((mealType === "breakfast" && (timestamp >= 0 && timestamp < 12)) ||
            (mealType === "lunch" && (timestamp >= 12 && timestamp < 17)) ||
            (mealType === "dinner" && (timestamp >= 17 && timestamp < 24))
        ) {
            console.log(timestamp);
            console.log(mealType);
            var totalDescription = "";
            for (var i = 0; i < description.length; i++) {
                totalDescription += description[i] + ", ";
            }
            
            totalDescription = totalDescription.slice(0, -2);
            return totalDescription;
        }
        return null;
    }
    return (
        <div>
            <li className="food-list" key={meal.id}>
                <div>
                    <span className="black-text darken-2">{getAllMeals(meal.description, meal.timestamp)}</span>
                </div>
            </li>
        </div>
    )
}