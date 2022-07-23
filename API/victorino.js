
//console.log(form);

    const login = "http://localhost:5000/rodrigo";

    fetch(login, {
        method: "GET",
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",

        },

    })
        .then((response) => response.json())
        .then((data) => {

            let frontTitle = document.getElementById("title");

            for (let i = 0; i < data.data.length; i++) {
                
                frontTitle.innerHTML+= "<span> " + data.data[i].title + " </span> <br>";
            }

            for (let i = 0; i < data.data_2.length; i++) {
                
                frontTitle.innerHTML+= "<span> " + data.data[i].title + " </span> <br>";
            }
            //make a for in AllG and get all title

            /*const AllG_2=data.data_2
            console.log(AllG);
           console.log(AllG_2);*/


        })
        .catch((err) => {
            console.log(err);
        });




