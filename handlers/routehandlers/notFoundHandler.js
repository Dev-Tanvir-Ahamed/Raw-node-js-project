/*
    * Title : Not Found Handler
    * Description :  404 Not Found Handler
    * Author : Tanvir Ahamed
    * Date :    07/09/22
*/

// module scaffholding 

const handler = {}

handler.notFound = (requestProperties, callback) => {
    callback(404, {
        message : "Your requested url was not found"
    })
}

module.exports = handler;