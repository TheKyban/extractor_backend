import express, { Router } from 'express'
import { Google_News, Simple_News } from '../controllers/controller.js'


/**
 * Express Router
 */

const router = express.Router()


/**
 * POST Method
 */

router.post("/", Simple_News) // For Simple News Link

router.post('/g', Google_News) // For Google News Link

/**
 * Exporting router
 */

export default router;