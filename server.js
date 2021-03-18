const express = require('express');
const Parser = require('rss-parser');
var cors = require('cors')
const fs = require("fs");
const path = require('path');
const app = express();

app.use(cors());
app.use(express.json());

// static foller for public data like images
app.use("/static", express.static(path.join(__dirname + '/Public')));

app.get("/", async (req, res) => {
    const parser = new Parser();

    const feed = await parser.parseURL("https://feeds.redcircle.com/b596f9b0-0ee2-4f3f-b64c-cacfa05c44ed");

    let items = [];

    // Clean up the string and replace reserved characters
    const fileName = "data.json";

    if (fs.existsSync(fileName)) {
        items = require(`./${fileName}`);
    }

    // Add the items to the items array
    await Promise.all(feed.items.map(async (currentItem) => {

        // Add a new item if it doesn't already exist
        if (items.filter((item) => isEquivalent(item, currentItem)).length <= 0) {
            items.push(currentItem);
        }

    }));

    // Save the file
    fs.writeFileSync(fileName, JSON.stringify(items));

    return res.status(200).json({ items });

});

app.get("/getRssFeed", (req, res) => {
    let items = [];

    if (fs.existsSync("data.json")) {
        items = require("./data.json");
        console.log(items[0].title);
    } else {
        return res.status(400).json({ error: "No File Exist" });
    }

    return res.status(200).json({ items })

});

app.get('/get-live-rss-feed', async (req, res) => {
    const parser = new Parser();
    let items = [];
    const feed = await parser.parseURL("https://feeds.redcircle.com/b596f9b0-0ee2-4f3f-b64c-cacfa05c44ed");

    return res.status(200).json({ items: feed.items });

})

const PORT = process.env.PORT || 4000;

// product Build
if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname + '/client/build/index.html'));
    });
}


app.listen(PORT, () => {
    console.log("Server is Running at port " + PORT);
});


function isEquivalent(a, b) {
    // Create arrays of property names
    let aProps = Object.getOwnPropertyNames(a);
    let bProps = Object.getOwnPropertyNames(b);

    // if number of properties is different, objects are not equivalent
    if (aProps.length != bProps.length) {
        return false;
    }

    for (let i = 0; i < aProps.length; i++) {
        let propName = aProps[i];

        // if values of same property are not equal, objects are not equivalent
        if (a[propName] !== b[propName]) {
            return false;
        }
    }

    // if we made it this far, objects are considered equivalent
    return true;
}