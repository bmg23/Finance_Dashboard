/* Original Credit too : https://levelup.gitconnected.com/stocks-api-tutorial-with-javascript-40f24320128c
*
*/


const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const fetch = require("node-fetch");

const cors = require("cors");
app.use(cors());
app.options('*', cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("dotenv").config();
const { request } = require("express");

const timePeriod = require("./constants");

const Alpha_Vantage_URL_Builder = require('./alpha_vantage_url_builder').Alpha_Vantage_URL_Builder;
var url_builder = new Alpha_Vantage_URL_Builder(process.env.ALPHA_VANTAGE_API_KEY)

const company_analysis = require('./Classes/CompanyAnalysis').ComapnyAnalysis;

//Used to read in dummy data
const fs = require('fs');
const { ComapnyAnalysis } = require("./Classes/CompanyAnalysis");


/* Company
 * Input: Ticker 
 * 
 * API Calls to AV: 
 *  - Company overview 
 *  - All financial statements 
 * 
 * Uses Financial Analysis Library to generate company profile. 
 * 
 * 
 */ 
app.post("/company", cors(), async (req, res) => {
  const body = JSON.parse(JSON.stringify(req.body));
  const { ticker } = body;
  console.log("stocks-api.js 14 | body", body.ticker);
  //Get Company Overview 
  const request_company_overview = await fetch(
    url_builder.get_Company_Overview(ticker)
  );

  //Get Financial Statements//

  // //Balance Sheet
  // const request_balance_sheet = await fetch(
  //   url_builder.get_Balance_Sheet(ticker)
  // );

  // //Income Statement 
  // const request_income_statement = await fetch(
  //   url_builder.get_Income_Statement(ticker)
  // );

  // //Cash Flow 
  // const request_cash_flow = await fetch(
  //   url_builder.get_Cash_Flow(ticker)
  // );

  // const company_overview = await request_company_overview.json();
  // const balance_sheet = await request_balance_sheet.json(); 
  // const income_statement = await request_income_statement.json(); 
  // const cash_flow = await request_cash_flow.json();

  var company_overview_path;
  var balance_sheet_path;
  var income_statement_path; 
  var cash_flow_path;
  var time_series_path; 


  //Alpha Vantage API Calls dummy data
  if(ticker === 'PFSI') {
    company_overview_path = './dummy_data/PFSI_Company_Overview.json';
    balance_sheet_path = './dummy_data/PFSI_Balance_Sheet.json';
    income_statement_path = './dummy_data/PFSI_Income_Statement.json';
    cash_flow_path = './dummy_data/PFSI_Cash_Flow.json'; 
    time_series_path = './dummy_data/PFSI_Time_Series_Daily.json';
  }

  if(ticker === 'PBIP') {
    company_overview_path = './dummy_data/PBIP_Company_Overview.json';
    balance_sheet_path = './dummy_data/PBIP_Balance_Sheet.json';
    income_statement_path = './dummy_data/PBIP_Income_Statement.json';
    cash_flow_path = './dummy_data/PBIP_Cash_Flow.json'; 
    time_series_path = './dummy_data/PBIP_Time_Series_Daily.json';
  }


  let raw_Company_Overview = fs.readFileSync(company_overview_path)
  let raw_Balance_Sheet = fs.readFileSync(balance_sheet_path)
  let raw_Income_Statement = fs.readFileSync(income_statement_path)
  let raw_Cash_Flow = fs.readFileSync(cash_flow_path)
  let raw_Time_Series = fs.readFileSync(time_series_path)

  company_overview = JSON.parse(raw_Company_Overview);
  balance_sheet = JSON.parse(raw_Balance_Sheet);
  income_statement = JSON.parse(raw_Income_Statement); 
  cash_flow = JSON.parse(raw_Cash_Flow);
  time_series = JSON.parse(raw_Time_Series); 

  let company_profile = {
    company_overview: company_overview,
    balance_sheet: balance_sheet, 
    income_statement: income_statement, 
    cash_flow: cash_flow,
    time_series: time_series
  }

  var ca = new ComapnyAnalysis(company_profile); 
  const company_analysis = ca.getAnalysis(); 


  res.json({
    company_profile: company_profile, 
    company_analysis: company_analysis
  });
});

//Fundamental Data Calls 
//Company Overview
app.post("/company-analysis", cors(), async (req, res) => {
  const body = JSON.parse(JSON.stringify(req.body));
  const { ticker } = body;
  console.log("stocks-api.js 14 | body", body.ticker);
  const request = await fetch(
    `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${ticker}&apikey=${process.env.ALPHA_VANTAGE_API_KEY}`
  );
  const data = await request.json();
  res.json({ data: data });
});

//Income Statement 
app.post("/income-statement", cors(), async (req, res) => {
  const body = JSON.parse(JSON.stringify(req.body));
  const { ticker } = body;
  console.log("stocks-api.js 14 | body", body.ticker);
  const request = await fetch(
    `https://www.alphavantage.co/query?function=INCOME_STATEMENT&symbol=${ticker}&apikey=${process.env.ALPHA_VANTAGE_API_KEY}`
  );
  const data = await request.json();
  res.json({ data: data });
});

//Balance Sheet
app.post("/balance-sheet", cors(), async (req, res) => {
  const body = JSON.parse(JSON.stringify(req.body));
  const { ticker } = body;
  console.log("stocks-api.js 14 | body", body.ticker);
  const request = await fetch(
    `https://www.alphavantage.co/query?function=BALANCE_SHEET&symbol=${ticker}&apikey=${process.env.ALPHA_VANTAGE_API_KEY}`
  );
  const data = await request.json();
  res.json({ data: data });
});

//Cash Flow
app.post("/cash-flow", cors(), async (req, res) => {
  const body = JSON.parse(JSON.stringify(req.body));
  const { ticker } = body;
  console.log("stocks-api.js 14 | body", body.ticker);
  const request = await fetch(
    `https://www.alphavantage.co/query?function=CASH_FLOW&symbol=${ticker}&apikey=${process.env.ALPHA_VANTAGE_API_KEY}`
  );
  const data = await request.json();
  res.json({ data: data });
});


app.listen(process.env.PORT || 8080, () => {
  console.log("index.js 6 | server started...");
});