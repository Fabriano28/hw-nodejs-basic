const axios = require('axios');

async function hitApi(method) {
    try {
        let response = await axios({
            url: 'https://jsonplaceholder.typicode.com/users',
            responseType: 'application/json',
            method: method
        });

        console.log("response ==> ", response);
    } catch (error) {
        console.log(error);
    }
}

hitApi('GET');
