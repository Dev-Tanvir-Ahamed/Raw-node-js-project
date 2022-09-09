/*
    * Title : Data (Create, read, update, delete)
    * Description : Data (Create, read, update, delete)
    * Author : Tanvir Ahamed
    * Date :    08/09/22
*/



// dependencies

const fs = require("fs")
const path = require("path")
const { json } = require("stream/consumers")

const lib = {}

// base directory of the data folder
lib.basedir = path.join(__dirname, "../.data/")

// Create File
lib.create = (dir, file, data, callback) => {
    // open file for open
    fs.open(lib.basedir+dir+"/"+file+".json", 'w', (err, fileDescriptor) => {
        if(!err && fileDescriptor){
            // convert data to json
            const stringData = JSON.stringify(data)

            // write data to file and then close it
            fs.writeFile(fileDescriptor, stringData, (err2) => {
                if(!err2){
                    fs.close(fileDescriptor, (err3) => {
                        if(!err3){
                            callback(false)
                        }else{
                            callback("Error closing the file")
                        }
                    })
                } else{
                    callback(err)
                }
            })
        }else{
            callback(err)
        }
    })
}

// Read File
lib.read  = (dir, file, callback ) => {
    fs.readFile(lib.basedir+dir+"/"+file+".json", "utf-8", (err, data) => {
        callback(err, data)
    })
}

// Update existing file

lib.update = (dir, file, data, callback) => {
    // file open for writing
    fs.open(lib.basedir+dir+"/"+file+".json", 'r+', (err, fileDescriptor) => {
        if(!err && fileDescriptor){
            // convert the data to string
            const stringData = JSON.stringify(data)

            // truncate the file
            fs.ftruncate(fileDescriptor, (err) => {
                if(!err){
                    // write to the file and close it
                    fs.writeFile(fileDescriptor, stringData, (err) => {
                        if(!err){
                            // close the file
                            fs.close(fileDescriptor, (err) => {
                                if(!err){
                                    callback(false)
                                }else{
                                    callback("Error closing file")  
                                }
                            })
                        }
                    })
                }
            })
        }else{
            callback(err)
        }
    })
}

lib.delete = (dir, file, callback) => {
    // unlink file
    fs.unlink(lib.basedir+dir+"/"+file+".json", (err) => {
        if(!err){
            callback(false)
        }else{
            callback(err)
        }

    })
}


module.exports = lib;