import { Router } from "express";
import { insertMetrica } from '../controllers/user.controllers.js';

const router = Router();

//router.post('/metrica', () => insertMetrica());

router.post('/metrica', insertMetrica);


router.get('/users', (req, res) => {
    res.send('estoy probandole todavia')
});


export default router;


