//http://localhost:5000/getall
fetch('http://localhost:5000/spreadms',{
headers: {
    'Content-type': 'application/json',
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidmljdG9yaW5vIiwiaWQiOiI2Mjc3YzlhOGQ5ZDU2NTQ0Yzg5Y2I5ZTMiLCJpYXQiOjE2NTMwODAxMjd9.FDh0gX_Ki9g-RKjYXB8_14eNYKKI6lsm6aPdTUWCaH8",// Here you can add your token

},
})
.then(function (response) {
    return response.json();
}).then(function (myJson) {
    let frontTitle = document.getElementById("title");
    
    
    for (let i = 0; i < myJson.title.length; i++) {
        console.log(myJson.title.length);
        if(myJson.title[i] != null && myJson.user[i] != null && myJson.createdAt[i] != null) {
        frontTitle.innerHTML += "<span> The file " + myJson.title[i] + " </span>" + " was changed by <strong>" + myJson.user[i] + "</strong>" + " at <span>" + myJson.createdAt[i] + "</span>" + "<br>";
    }
   

}
})
;



