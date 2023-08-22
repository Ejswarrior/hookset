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
    const {content, likes, userId} = req.body
    const newPost = await prisma.user.update({
        where: {
            id: userId
        },
        data: {
            Posts: {
                create: {
                    content: content,
                    likes: 0,
                }
            }

        },
        include: {
            Posts: true
        }
    })

    console.log(newPost)
    res.json(newPost)
})

postRouter.put('/:id', async (req: Request, res: Response) => {
    const {content, likes, userId} = req.body
    const id = req.params.id
    const updatedPost = await prisma.post.update({
        where: {
            id: id
        },
        data: {
            content: content,
            likes: likes
        }
    })

    res.json(updatedPost)
})

postRouter.delete('/:id', async (req: Request, res: Response) => {
    const id = req.params.id;

    await prisma.post.delete({
        where: {
            id: id,
        }
    })
})

postRouter.get(':/id', async (req: Request, res: Response) => {
    const id = req.params.id;

    const post = await prisma.post.findUnique({
        where: {
            id: id,
        }
    })
})

export default postRouter
