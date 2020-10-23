/* Alpha Vantage URL Builder
 *
 * Author: Brian Goins 
 * Date: 9/23/2020
 * 
 * Goal: This class is used to build all the urls needed to make API calls to Alpha Vantage, 
 *       helps store all possible functions and makes code much cleaner in other files. 
 * 
 * 
 * Documentation for each function details: 
 *  FUNCTION NAME
 *    Required Args
 *    Optional Args
 *   
 * 
 * Note: Symbol and API Key left out of required args 
 * 
 * Check out: https://www.alphavantage.co/documentation/
 *            For more info on each function.

 * 
 *      
 */ 


class Alpha_Vantage_URL_Builder {

    constructor(key) {
        this.ALPHA_VANTAGE_API_KEY = key;
    }


    //***Stock Time Series***//
    
    /* TIME_SERIES_INTRADAY
     *  DEF: Returns intraday time series of the equity specified
     *       Covers 1-2 months
     *  Required Args:
     *      Intervals = 1min, 5min, 15min, 30min, 60min 
     *  Optional Args: 
     *      Adjusted = true or false
     *      Outputsize = compact (100 data points), full (full-length intraday time series) 
     *      Datatype = json, csv
     */ 
    get_Time_Series_Intraday(symbol, interval, adjusted=null, outputsize=null, datatype=null) { 
        var url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=${interval}`; 
    
        if(adjusted != null) {
            url = url.concat(`&adjusted=${adjusted}`); 
        }
    
        if(outputsize != null) {
            url = url.concat(`&outputsize=${outputsize}`); 
        }
    
        if(datatype != null) {
            url = url.concat(`&datatype=${datatype}`); 
        }
    
        url = url.concat(`&apikey=${this.ALPHA_VANTAGE_API_KEY}`)
        
        console.log(url);
        return url;
    }


   /* TIME_SERIES_INTRADAY_EXTENDED 
    *   DEF: Returns historical intraday timeseries for the trailing 2 years,
    *        covering over 2 million data points per ticker. 
    *   Required Args: 
    *       Intervals: 1min, 5min, 15min, 30min, 60min 
    *       Slice: year1month1, year1month2, year1month3, ..., year1month11, year1month12, year2month1, year2month2, year2month3, ..., year2month11, year2month12 
    *   Optional Args: 
    *       Adjusted: true or false
    */          
    get_Time_Series_Intraday_Extended(symbol, interval, slice, adjusted=null) { 
        var url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=${interval}&slice=${slice}`; 
        
        if(adjusted != null) {
            url = url.concat(`&adjusted=${adjusted}`); 
        }

        url = url.concat(`&apikey=${this.ALPHA_VANTAGE_API_KEY}`)

        console.log(url);
        return url;
    }

 
   /* TIME_SERIES_DAILY 
    *   DEF: Returns 'raw' daily time series 
    *       (date, daily open, daily high, daily low, daily close, daily volume)
    *
    *   Required Args: 
    *       N/A
    *   Optional Args:
    *      Outputsize = compact (100 data points), full (20+ years of historical data) 
    *      Datatype = json, csv
    */   
    get_Time_Series_Daily(symbol, outputsize=null, datatype=null) { 
        var url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}`; 
        
        if(outputsize != null) {
            url = url.concat(`&outputsize=${outputsize}`); 
        }
    
        if(datatype != null) {
            url = url.concat(`&datatype=${datatype}`); 
        }

        url = url.concat(`&apikey=${this.ALPHA_VANTAGE_API_KEY}`)

        console.log(url);
        return url;
    }
   
    
   /* TIME_SERIES_DAILY_ADJUSTED 
    *   DEF: Returns 'raw' daily time series, where daily close is adjusted
    *       (date, daily open, daily high, daily low, daily close adjusted, daily volume)
    * 
    *   Required Args: 
    *       N/A
    *   Optional Args:
    *      Outputsize = compact (100 data points), full (20+ years of historical data) 
    *      Datatype = json, csv
    */   
    get_Time_Series_Daily_Adjusted(symbol, outputsize=null, datatype=null) { 
        var url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol}`; 
       
        if(outputsize != null) {
            url = url.concat(`&outputsize=${outputsize}`); 
        }
    
        if(datatype != null) {
            url = url.concat(`&datatype=${datatype}`); 
        }

        url = url.concat(`&apikey=${this.ALPHA_VANTAGE_API_KEY}`)

        console.log(url);
        return url;
    }

    
   /* TIME_SERIES_WEEKLY 
    *   DEF: Returns weekly time series of 
    *        the global equity specified, covering 20+ years of historical data.
    *        (last trading day of each week, weekly open, weekly high, 
    *        weekly low, weekly close, weekly volume) 
    *
    *   Required Args: 
    *       N/A
    *   Optional Args:
    *     Datatype = json, csv
    */ 
    get_Time_Series_Weekly(symbol, datatype=null) { 
        var url = `https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=${symbol}`; 
    
        if(datatype != null) {
            url = url.concat(`&datatype=${datatype}`); 
        }

        url = url.concat(`&apikey=${this.ALPHA_VANTAGE_API_KEY}`)

        console.log(url);
        return url;
    }

    
   /* TIME_SERIES_WEEKLY_ADJUSTED
    *   DEF: Returns weekly time series of the global equity specified 
    *        where weekly close is adjusted, covering 20+ years of historical data.
    *        (last trading day of each week, weekly open, weekly high, 
    *        weekly low, weekly close, weekly volume) 
    *
    *   Required Args: 
    *       N/A
    *   Optional Args:
    *     Datatype = json, csv
    */
    get_Time_Series_Weekly_Adjusted(symbol, datatype=null) { 
        var url = `https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=${symbol}`;
        
        if(datatype != null) {
            url = url.concat(`&datatype=${datatype}`); 
        }

        url = url.concat(`&apikey=${this.ALPHA_VANTAGE_API_KEY}`)


        console.log(url);
        return url;
    }

   /* TIME_SERIES_MONTHLY
    *   DEF: Returns monthly time series of the global equity specified 
    *        covering 20+ years of historical data.
    *        (last trading day of each month, monthly open, monthly high, 
    *        monthly low, monthly close, monthly volume) 
    *
    *   Required Args: 
    *       N/A
    *   Optional Args:
    *     Datatype = json, csv
    */
    get_Time_Series_Monthly(symbol, datatype=null) { 
        var url = `https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${symbol}`; 
        
        if(datatype != null) {
            url = url.concat(`&datatype=${datatype}`); 
        }

        url = url.concat(`&apikey=${this.ALPHA_VANTAGE_API_KEY}`)


        console.log(url);
        return url;
    }

   /* TIME_SERIES_MONTHLY_ADJUSTED
    *   DEF: Returns monthly time series of the global equity specified 
    *        where monthly close is adjusted, covering 20+ years of historical data.
    *        (last trading day of each month, monthly open, monthly high, 
    *        monthly low, monthly close, monthly volume) 
    *
    *   Required Args: 
    *       N/A
    *   Optional Args:
    *     Datatype = json, csv
    */
    get_Time_Series_Monthly_Adjusted(symbol, datatype=null) { 
        var url = `https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY_ADJUSTED&symbol=${symbol}`; 
        
        if(datatype != null) {
            url = url.concat(`&datatype=${datatype}`); 
        }

        url = url.concat(`&apikey=${this.ALPHA_VANTAGE_API_KEY}`)

        console.log(url);
        return url;
    }


    /* Quote Endpoint: GLOBAL_QUOTE
    *   DEF: A lightweight alternative to the time series APIs, 
    *        this service returns the price and volume information for a 
    *        security of your choice.
    *
    *   Required Args: 
    *       N/A
    *   Optional Args:
    *     Datatype = json, csv
    */
    get_Quote_Endpoint(symbol, datatype=null) { 
        var url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}`; 
        
        if(datatype != null) {
            url = url.concat(`&datatype=${datatype}`); 
        }

        url = url.concat(`&apikey=${this.ALPHA_VANTAGE_API_KEY}`)


        console.log(url);
        return url;
    }
    
    /* Search Endpoint: SYMBOL_SEARCH
    *   DEF: Returns the best-matching symbols and market info based 
    *        on keywords or letters.  
    *
    *   Required Args: 
    *       keywords
    *   Optional Args:
    *     Datatype = json, csv
    */
    get_Search_Endpoint(keywords) { 
        var url = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${keywords}`; 
        
        if(datatype != null) {
            url = url.concat(`&datatype=${datatype}`); 
        }

        url = url.concat(`&apikey=${this.ALPHA_VANTAGE_API_KEY}`)

        console.log(url);
        return url;
    }

    //***Fundamental Data***//
    
    /* Company Overview: OVERVIEW
    *   DEF: Returns company information, financial ratios, and 
    *        other key metrics for the equity specified  
    * 
    *   Required Args: 
    *     N/A
    *   Optional Args:
    *     N/A
    */
    get_Company_Overview(symbol) { 
        var url = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol}&apikey=${this.ALPHA_VANTAGE_API_KEY}`; 
        
        console.log(url);
        return url;
    }

  
    /* INCOME_STATEMENT
    *   DEF: Returns annual and quarterly income statements for the company of
    *        interest
    *
    *   Required Args: 
    *     N/A
    *   Optional Args:
    *     N/A
    */
    get_Income_Statement(symbol) { 
        var url = `https://www.alphavantage.co/query?function=INCOME_STATEMENT&symbol=${symbol}&apikey=${this.ALPHA_VANTAGE_API_KEY}`; 
        
        console.log(url);
        return url;
    }
    

    /* BALANCE_SHEET
    *   DEF: Returns annual and quarterly balance sheet for the company of
    *        interest
    *
    *   Required Args: 
    *     N/A
    *   Optional Args:
    *     N/A
    */
    get_Balance_Sheet(symbol) { 
        var url = `https://www.alphavantage.co/query?function=BALANCE_SHEET&symbol=${symbol}&apikey=${this.ALPHA_VANTAGE_API_KEY}`; 
        
        console.log(url);
        return url;
    }
    
    
    /* CASH_FLOW
    *   DEF: Returns annual and quarterly cash flows for the company of
    *        interest
    *
    *   Required Args: 
    *     N/A
    *   Optional Args:
    *     N/A
    */
    get_Cash_Flow(symbol) { 
        var url = `https://www.alphavantage.co/query?function=CASH_FLOW&symbol=${symbol}&apikey=${this.ALPHA_VANTAGE_API_KEY}`; 
        
        console.log(url);
        return url;
    }

    //Listing & Delisting Status
    /* Listing & Delisting Status: LISTING_STATUS
    *   DEF: Returns a list of active or delisted US Stocks.  
    *
    *   Required Args: 
    *     N/A
    *   Optional Args:
    *     date: YYYY-MM-DD Format
    *     state: active (list of actively traded stocks), delisted (list of delisted stocks)
    */
    get_Listing_Status(symbol, date=null, state=null) { 
        var url = `https://www.alphavantage.co/query?function=LISTING_STATUS&symbol=${symbol}`; 
        
        if(date != null) {
            url = url.concat(`&date=${date}`); 
        }
    
        if(state != null) {
            url = url.concat(`&state=${state}`); 
        }

        url = url.concat(`&apikey=${this.ALPHA_VANTAGE_API_KEY}`)


        console.log(url);
        return url;
    }

    //Technical Indacators// 
    //Still Needed//

}

module.exports = { Alpha_Vantage_URL_Builder: Alpha_Vantage_URL_Builder };