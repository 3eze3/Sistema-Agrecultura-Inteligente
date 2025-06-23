import express from 'express';
import { PORT } from './config.js';
import userRoutes from './routes/user.routes.js';
import cors from 'cors';


const app = express();

// Middleware : Mediador

app.use((req, res, next) => {

    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.sendStatus(204);
    }
    next();
})

app.use(cors());
app.use(express.json());
app.use(userRoutes);


app.listen(PORT, () => {
    console.log('server on port', PORT)
});