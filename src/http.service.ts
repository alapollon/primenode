//


// 
import {} from '@nestjs/common'; 


/** 
 * this class aggregate headers and filters--
 *  expectancy 
 * 
*/


 

export class HttpFilterServices {

    // ingest  
    constructor () {
        /** local bucket */


    }
    customMessage(
        statusCode: number,
        message: string /**  */,
        data = {},
        // 
      ): responseMessageInterface {
        return {
          statusCode: statusCode,
          message: [message],
          data: data,
        }; } 

}