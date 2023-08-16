import express, { Request, Response } from 'express';
import {Prisma, PrismaClient} from '@prisma/client';
import { create } from 'domain';


const authRouter = express.Router()
const prisma = new PrismaClient()

authRouter.post('/create-account', (req: Request, res: Response) => {
    const {userName, cognitoId } = req.body;

    if(!userName || !cognitoId) throw new Error("No user credentials provided")
    const createdUser = prisma.user.create({
        data: {
            userName: userName,
            cognitoId: cognitoId,
        }
    })

    console.log(createdUser)

    return res.json(createdUser)
})

export default authRouter
