import express from 'express';
import { getApplication, updateApplication } from '../controllers/applications.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', auth,getApplication);
router.patch('/',auth,updateApplication); 

export default router;