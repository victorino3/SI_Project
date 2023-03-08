const pageAccessedByReload = (
    (window.performance.navigation && window.performance.navigation.type === 1) ||
    window.performance
        .getEntriesByType('navigation')
        .map((nav) => nav.type)
        .includes('reload')

);
//alert(pageAccessedByReload);
if (pageAccessedByReload) {
    let mycode = prompt("Please enter the code:");
    //make a fetch and send the var mycode to the server
    fetch('http://localhost:5000/comfirm', {
        method: "POST", // // or "PUT" with the url changed to, e.g "https://reqres.in/api/users/2"
        headers: {
            'Content-type': 'application/json',
            "Authorization": ,// Here you can add your token
        },
        body: JSON.stringify({ code: mycode })

    }).then(function (response) {
        //console.log(mycode);
        return response.json();
    }).then(function code(data) {
        if (data.status === true) {
            window.location.href = "index.html";
        } else {
            alert("Wrong code");
            window.location.href = "showdb.html";
        }
    })





    //console.log(mycode.password);


}

