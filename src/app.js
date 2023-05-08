import express from 'express'
import router from './routes/route.js'
import cors from 'cors'

const app = express()

/**
 * App uses
 */
app.use(cors({
    origin: "*",
}))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


/**
 * App Routes
 */
app.use("/news", router)

/**
 * App Exports
 */


export default app