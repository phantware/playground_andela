// import express from "express";

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

port = process.env.PORT || 3000;
app.listen(port, console.log(`App is listening at ${port}`));
