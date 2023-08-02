import express, { Request, Response } from 'express';
import {PrismaClient} from '@prisma/client';


const postRouter = express.Router()
const prisma = new PrismaClient()

postRouter.get('/', async (req: Request, res: Response) => {
 const result = await prisma.post.findMany()
 return {result}
})

postRouter.post('/', async (req: Request, res: Response) => {
    const body = req.body
})

export default postRouter
