const express = require("express");
const router = express.Router();
const { mappings } = require("./mappings");
const fs = require("fs");
const path = require("path");

function serveJSON(filePath, req, res) {
    let jsonPath = path.join(__dirname, filePath);
    console.info(filePath);
    fs.readFile(jsonPath, (err, data) => {
        if (err) {
            res.status(404).send({ message: "Resource Not Found" });
        } else {
            res.json(JSON.parse(data));
        }
    })
}

function logRequestDetailsToConsole(req) {
    console.info(req.url + " : " + req.method);
    if (req.method === "POST") console.log(req.body);
    if (req.method === "GET") {
        console.log(req.params);
        console.log(req.query);
    }
}


router.get("/services/dashboard/getUser", (req, res) => {
    logRequestDetailsToConsole(req);
    serveJSON(mappings.getUser.jsonPath, req, res);
    // serveJSON(mappings.getUser.errorJsonPath, req, res);
})

module.exports = router;