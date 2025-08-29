import express, {Application } from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { errorMiddleware } from './middlewares/errorMiddleware'
import chatRoutes from './routes/chatRoutes'

const app :Application = express()

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

// Routes

app.use('/api/v1/chat',chatRoutes )

// Health Check Endpoint

app.get('/health', (req, res) => {
    res.status(200).json({status:"OK"})
})


app.use(errorMiddleware)

export default app;