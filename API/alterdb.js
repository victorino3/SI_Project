fetch('http://localhost:5000/changedfiles', {
    method: "POST", // // or "PUT" with the url changed to, e.g "https://reqres.in/api/users/2"
    headers: {
        'Content-type': 'application/json',
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidmljdG9yaW5vIiwiaWQiOiI2Mjc3YzlhOGQ5ZDU2NTQ0Yzg5Y2I5ZTMiLCJpYXQiOjE2NTM0OTg2NTV9.VqnYZSKG2o1__dgPkV_soNZD2Ui_dHgUYUMrsAXa83k",// Here you can add your token

    },
    body: JSON.stringify(                         
        { password: "6e1cd4db3c70ab8305648abe60e47c10"}
    )
})
.then(res => {
    if (res.ok) { console.log("HTTP request successful") }
    else { console.log("HTTP request unsuccessful") }
    return res
})
.then(res => res.json())
.then(datas => {

    let table = document.getElementById("table")

    function truncateString(str) {
        return (str.slice(0,45)+"...");
      }
    for (let i = 0; i < datas.data.length; i++) {
        if (datas.data[i].data.length > 8) {
            let hmac = truncateString(datas.data[i].hmac)
            let hash = truncateString(datas.data[i].hash)
            table.innerHTML += `<tr><td>${datas.data[i].title}</td><td>${datas.data[i].data}</td><td>${hmac}</td><td>${hash}</td></tr>`
        }

    }
   // console.log(files)
})
.catch(error => console.log(error))

  
