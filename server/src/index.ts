import express, { Request, Response } from 'express'
import { config } from 'dotenv'
import bodyParser from 'body-parser'
import postRouter from './controllers/postController.ts'
import cors from 'cors'
import authRouter from './controllers/AuthController.ts'

const app = express()

const processEnv = config().parsed;

app.get('/hi' , (req: Request, res: Response) => {
    console.log('/hi')
})

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'));
app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/posts', postRouter)
app.use('/auth', authRouter)

app.listen(processEnv.PORT, () => {
    console.log('server running')
})