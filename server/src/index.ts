import express from 'express'

const app = express()


app.get('/hi' , (req: Request, res: Response) => {
    console.log('/hi')
})