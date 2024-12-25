import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-oauth2';

@Injectable()
export class AuthService extends PassportStrategy(Strategy, 'oauth2') {
  constructor() {
    super({
      authorizationURL: process.env.OAUTH2_AUTHORIZATION_URL,
      tokenURL: process.env.OAUTH2_TOKEN_URL,
      clientID: process.env.OAUTH2_CLIENT_ID,
      clientSecret: process.env.OAUTH2_CLIENT_SECRET,
      callbackURL: process.env.OAUTH2_CALLBACK_URL,
    });
  }

}