const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const sql = require("../DB/db.js")
const PORT = 3000;
// parse requests of contenttype: application/json
app.use(bodyParser.json());
// parse requests of contenttype: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
}));

// set port, listen for requests
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

app.get("/customers", function(req, res) {
    sql.query("SELECT * FROM customers", function(err, sql_result) {
        if (err) {
            console.log("error: ", err);
            res.status(400).send({ message: "error in getting all customers: " + err });
        } else
            res.status(200).send(sql_result);
    });
})