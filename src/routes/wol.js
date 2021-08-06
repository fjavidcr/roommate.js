import express from 'express';
import { wakeOnLan } from '../controllers';
const wolRouter = express.Router();

wolRouter.get('/wol', wakeOnLan);

export default wolRouter;