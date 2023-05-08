import app from "./app.js"


/**
 * PORT
 */
const PORT = process.env.PORT || 7575



/**
 * Listening the server
 */


app.listen(PORT, () => {
    console.log(`SERVER STARTED ON PORT ${PORT}...`)
})
