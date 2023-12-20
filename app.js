const express = require("express");
const app = express();

app.get("/", (req,res) => {
    const date = new Date();
    const month = date.getMonth()+1
    const year = date.getFullYear();
    const day = date.getDate();
    const result = `${day}-${month}-${year}`
    res.send(result)
});

app.listen(3000);
module.exports = app