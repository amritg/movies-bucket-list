"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
let app = express();
const port = 5000;
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.listen(port, () => {
    console.info('Server running at Port:', port);
});
