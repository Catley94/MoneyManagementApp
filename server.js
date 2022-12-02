const express = require("express");
const app = express();
const port = 4000;
const router = express.Router();
const mongoose = require("mongoose");
const uri = "mongodb://localhost:27017/moneymanagement";
const cors = require('cors');

mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });

const connection = mongoose.connection;

const transactionSchema = new mongoose.Schema({
    monthId: Number,
    amount: Number,
    name: String,
    notes: String,
    paid: Boolean,
    category: String
})

const Transaction = mongoose.model('Transaction', transactionSchema);


connection.once("open", function() {
    console.log("MongoDB database connection established successfully");
});

app.use("/", router);


app.get("/category", function(req, res) {
    console.log("############################################################")
    console.log("#________________________GET FROM /CATEGORY________________#")
    console.log("############################################################")
    console.log("GET: \"/\"")


    // res.send("GET: Request received to homepage")
})


app.post('/addtransaction', function(req, res) {
    console.log("############################################################")
    console.log("#________________________POST FROM /ADDTRANSACTION_________#")
    console.log("############################################################")
    console.log("Transaction: ", req.query)
    // Transaction.find({questionID: req.query.questionID}, function(err, response) {
    //     if(err) {
    //         console.log("error finding in db");
    //         console.log(err)
    //     } else {
    //         console.log("found!")
    //         console.log(response)
    //     }
    // })

})