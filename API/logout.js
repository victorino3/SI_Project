const submit = document.querySelector("#submit");
let button = submit.addEventListener("click", (e) => {
    e.preventDefault();
    const login = "http://localhost:5000/logout";

    fetch(login, {
        method: "GET",
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
            "Authorization": // Here you can add your token

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
