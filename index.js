/*
    * Title : API Monitoring App
    * Description : API Monitoring App
    * Author : Tanvir Ahamed
    * Date :    06/09/22
*/

// Dependencies

const { transcode } = require("buffer")
const http = require("http")
const {handleReqRes} = require("./helpers/handleReqRes")

// app object - module scaffolding

const app = {}


// Configaration

app.config = {
    port : 3000
}

// create server

app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () => {
        console.log(`server is runnig ${app.config.port}`);
    })
}

// handle Request Response

app.handleReqRes = handleReqRes;
// start the server

app.createServer()

// console.log(app)
// console.log(app.createServer)