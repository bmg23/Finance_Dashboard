const request = require('request');
const fs = require('fs'); 

const Alpha_Vantage_URL_Builder = require('../alpha_vantage_url_builder').Alpha_Vantage_URL_Builder;

var url_builder = new Alpha_Vantage_URL_Builder('PAEOPZHFM01XH0VN');

let urls = [];

const ticker = 'PBIP';

urls.push(url_builder.get_Time_Series_Daily(ticker,'compact'));
urls.push(url_builder.get_Company_Overview(ticker));
urls.push(url_builder.get_Balance_Sheet(ticker));
urls.push(url_builder.get_Cash_Flow(ticker));
urls.push(url_builder.get_Income_Statement(ticker));

let file_names = [
    `Time_Series_Daily_${ticker}.json`,
    `Company_Overview_${ticker}.json`,
    `Balance_Sheet_${ticker}.json`,
    `Cash_Flow_${ticker}.json`,
    `Income_Statement_${ticker}.json`
];


console.log(urls);
console.log(file_names);


for(var i = 0; i < 5; i++) {
    console.log(`Requesting: ${urls[i]}`);

    request(urls[i], function (error, response, body) {
        console.error('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        const data = body.json();
        fs.writeFile(file_names[i], data, (err) => {
            if (err) throw err;
            console.log('Data written to file');
        });
    
        setTimeout(function(){ console.log('Waiting to make next api call...'); }, 5000);

    });
    
}

