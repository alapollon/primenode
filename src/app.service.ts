import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  processMacAddress(macAddress: string): string {
    // Add any processing logic here
    return `Processed MAC address: ${macAddress}`;
  }
}
