import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import uuid from 'react-uuid';


//Import Components
import AddCompany from './components/AddCompany';
import CompanyProfile from './components/CompanyProfile';
import Analysis from './components/CompanyAnalysis'; 


class App extends Component {

  state = {
    companies: []
  }

  addCompany = async (ticker, index) => {
    const request = await fetch(`http://localhost:8080/company`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        ticker: ticker
      })
    });

    const data = await request.json();
    let companies = this.state.companies; 
    companies[index] = data; 

    this.setState({ companies: companies })
  }


  render() {   
    this.state.companies.map(company => console.log(company))
    var companyList = this.state.companies.map(company =>
      <Tab key={uuid()}>{company.company_profile.company_overview.Name}</Tab>
    
    );

    var companyProfiles = this.state.companies.map(company =>
      <TabPanel key={uuid()}>
        <CompanyProfile company={company.company_profile} />
      </TabPanel>
      
    );

    return (
      <div>
        {/* Add company is the header */}
        <AddCompany addCompany={this.addCompany} companyName={this.state.companies}/>
        <Tabs>
          <TabList>  
            <Tab>Analysis</Tab>
            {companyList}
          </TabList>
            <TabPanel key={uuid()}>
              <h1>Company Analysis</h1>
              <Analysis companies={this.state.companies} />
            </TabPanel>
            {companyProfiles}
        </Tabs>
      </div>
    );
  }
}
export default App;