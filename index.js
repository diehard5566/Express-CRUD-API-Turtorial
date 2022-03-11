import express from "express";
import bodyParser from 'body-parser';

import usersRoutes from './routes/users.js';

const app = express();
const PORT = 8000;

app.use(bodyParser.json());

app.use('/users', usersRoutes);

app.get('/', (req, res) => {
    console.log('[TEST]');

    res.send('Hello.')
})


app.listen(PORT, () => {
    console.log(`Server runnning on port: http://localhost${PORT}`);
})

