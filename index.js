const express = require("express");
const path = require("path");
const fetch = require("node-fetch");
const { json } = require("express");
const app = express();


app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "/public")));

app.get("/", async (req, res) => {
  const response = await fetch('https://737a5a900fe74f04b401499ba4544da8:@storage.scrapinghub.com/logs/461836/1/?format=text');
        let raw_content = await response.text();
        raw_content = raw_content.split("\n");
        let json_content = raw_content[raw_content.lastIndexOf("SCRAPEROUT:") - 1];
        json_content = json_content.substring(json_content.indexOf("]") + 2);
        scriptFile = "main_content.js";
        
        res.render('index', {
            json_content,
            scriptFile
        });
});

app.get("/celebs", async (req, res) => {
  const response = await fetch('https://737a5a900fe74f04b401499ba4544da8:@storage.scrapinghub.com/logs/462166/2/?format=text');
        let raw_content = await response.text();
        raw_content = raw_content.split("\n");
        let json_content = raw_content[raw_content.lastIndexOf("SCRAPEROUT:") - 1];
        json_content = json_content.substring(json_content.indexOf("]") + 2);
        scriptFile = "celeb.js";
        
        res.render('index', {
            json_content,
            scriptFile
        });
});

app.get('/sales', async (req, res) => {
  const response = await fetch('https://salesrecommend.000webhostapp.com');
  let json_content = await response.text();
  const scriptFile = "sales.js";
  res.render('index', {
      json_content,
      scriptFile
  });
});

app.get('/tryon', async(req, res) => {
  const json_content = "";
  const scriptFile = "tryon.js";
  res.render('tryonIndex', {
    json_content,
    scriptFile,
  });
});

app.get('/search', async(req, res) => {
  const searchText = req.query.search;
  const response = await fetch('http://c56c60ea9433.ngrok.io/?search=' + searchText);
  let json_content = await response.text();
  const scriptFile = "searchResults.js";

  res.render('search', {
    json_content,
    scriptFile,
    searchText
  });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("server started on port 3000");
});