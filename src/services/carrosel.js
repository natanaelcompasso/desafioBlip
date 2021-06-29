const axios = require('axios');

module.exports = {
    listCarrosselServices: async ()=>{
        const apiResponse = await axios.get('https://api.github.com/users/takenet/repos?sort=created&direction=asc&per_page=50')
        // const apiResponse = await axios.get('https://api.github.com/users/takenet/repos?q=&type=public&sort=created&direction=asc&per_page=100')
        // const apiResponse = await axios.get('https://api.github.com/orgs/takenet/repos?language=c#')
        // const apiResponse = await axios.get('https://api.github.com/users/takenet/repos?typesort=created&direction=asc&per_page=50')
        // console.log(apiResponse)
        return apiResponse.data
    }
}