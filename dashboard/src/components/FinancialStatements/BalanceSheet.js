import React, { Component } from 'react'
import { Table } from 'react-bootstrap';
import uuid from 'react-uuid';

export default class BalanceSheet extends Component {

    renderAllData = (key, annualReports) => {
        const data =  annualReports.map(annualReport => {
            return <td key={uuid()}>{annualReport[key]}</td>
        });
        
        return data;
    }
    
    renderTable = (keys, annualReports) => {
        const display = keys.map(key => 
        
            <tr key={uuid()}>
                <td key={uuid()}>{key}</td>
                {this.renderAllData(key, annualReports)}
            </tr>
            
              
        );

        return display; 
    }   


    render() {

        const annualReports = this.props.balance_sheet.annualReports; 
        
       
        //Push all keys onto an array
        let keys = [];
    
        Object.keys(annualReports[0]).forEach(key => {
            if(annualReports[0][key] !== 'None') {
                keys.push(key)     
            }
        }); 
        
     
    
        return (
            <div>
                <h1>Balance Sheet</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTable(keys, annualReports)}
                    </tbody> 
                </Table>
            </div>
           
        )
        
    }
}
