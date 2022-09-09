/*
    * Title : Handle Request Response
    * Description : Handle Request Response
    * Author : Tanvir Ahamed
    * Date :    07/09/22
*/


// dependencies

const url = require("url")
const { StringDecoder } = require("string_decoder")
const routes = require("../routes")
const {notFound} = require("../handlers/routehandlers/notFoundHandler.js")

// module scafholding

const handler = {}

handler.handleReqRes = (req, res) => {
    const parsedUrl = url.parse(req.url, true)
    const pathName = parsedUrl.pathname  // /sample
    const trimedPath = pathName.replace(/^\/+|\/+$/g, "")
    const method = req.method.toLowerCase()
    const queryStringObj = parsedUrl.query
    const headers = req.headers

    const requestProperties = {
        parsedUrl,
        pathName,
        trimedPath,
        method,
        queryStringObj,
        headers
    }

    const choosenHandler = routes[trimedPath] ? routes[trimedPath] : notFound



    // for POST Method
    const decoder = new StringDecoder("utf-8")
    let realData = ""
    req.on("data", (buffer) => {
        realData += decoder.write(buffer)
    })

    req.on("end", () => {
        realData += decoder.end()
        // console.log(realData)

        choosenHandler(requestProperties, (statusCode, payload) => {
            statusCode = typeof(statusCode) == "number" ? statusCode : 500;
            payload = typeof(payload) === "object" ? payload : {}
    
            const payloadString = JSON.stringify(payload)
    
            res.writeHead(statusCode)
            // console.log(res.writeHead(statusCode));
            res.end(payloadString)
            
        })
        
    })

    // console.log("parsed", parsedUrl)

    // response handle
    // res.end("Hello world")
    
}




module.exports = handler;