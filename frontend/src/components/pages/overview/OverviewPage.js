import React, { Component } from 'react';
import { connect } from 'react-redux';
import OverviewComponents from './OverviewComponents';

class OverviewPage extends Component {
    state = {
        meals: [
            { id: 1, description: ["Eggs", "Bread"], timestamp: "26/05-2021 10:10", calories: 150, snack: false },
            { id: 2, description: ["Pasta", "Tomato sauce"], timestamp: "26/05-2021 14:45", calories: 220, snack: false },
            { id: 3, description: ["Pizza"], timestamp: "26/05-2021 18:30", calories: 300, snack: false },
            { id: 4, description: ["Popcorn"], timestamp: "26/05-2021 22:05", calories: 250, snack: true },
            { id: 5, description: ["Müsli bar"], timestamp: "26/05-2021 13:15", calories: 80, snack: true },
        ]
    }
    
    componentDidMount() {
        //logic to get meals, etc.
    }

    render() {
        return (
            <div>
                <OverviewComponents meals={this.state.meals}/>
            </div>
        )
    }
}




export default connect()(OverviewPage)