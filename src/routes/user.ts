import express from 'express';
import { userInfo, getContentFulData } from '../services/user';
const router = express.Router();

router.get('/user-info', userInfo);
router.get('/contentful/:entryId', getContentFulData);
export default router;
