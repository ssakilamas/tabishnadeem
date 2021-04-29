
//const httpStatusCode = require('http-status-code');
import httpStatusCode from "http-status-codes";

import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
  
    let name : string;
    let statusCode;
   // let responseMessage;

    if (req.method === "GET") {

        name ="Hi " +req.query.name +" How are You??";
        statusCode = httpStatusCode.OK;
        //responseMessage = name;
        
    } else {

        name = req.body && req.body.name;
        statusCode = httpStatusCode.OK;
       

        if (!name) {
            
            name = "Post something on the body";
            statusCode = httpStatusCode.NOT_FOUND;
        }
        
    }

    context.res = {
        body : name,
        status : statusCode
    };
    

};
export default httpTrigger;