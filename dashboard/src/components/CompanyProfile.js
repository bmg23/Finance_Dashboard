import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

//Import all components
import Overview from './FinancialStatements/Overview'; 
import Chart from './Chart';
import BalanceSheet from './FinancialStatements/BalanceSheet';
import IncomeStatement from './FinancialStatements/IncomeStatment'; 
import CashFlow from './FinancialStatements/CashFlow'; 

export class CompanyProfile extends Component {
    render() {
        const {balance_sheet, cash_flow, company_overview, income_statement, time_series} = this.props.company;
        console.log(cash_flow)
        return (
            <div>
                <Tabs>
                    <TabList>
                        <Tab>Company Overview</Tab>
                        <Tab>Chart</Tab>
                        <Tab>Financial Statements</Tab>
                    </TabList>
                    <TabPanel>
                        <Overview overview={company_overview}/>
                    </TabPanel>
                    <TabPanel>
                        <Chart time_series={time_series}/>
                    </TabPanel>
                    <TabPanel>
                        <Tabs>
                            <TabList>
                                <Tab>Balance Sheet</Tab>
                                <Tab>Income Statement</Tab>
                                <Tab>Balance Sheet</Tab>
                            </TabList>
                            <TabPanel>
                                <BalanceSheet balance_sheet={balance_sheet}/>
                            </TabPanel>
                            <TabPanel>
                                <IncomeStatement income_statement={income_statement}/>
                            </TabPanel>
                            <TabPanel>
                                <CashFlow cash_flow={cash_flow}/>
                            </TabPanel>
                        </Tabs>
                    </TabPanel>
                </Tabs>
            </div>
        )
    }
}

export default CompanyProfile
