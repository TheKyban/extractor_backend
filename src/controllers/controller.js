import cheerio from 'cheerio'
import unfluff from 'unfluff'
import axios from 'axios'


/**
 * this method is for simple news
 */

export const Simple_News = async (req, res) => {

    try {

        /**
         * Getting url for request
         */

        const { URL } = req.body

        /**
         * Fetch url to get html
         */


        const response = await axios(URL)

        /**
         * Extracting content from html and sending response
         */

        res.json(Extracting_And_Filtering_Content(response.data))

    } catch (error) {
        console.log(error)
    }

}


/**
 * This method is for google news
 */
export const Google_News = async (req, res) => {

    try {

        const { URL } = req.body

        /**
         * Fetching url to get html
         */

        const response = await axios(URL)

        /**
         * Extracting news link inside google news link
         */

        const $ = cheerio.load(response.data)
        const NewURL = $('a').text()

        /**
         * Fetching again to get news content
         */

        const response_2 = await axios(NewURL)

        /**
         * Extracting content from html and sending response
         */

        res.json(Extracting_And_Filtering_Content(response_2.data))

    } catch (error) {
        console.log(error)
    }
}



/**
 * This is a method for extracting and filltering the content
 */

const Extracting_And_Filtering_Content = (html) => {

    /**
     * Extracting content from html
     */

    const content = unfluff(html)

    /**
     * Removing brackets and extracting content
     */

    const title = content.title.replace(/[{()}]/g, "")
    const text = content.text.replace(/[{()}]/g, "")

    const author = content.author[0]
    const date = new Date(content.date).toLocaleDateString()
    const publisher = content.publisher


    /**
     * splitting text
     */

    const splited_text = text.split("\n")


    /**
     * converting Extracted content into Json
     */

    const Extracted_content = {
        title: title,
        author: !author && null,
        date: date,
        publisher: publisher,
        text: splited_text
    }

    return Extracted_content

}