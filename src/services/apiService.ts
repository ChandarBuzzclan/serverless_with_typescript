import axios, { AxiosResponse } from 'axios';

interface Space {
    sys: {
      id: string;
      type: string;
    };
    name: string;
    locales: {
      code: string;
      default: boolean;
      name: string;
      fallbackCode: string | null;
    }[];
}

interface ContentType {
    sys: {
      id: string;
    };
    name: string;
}

export class ApiService {
  private baseURL: string;
  private spaceURL: string;
  private contentTypeURL: string;

  constructor(private accessToken: string,private spaceId: string,private environmentId: string) {
    this.baseURL = 'https://cdn.contentful.com/';
    this.spaceURL = `${this.baseURL}spaces/${this.spaceId}?access_token=${this.accessToken}`;
    this.contentTypeURL = `${this.baseURL}spaces/${this.spaceId}/environments/${this.environmentId}/content_types?access_token=${this.accessToken}`
  }

  async getAllSpaces(): Promise<Space[]> {
    try {
      console.log(`here is the url : ${this.spaceURL}`)
      const response: AxiosResponse<any> = await axios.get(this.spaceURL);
      const space = response.data as Space;
      return [{
        sys: {
          id: space.sys.id,
          type: space.sys.type
        },
        name: space.name,
        locales: space.locales
      }];

     
    } catch (error) {
      throw new Error(`Failed to fetch spaces: ${error}`);
    }
  }

  async getContentTypes(): Promise<ContentType[]> {
    
    try {
      console.log(`here is the url : ${this.contentTypeURL}`)
      const response: AxiosResponse<any> = await axios.get(this.contentTypeURL);
      console.log(response.data)
      return response.data.items.map((item: any) => ({
        sys: {
          id: item.sys.id
        },
        name: item.name
      }));
    } catch (error) {
      throw new Error(`Failed to fetch content types: ${error}`);
    }
  }
}
