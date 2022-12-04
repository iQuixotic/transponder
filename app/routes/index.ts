// imports and variables
import { Router } from 'express';
import path from 'path';
import controller from '../controllers';


const router = Router();

// // route prefixes and middlewares called
router.get('/:requestFile', controller.getSingleRequest);

export default router;