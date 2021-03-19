const express = require('express');
const router = express.Router();
const Parser = require('rss-parser');
const fs = require("fs");
const path = require('path');

router.get('/get-live-rss-feed', async (req, res) => {
    const parser = new Parser();
    const feed = await parser.parseURL("https://feeds.redcircle.com/b596f9b0-0ee2-4f3f-b64c-cacfa05c44ed");
    return res.status(200).json({ items: feed.items });
});

module.exports = router;