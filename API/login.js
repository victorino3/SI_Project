const form = {
    email: document.querySelector("#emailfrom"),
    password: document.querySelector("#passwordform"),
    submit: document.querySelector("#submit"),
    //messages: document.getElementById("form-messages"),
};
let button = form.submit.addEventListener("click", (e) => {
    e.preventDefault();
    const login = "http://localhost:5000/login";

    fetch(login, {
        method: "POST",
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: form.email.value,
            password: form.password.value,
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

            // redirect to userpage.html
            window.location.href = "userpage.html";

        })
        .catch((err) => {
            console.log(err);
        });
});



