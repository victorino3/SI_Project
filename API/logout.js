const submit = document.querySelector("#submit");
let button = submit.addEventListener("click", (e) => {
    e.preventDefault();
    const login = "http://localhost:5000/logout";

    fetch(login, {
        method: "GET",
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidmljdG9yaW5vIiwiaWQiOiI2Mjc3YzlhOGQ5ZDU2NTQ0Yzg5Y2I5ZTMiLCJpYXQiOjE2NTM0OTg2NTV9.VqnYZSKG2o1__dgPkV_soNZD2Ui_dHgUYUMrsAXa83k",// Here you can add your token

        },

    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            if(data.message == "User logged out!"){ return window.location.href = "login.html";}
            // code here //
            
            // redirect to userpage.html
            

        })
        .catch((err) => {
            console.log(err);
        });
});