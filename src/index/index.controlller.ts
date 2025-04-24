import { Controller, Get, Render } from '@nestjs/common'


@Controller() export class IndexController {
    @Get()
    @Render('')
    public showCaptcha(){

    } public render(){
        
    }

}