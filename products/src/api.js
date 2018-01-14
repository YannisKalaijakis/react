var api= {
    getProducts(){
        var url= `http://localhost:3000/products?_id=`;
        return fetch(url).then((response) => response.json())
        .then((responseJson)=>{
            return responseJson.products;
        })
        .catch((error) => {
            console.log(error);
        });
    }
};

module.exports = api;