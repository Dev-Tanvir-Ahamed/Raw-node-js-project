/*
    * Title : Evironment Setup
    * Description : Evironment Setup
    * Author : Tanvir Ahamed
    * Date :    08/09/22
*/

// dependencies




// module scaffholding

const environments = {}

environments.staging = {
    port : 3000,
    envName : "staging"
}

environments.production = {
    port : 5000,
    envName : "production"
}


// determine which enveiromnent was passed

const currentEnviromnent = typeof(process.env.NODE_ENV) == "string" ? process.env.NODE_ENV : "staging"   // process.env.NODE_ENV = production
console.log(currentEnviromnent);
// export corresponding environment object

const environmentToExport = typeof(environments[currentEnviromnent]) == "object" ? environments[currentEnviromnent] : environments.staging
console.log(environmentToExport);

module.exports = environmentToExport

