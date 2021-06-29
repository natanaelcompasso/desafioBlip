
module.exports = (json) =>{
    
        let repositorios = [];
        console.log(json)
        for (let i = 0; i < 5; i++) {
            repositorios.push({
                "id": json[i].id,
                "nome": json[i].name,
                "description": json[i].description
            })
        }
        return repositorios;
    }
