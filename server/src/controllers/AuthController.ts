import express, { Request, Response } from 'express'


const authRouter = express.Router()


authRouter.post('/create-account', async (req: Request, res: Response) => {
const {username, password} = req.body;

})


export default authRouter