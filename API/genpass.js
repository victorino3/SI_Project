fetch('http://localhost:5000/sendcode', {
    method: "GET",
    headers: {
        'Content-type': 'application/json',
        "Authorization": // Here you can add your token
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

