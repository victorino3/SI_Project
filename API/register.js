const form = {
    name: document.querySelector('#name'),
    email: document.querySelector("#Emailform"),
    password: document.querySelector("#passwordform"),
    confirmpassword: document.querySelector("#passwordformreapet"),
    submit: document.querySelector("#button"),
    //messages: document.getElementById("form-messages"),
};
//console.log(form);
let button = form.submit.addEventListener("click", (e) => {
    e.preventDefault();
    const login = "http://localhost:5000/register";

    fetch(login, {
        method: "POST",
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: form.name.value,
            email: form.email.value,
            password: form.password.value,
            confirmpassword: form.confirmpassword.value,
        }),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            // code here //
            if (data.error) {
                alert("Error Password or Username"); /*displays error message*/
            } else {
                /*window.open(
                  "target.html"
                );*/ /*opens the target page while Id & password matches*/
            }
            //alert("Success");
            window.location.href = "userpage.html";
        })
        .catch((err) => {
            console.log(err);
        });
});



