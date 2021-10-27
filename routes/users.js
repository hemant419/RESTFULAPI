import express from 'express';

import { createUser, getUser, deleteUser, updateUser, selectUser } from '../controllers/users.js';


const router = express.Router();



router.get('/',getUser);

router.post('/', createUser);

router.get('/:id', selectUser);


router.delete('/:id', deleteUser);

router.patch('/:id', updateUser);
export default router;