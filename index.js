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
const environment = require("./helpers/enviromment")
const data = require('./lib/data')

// app object - module scaffolding

const app = {}

// testing file system

data.create('test', 'newFile', {name : 'Tanvir Hasan Limon'}, (err) => {
    console.log(`err was`, err);
})

data.create('test2', 'newFile2', {name : 'Shakib Ahamed', hometown : "Dhaka"}, (err) => {
    console.log(`err was`, err);
})

data.update('test', 'newFile', {name : 'England'}, (err) => {
    console.log(err)
})

data.delete('test2', 'newFile2', (err) => {
    console.log(err);
})

// data.read("test", 'newFile', (err, result) => {
//     console.log(err, result);
// })



// Configaration

app.config = {
    port : 3000
}

// create server

app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(environment.port, () => {
        console.log(`server is runnig ${environment.port}`);
    })
}

// handle Request Response

app.handleReqRes = handleReqRes;
// start the server

app.createServer()

// console.log(app)
// console.log(app.createServer)