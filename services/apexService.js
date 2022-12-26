const axios = require('axios')


const API_KEY = process.env.API_KEY
const URI = process.env.URI

const platform = 'origin'
const platformUserIdentifier = 'darberx8'
const config = {
    headers: {
        "TRN-Api-Key": API_KEY
    }
}


async function call() {
    const data = await axios.get(`${URI}/${platform}/${platformUserIdentifier}`, config)
    const json = data.data
    return json
}

module.exports = call