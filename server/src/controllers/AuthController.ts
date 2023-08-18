import express, { Request, Response } from 'express';
import {Prisma, PrismaClient} from '@prisma/client';
import * as bcrypt  from 'bcrypt'
import { create } from 'domain';
import JWTService from '../function/JWT.js'


const authRouter = express.Router()
const prisma = new PrismaClient()

authRouter.post('/create-account', async (req: Request, res: Response) => {
    const {userName, firstName, password, email } = req.body;
    console.log(userName, password)
    if(!userName || !password) throw new Error("No user credentials provided")
    const encryptedPassword = await bcrypt.hash(password, 10)

    const duplcatedUsername = await prisma.user.findUnique({
        where: {
            userName: userName
        }
    })

    const duplicatedEmail = await prisma.user.findUnique({
        where: {
            email: email
        }
    })

    if(duplcatedUsername) {
        return res.json({error: 'Username is already in use'})
    }

    if(duplicatedEmail) {
        return res.json({error: 'Email is already in use'})
    }

    const createdUser = await prisma.user.create({
        data: {
            userName: userName,
            firstName: firstName,
            password: encryptedPassword,
            email: email,
        }
    })

    console.log(createdUser)
    return res.json(createdUser)
})

authRouter.post('/login', async (req: Request, res: Response) => {
    const {userName, password} = req.body;

    let authenticatedUser = await prisma.user.findUnique({
        where: {
            userName: userName,
        }
    })

    const passwordCompare = await bcrypt.compare(password, authenticatedUser.password)

    if(!passwordCompare) {
        return res.json({error: 'Invalid Login Credentails'})
    }


    try {
        const accessToken = await JWTService.createToken(userName);
        
        res.cookie("access-token", accessToken, {
            maxAge: 60*60*24*2*1000,
            httpOnly: true
        })
    }
    catch {
        throw new Error("Invalid Token")
    }
})
export default authRouter
