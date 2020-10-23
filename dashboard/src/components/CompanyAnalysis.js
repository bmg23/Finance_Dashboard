import React, { Component } from 'react'

export default class CompanyAnalysis extends Component {
    render() {
        //Get the passed in prop
        const company1 = this.props.companies[0];
        var analysis = null; 
        
        if(company1 === undefined) {
            return <h1>need a company</h1>;
        } else {
            analysis = company1.company_analysis;  
        }
        
        let keys = [];
        
        //Push all keys onto an array
        Object.keys(analysis).forEach(key =>
            keys.push(key)     
        ); 
        
        //For each key create a display
        const display = keys.map(key => 
            <p key={key}>{key}: {analysis[key]}</p>
        );

        return (
            <div>
                <h1>Company analysis</h1>
                {display}
            </div>
        )
    }
}
