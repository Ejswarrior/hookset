import express, { Request, Response } from 'express';
import {Prisma, PrismaClient} from '@prisma/client';


const postRouter = express.Router()
const prisma = new PrismaClient()

postRouter.get('/', async (req: Request, res: Response) => {
 const result = await prisma.post.findMany()
 console.log('hit get route')
 res.json(result)
})

postRouter.post('/', async (req: Request, res: Response) => {
    const {content, likes} = req.body
    console.log('hello')
    const newPost = await prisma.post.create({
        data: {
            content: content,
        }
    })


    console.log(newPost)
    res.json(newPost)
})

export default postRouter
