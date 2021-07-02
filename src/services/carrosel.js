const axios = require('axios');

module.exports = {
    listCarrosselServices: async ()=>{
        const apiResponse = await axios.get('https://api.github.com/users/takenet/repos?sort=created&direction=asc&per_page=50')
        return apiResponse.data
    }
}