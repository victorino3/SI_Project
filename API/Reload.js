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
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidmljdG9yaW5vIiwiaWQiOiI2Mjc3YzlhOGQ5ZDU2NTQ0Yzg5Y2I5ZTMiLCJpYXQiOjE2NTM0OTg2NTV9.VqnYZSKG2o1__dgPkV_soNZD2Ui_dHgUYUMrsAXa83k",// Here you can add your token
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

