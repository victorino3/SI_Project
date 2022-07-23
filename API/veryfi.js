//http://localhost:5000/getall


let btns = document.getElementById("btnS");
btns.addEventListener('click', () => {
    let mycode = prompt("Please enter the code:");
    //make a fetch and send the var mycode to the server
    fetch('http://localhost:5000/comfirm', {
        method: "POST", // // or "PUT" with the url changed to, e.g "https://reqres.in/api/users/2"
        headers: {
            'Content-type': 'application/json',
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidmljdG9yaW5vIiwiaWQiOiI2Mjc3YzlhOGQ5ZDU2NTQ0Yzg5Y2I5ZTMiLCJpYXQiOjE2NTMwODAxMjd9.FDh0gX_Ki9g-RKjYXB8_14eNYKKI6lsm6aPdTUWCaH8",// Here you can add your token
        },
        body: JSON.stringify({code: mycode}) 
        
    }).then(function (response) {
        //console.log(mycode);
        return response.json();
    }).then(function code(data) {
        if(data.status === true){
            window.location.href = "database.html";
        }else{
            alert("Wrong code");
            window.location.href = "userpage.html";
        }
    })
        
  
})



