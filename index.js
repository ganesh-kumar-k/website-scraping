const scrape = require('website-scraper');

const options = {
    urls : ['https://nodejs.org'],
    directory: './node-website',
}

//with promise
scrape(options).then((result) => {
    console.log("Website succesfully downloaded");
}).catch((err) => {
    console.log("An error ocurred", err);
});

