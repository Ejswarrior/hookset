
import express, { Request, Response } from 'express';
import {Prisma, PrismaClient} from '@prisma/client';
import * as bcrypt  from 'bcrypt'
import JWTService from '../function/JWTService.ts'


const authRouter = express.Router()
const prisma = new PrismaClient()

authRouter.post('/create-account', async (req: Request, res: Response) => {
    const {userName, firstName, password, email } = req.body;
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

})

authRouter.post('/login', async (req: Request, res: Response) => {
    const {userName, password} = req.body;

    const authenticatedUser = await prisma.user.findUnique({
        where: {
            userName: userName,
        }
    })

    const passwordCompare = await bcrypt.compare(password, authenticatedUser.password)

    if(!passwordCompare) {
        return res.json({error: 'Invalid Login Credentails'})
    }

    try {
        const accessToken = await JWTService.createToken(authenticatedUser.userName);
        
        res.cookie("access-token", accessToken, {
            maxAge: 60*60*24*2*1000,
            httpOnly: true
        })

        return res.json({
            userName: authenticatedUser.userName,
            firstName: authenticatedUser.firstName,
            userId: authenticatedUser.id
        })
    }
    catch(error) {
        return res.json({error: "Invalid Credentials"})
    }
})

authRouter.get('/login-check', async (req: Request, res: Response) => {
    const {userId} = req.body;

    const cookie = req.cookies['access-token']
    const authenticatedUser = await prisma.user.findUnique({
        where: {
            id: userId
        }
    }).catch(() => {
       return res.json({error: 'User is not logged in'})
    })

    if(authenticatedUser) {
        return res.json({success: 'logged-in'})
    }
})

export default authRouter
