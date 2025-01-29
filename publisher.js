import 'dotenv/config'; // Carrega variáveis do .env

import express from 'express';
import { publish } from './queue.js';

const app = express();

app.use(express.json());
 
const router = express.Router();
 
router.post('/channel1', (req, res) => {
    publish("channel1", req.body);
    res.json({ message: 'Your request will be processed by Channel 1!' });
});
 
router.post('/channel2', (req, res) => {
    publish("channel2", req.body);
    res.json({ message: 'Your request will be processed by Channel 2!' });
});
 
app.use('/', router);
 
app.listen(3000);
 