  
// const path = require("path")

module.exports = function (app) {
// this route will render home page
    app.get("/", function (req, res) {
        res.render("home");
    });
// this route will render saved handlebars page
    app.get("/saved", function(req,res) {
        res.render("saved");
    });

}


// //////////////////original////////////
// tech-news-scraper/routes/html-routes.js



// const path = require("path")

// module.exports = function (app) {

//     app.get("/", function (req, res) {
//         res.sendFile(path.join(__dirname, "../public/index.html"));
//     })

//     app.get("/mynews", function(req,res) {
//         res.sendFile(path.join(__dirname, "../public/saved.html"))
//     })

// }

// //////////////////original////////////