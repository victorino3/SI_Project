fetch('http://localhost:5000/sendcode', {
    method: "GET",
    headers: {
        'Content-type': 'application/json',
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidmljdG9yaW5vIiwiaWQiOiI2Mjc3YzlhOGQ5ZDU2NTQ0Yzg5Y2I5ZTMiLCJpYXQiOjE2NTM0OTg2NTV9.VqnYZSKG2o1__dgPkV_soNZD2Ui_dHgUYUMrsAXa83k",// Here you can add your token
    },
}
).then(function (response) {
    return response.json();
}).then(function code(myJson) {

    let button = document.getElementById("button");
    button.addEventListener('click', () => {
        let mycode = myJson[Math.floor(Math.random() * myJson.length)]
        return prompt("Please get the code:", mycode.password);


    })
})

