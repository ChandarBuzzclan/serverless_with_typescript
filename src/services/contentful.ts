import { Request, Response } from 'express';
import { ApiService } from './apiService';


const SPACE_ID = '3kmi4y9gzll5';
const ENVIRONMENT = 'master'; // or 'development'
const ACCESS_TOKEN = 'i8ROFeBMRcdmRXsv91uL4BNyJidpIFIPwMDRd3Kg-FM';
const apiService = new ApiService(ACCESS_TOKEN,SPACE_ID,ENVIRONMENT);

async function getSpaces(req:Request,res:Response) {
    console.log(`calling api from route`)
    try {
        const spaces = await apiService.getAllSpaces();
        console.log(spaces);
      } catch (error) {
        console.error(error);
      }
}

async function getContentType(req:Request,res:Response) {
    console.log(`calling api from route`)
    try {
        const contentTypes = await apiService.getContentTypes();
        console.log(contentTypes);
      } catch (error) {
        console.error(error);
      }
}




export { getSpaces , getContentType }