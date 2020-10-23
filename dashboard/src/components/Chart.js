import React, { Component } from 'react'

export default class Chart extends Component {
    render() {
        //Get the passed in prop
        const time_series = this.props.time_series; 
        let keys = [];
        
        //Push all keys onto an array
        Object.keys(time_series).forEach(key =>
            keys.push(key)     
        ); 
        
        //For each key create a display
        const display = keys.map(key => 
            <p key={key}>{key}: {time_series[key]}</p>
        );

        return (
            <div>
                <h1>Time Series</h1>
                {display}
            </div>
        )
    }
}
