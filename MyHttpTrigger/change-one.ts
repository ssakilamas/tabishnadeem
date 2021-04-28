import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
  
    let name : string;
   // let responseMessage;

    if (req.method === "GET") {

        name ="Hi " +req.query.name +" How are You??";
       
        //responseMessage = name;
        
    } else {

        name = req.body && req.body.name;
       

        if (!name) {
            
            name = "Post something on the body";
        }
        
    }

    context.res = {
        body : name,
        status : 200
    };
    

};
export default httpTrigger;