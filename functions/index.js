require("https").globalAgent.keepAlive = true;

const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");

const app = express();
admin.initializeApp();

const functionOne = require("./functionOne/routes")(app);
const functionTwo = require("./functionTwo/routes")(app);

const runtimeOpts = {
  timeoutSeconds: 60,
  memory: "512MB",
  minInstances: 2,
};

exports.functionOne = functions
    .runWith(runtimeOpts)
    .region(process.env.API_REGION)
    .https.onRequest(functionOne);

exports.functionTwo = functions
    .runWith(runtimeOpts)
    .region(process.env.API_REGION)
    .https.onRequest(functionTwo);
