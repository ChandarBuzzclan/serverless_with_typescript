import express from 'express';
import { getSpaces,getContentType } from '../services/contentful';
const router = express.Router();

router.get('/get-all-spaces', getSpaces);
router.get('/get-content-type',getContentType)
//router.get('/contentful/:entryId', getContentFulData);
export default router;
