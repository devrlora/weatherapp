import React, {Component } from 'react';

class Days extends Component{
    static defaultProps={ 
        day: '',
        numDays:5
    }

    constructor(props){
        super(props)
        this.state = {
            day: 'Sunday',
            min: 0,
            max: 0
        }
    }
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

export default Days;
