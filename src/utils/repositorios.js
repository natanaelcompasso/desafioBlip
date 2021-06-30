
module.exports = (json) =>{
    
        let repositorios = [];
        console.log(json)
        for (let i = 0; i < 5; i++) {
            repositorios.push({
                "id": json[i].id,
                "avatar_url": json[i].owner.avatar_url,
                "nome": json[i].name,
                "description": json[i].description
            })
        }
        return repositorios;
    }
