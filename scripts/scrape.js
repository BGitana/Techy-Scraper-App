// Scrape script

// Require request and cheerio to make sure scrapes are possible

const request = require("request");
const cheerio = require("cheerio");

var scrape = function(cb) {
    request("https://www.theverge.com/tech", function(err, res, body){
        // const $ = cheerio.load(response.data);
        var $ = cheerio.load(body);
        // let newArticles = []
        var newArticles = [];

        $("div .c-entry-box--compact--article").each(function(i, element){
        

                let article = {};

                    if ($(element).children("a").children(".c-entry-box--compact__image").children("noscript").html() === null) {
                        article.imgSrc = "https://place-hold.it/450x300/666/fff/000?text=(Sorry,%20No%20Image)"
                        article.title = $(element).children(".c-entry-box--compact__body").children(".c-entry-box--compact__title").children("a").text()
                        article.link = $(element).children(".c-entry-box--compact__body").children(".c-entry-box--compact__title").children("a").attr("href")
                        article.author = $(element).children(".c-entry-box--compact__body").children(".c-byline").children(".c-byline__item").children("a").text()
                        article.authorLink = $(element).children(".c-entry-box--compact__body").children(".c-byline").children(".c-byline__item").children("a").attr("href")
                    } else {
                        article.imgSrc = $(element).children("a").children(".c-entry-box--compact__image").children("noscript").html().split('"')[3]
                        article.title = $(element).children(".c-entry-box--compact__body").children(".c-entry-box--compact__title").children("a").text()
                        article.link = $(element).children(".c-entry-box--compact__body").children(".c-entry-box--compact__title").children("a").attr("href")
                        article.author = $(element).children(".c-entry-box--compact__body").children(".c-byline").children(".c-byline__item").children("a").text()
                        article.authorLink = $(element).children(".c-entry-box--compact__body").children(".c-byline").children(".c-byline__item").children("a").attr("href")
                       };

                    newArticles.push(article);
                    
        });////////////------DIV-------
            db(newArticles);

    });////////////------request-------
};////////////-----scrape---------------
module.exports = scrape;

// //////////////////////original///////////////////


/////////////////////////original///////////////////