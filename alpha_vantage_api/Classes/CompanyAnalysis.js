/*
 *
 *
 * 
 * 
 * 
 * 
 * 
 */

 
class ComapnyAnalysis {
    constructor(companyProfile) {
        this.companyProfile = companyProfile; 

    }

    getAnalysis() {
        var duPont = this.duPontAnalysis(); 
        var ratioAnalysis = this.ratioAnalysis(); 
        var timeseriesAnalysis = this.timeseriesAnalysis();  

        let company_analysis = {
            DuPont: duPont, 
            RatioAnalysis: ratioAnalysis, 
            TimeSeriesAnalysis: timeseriesAnalysis
        }

        return company_analysis

    }

    duPontAnalysis() {

        var total_assets1 =  parseInt(this.companyProfile.balance_sheet.annualReports[0].totalAssets, 10);
        var total_assets2 = parseInt(this.companyProfile.balance_sheet.annualReports[1].totalAssets, 10);
        var average_total_assets = (total_assets1 + total_assets2) / 2; 

        var profit_margin = parseInt(this.companyProfile.company_overview.ProfitMargin, 10);
        var asset_turn_over = this.assetTurnover(average_total_assets); 
        var financial_leverage = this.financialLeverage(average_total_assets, total_assets1, total_assets2); 

        var duPont  = profit_margin * asset_turn_over * financial_leverage; 
        
        console.log(`Profit Margin: ${profit_margin}`)
        console.log(`Asset Tunr Over: ${asset_turn_over}`)
        console.log(`Financial Leverage: ${financial_leverage}`)
        console.log(`duPont: ${duPont}`)

        return duPont.toString(10); 
    }

    assetTurnover(average_total_assets) {
        
        var total_revenue = this.companyProfile.income_statement.annualReports[1].totalRevenue;
        total_revenue = parseInt(total_revenue, 10); 
        
        return total_revenue / average_total_assets; 
    }

    financialLeverage(average_total_assets, total_assets1, total_assets2) { 
        var total_liabilities1 = parseInt(this.companyProfile.balance_sheet.annualReports[0].totalLiabilities, 10);
        var total_liabilities2 = parseInt(this.companyProfile.balance_sheet.annualReports[1].totalLiabilities, 10);

        var average_total_equity = ((total_assets1 - total_liabilities1) + (total_assets2 - total_liabilities2)) / 2;  
        return average_total_assets / average_total_equity;
    }

    
    ratioAnalysis() {
        return 'Hello World';
    }


    
    timeseriesAnalysis() {
        return 'Hello World';
    }


} 


module.exports = { ComapnyAnalysis: ComapnyAnalysis };