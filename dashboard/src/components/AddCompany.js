import React, { Component } from 'react'

import { Jumbotron } from 'react-bootstrap';



export default class AddCompany extends Component {
    state = {
        ticker1: '', 
        ticker2: ''
    } 

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });
    
    onSubmit1 = (e) => {
        e.preventDefault();
        this.props.addCompany(this.state.ticker1, 0);
        this.setState({ticker1: ''});
    }

    onSubmit2 = (e) => {
        e.preventDefault();
        this.props.addCompany(this.state.ticker2, 1);
        this.setState({ticker1: ''});
    }
    
    
    render() {
        var company1_name = 'Input Ticker'; 
        var company2_name = 'Input Ticker'; 
        

        if(this.props.companyName.length >= 1 && this.props.companyName[0].company_profile.company_overview.Name !== undefined) {
            company1_name = this.props.companyName[0].company_profile.company_overview.Name;
        }
        
        if(this.props.companyName.length >= 2 && this.props.companyName[1].company_profile.company_overview.Name !== undefined) {
            company2_name = this.props.companyName[1].company_profile.company_overview.Name;
        }
            

        return (
            <Jumbotron style={JumbotronStyle}>
                <h1>Brian's Analysis Dashboard</h1>
                <p>Enter two tickers.</p>

                <form id='company1' onSubmit={this.onSubmit1} style={{display : 'flex'}}>
                    <input 
                        type='text' 
                        name='ticker1'
                        style={{flex: '10', padding: '5px'}} 
                        placeholder={company1_name} 
                        value={this.state.ticker1}
                        onChange={this.onChange}
                    />
                    <input 
                        type='submit' 
                        value='Submit' 
                        className='btn' 
                        style={{flex: '1'}}
                    />
                </form>

                <form id='company2' onSubmit={this.onSubmit2} style={{display : 'flex'}}>
                    <input 
                        type='text' 
                        name='ticker2'
                        style={{flex: '10', padding: '5px'}} 
                        placeholder={company2_name} 
                        value={this.state.ticker2}
                        onChange={this.onChange}
                    />
                    <input 
                        type='submit' 
                        value='Submit' 
                        className='btn' 
                        style={{flex: '1'}}
                    />
                </form>

            </Jumbotron>
        )
    }
}


const JumbotronStyle = {
    background: '#263b2c',
    color: '#ffffff',
    border: 'none'
}