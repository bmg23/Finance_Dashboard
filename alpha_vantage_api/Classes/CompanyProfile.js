/* Company.js 
 * 
 * Author: Brian Goins 
 * Date: 9/23/2020
 * 
 * Goal: Take data on a specific equity from Alpha Vantage, 
 *       Run analysis on specific parts 
 *       Retrun one object called company profile containing 
 *       initial data with additional analysis. 
 * 
 * 
 */ 

class CompanyProfile {
    constructor() {}

    generate_Company_Profile(company_overview, balance_sheet, income_statement, cash_flow, time_series) {
        company_profile = {
            company_overview: company_overview, 
            balance_sheet: balance_sheet, 
            income_statement: income_statement, 
            cash_flow: cash_flow, 
            time_series: time_series
        }
    }

}

module.exports = { CompanyProfile: CompanyProfile}