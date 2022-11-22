const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzY4MmJiYjllODg5YTAwMjFhNzVkNjgiLCJpYXQiOjE2Njc3NzEzMjN9.vA6IkMEdWCsagzpN0Q6EJ_PTVntbqHHTkCQtQtpDeEg";

const URL = 'https://coding-challenge-api.aerolab.co/products/';

const getData = async (id) => {
    try {
        const response = await fetch(URL,{
            method: 'GET',
            headers:{
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: token,
            },
        })
        const data = await response.json();
        const found = data[id];
        console.log(id ? found : data)
        return id ? found: data;
    } catch(error) {
        console.log('Fetch Error..!!', error);
    };
    
};

export default getData;


