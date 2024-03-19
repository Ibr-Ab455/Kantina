import express from 'express';
import { signout } from '../controller/user.controller.js';

const router = express.Router();

router.post('/signout', signout);


export default router;