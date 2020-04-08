import React, {Component } from 'react';
// Create a component class that defines the day of the week
// Properties that wont change are the day of week, and number of days per week
class Days extends Component{
    static defaultProps={ 
        day: '',
        numDays:5
    }
// ?Stateful elements include min and max temperature each day?
    constructor(props){
        super(props)
        this.state = {
            day: 'Sunday',
            min: 0,
            max: 0
        }

// Create a function that links to the weather API

    }
// Each container will render an instance of the object properties
    render(){
        return (
            <div class="weather-container">
                <p>{this.props.day}</p>
                <p>{this.props.min}</p>
                <p>{this.props.max}</p>
                </div>
        )
    }
    
}
// The component will be passed to App.js, where it will render 
// an instance of "Days" component.
export default Days;


