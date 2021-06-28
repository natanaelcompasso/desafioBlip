const axios = require('axios');

module.exports = {
    listCarrosselServices: async ()=>{
        const apiResponse = await axios.get('https://api.github.com/users/takenet/repos')
        // console.log(apiResponse)
        return apiResponse.data
    }
}