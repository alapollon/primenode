import { Module } from '@nestjs/common'
import { } from '@react-ssr-prepass'
import { ReactSSRContext, ReactSSRProvider, ReactSSRClass } from '@react-ssr/core'
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';


@Module({
    providers:[ReactSSRProvider, ReactSSRClass, ReactSSRContext],
    controllers:[]
}) export class IndexModule {
    

} 