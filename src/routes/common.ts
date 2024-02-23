import { celebrate , Joi , Segments } from 'celebrate';
import express from 'express';
import { commonOne, commonTwo } from '../services/common';
const router = express.Router();

router.get('/common-one',commonOne);
router.post('/common-two',celebrate({
   [Segments.BODY]: Joi.object().keys({
     name: Joi.string().required(),
     age: Joi.string().required()
   })
}),commonTwo);

export default router;