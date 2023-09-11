const express = require("express");
const cors = require("cors");
const jsonGraphqlExpress = require("json-graphql-server");

const PORT = 3333;
const app = express();

app.use(cors());

const data = require("./db.js");
app.use("/", jsonGraphqlExpress.default(data));

app.listen(PORT, () => {
    console.log(`servidor iniciado na porta ${PORT}`);
});
