import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class CloudflareService {
  private readonly apiUrl = 'https://api.cloudflare.com/client/v4';
  private readonly apiToken = process.env.CLOUDFLARE_API_TOKEN; // Ensure you set this in your environment variables

  async createAsset(zoneId: string, assetName: string, assetContent: string): Promise<any> {
    const url = `${this.apiUrl}/zones/${zoneId}/assets`;
    const headers = {
      'Authorization': `Bearer ${this.apiToken}`,
      'Content-Type': 'application/json'
    };
    const data = {
      name: assetName,
      content: assetContent
    };

    try {
      const response = await axios.post(url, data, { headers });
      return response.data;
    } catch (error) {
      console.error('Error creating asset on Cloudflare:', error);
      throw error;
    }
  }

  async getAsset(zoneId: string, assetId: string): Promise<any> {
    const url = `${this.apiUrl}/zones/${zoneId}/assets/${assetId}`;
    const headers = {
      'Authorization': `Bearer ${this.apiToken}`
    };

    try {
      const response = await axios.get(url, { headers });
      return response.data;
    } catch (error) {
      console.error('Error fetching asset from Cloudflare:', error);
      throw error;
    }
  }
}