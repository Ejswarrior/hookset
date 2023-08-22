import express from 'express';
import { config } from 'dotenv';
import bodyParser from 'body-parser';
import postRouter from './controllers/postController.js';
const app = express();
const processEnv = config().parsed;
app.get('/hi', (req, res) => {
    console.log('/hi');
});
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/post', postRouter);
app.listen(processEnv.PORT, () => {
    console.log('server running');
});
//# sourceMappingURL=index.js.map