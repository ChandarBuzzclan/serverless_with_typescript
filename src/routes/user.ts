import express from 'express';
import { userInfo }  from '../services/user'
const router = express.Router();

router.get('/user-info',userInfo);
export default router;