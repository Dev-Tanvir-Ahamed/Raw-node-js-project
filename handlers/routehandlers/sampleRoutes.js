/*
    * Title : Sample Route Handler
    * Description : Sample Route Handler
    * Author : Tanvir Ahamed
    * Date :    07/09/22
*/

// module scaffholding 

const handler = {}

handler.sampleHadler = (requestProperties, callback) => {
    console.log(requestProperties)
    callback(200, {
        message : "Thhis is sample route"
    })
}

module.exports = handler