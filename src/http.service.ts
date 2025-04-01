//


// 



/** */


 

export class HttpFilterServices {

    // ingest incoming headers 
    constructor () {


    }
    customMessage(
        statusCode: number,
        message: string,
        data = {},
        // 
      ): responseMessageInterface {
        return {
          statusCode: statusCode,
          message: [message],
          data: data,
        }; } 

}