const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require('./controller')
const { getFortune } = require('./controller')
const { getMotivation } = require('./controller')
const { getLove } = require('./controller')
const { getEncouraged } = require("./controller")

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune)
app.get("/api/motivation", getMotivation)
app.get("/api/love", getLove)
app.get("/api/encourage", getEncouraged)

app.listen(4000, () => console.log("Server running on 4000"));
