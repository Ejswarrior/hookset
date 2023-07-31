import express, { Request, Response } from 'express'
import { config } from 'dotenv'
import bodyParser from 'body-parser'
import authRouter from './controllers/AuthController.js'
import postRouter from './controllers/postController.js'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const processEnv = config().parsed;

const firebaseConfig = {
  apiKey: processEnv.apiKey,
  authDomain: processEnv.authDomain,
  projectId: processEnv.projectId,
  storageBucket: processEnv.storageBucket,
  messagingSenderId: processEnv.messagingSenderId,
  appId: processEnv.appId,
  measurementId: processEnv.measurementId
};

// Initialize Firebase
const fireApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(fireApp);


const app = express()


app.get('/hi' , (req: Request, res: Response) => {
    console.log('/hi')
})

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));



app.use('/post', postRouter)

app.listen(processEnv.PORT, () => {
    console.log('server running')
})