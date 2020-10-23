import React, { Component } from 'react'

export default class Overview extends Component {
    render() {
        //Get the passed in prop
        const overview = this.props.overview; 
        let keys = [];
        
        //Push all keys onto an array
        Object.keys(overview).forEach(key =>
            keys.push(key)     
        ); 
        
        //For each key create a display
        const display = keys.map(key => 
            <p key={key}>{key}: {overview[key]}</p>
        );

        return (
            <div>
                <h1>Company Overview</h1>
                {display}
            </div>
        )
    }
}
