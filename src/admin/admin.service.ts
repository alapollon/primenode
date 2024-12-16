import { AppService } from '.././app.service.js'
export class AdminService {
    constructor (
        private appService: AppService 
    ){}

    async deleteByUuidOrPath(identifier: string, myboolean ): Promise<void> {
        const route = await this.appService.findOne({
          where: [{ id: identifier }, { path: identifier }],
        });
        if (route) {
          await this.appService.remove(route);
        }
      }
}