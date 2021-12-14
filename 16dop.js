let url = "https://random-data-api.com/api/users/random_user";

const promise = fetch(url);

promise.then((response)=> {
 return response.json();
}).then((data) => {
    let img = document.getElementById("0");
    let nik = document.getElementById("1");
    let name = document.getElementById("2");
    let surname = document.getElementById("3");
 
    img.src = data.avatar;
    name.innerText = data.first_name;
    surname.innerText = data.last_name;
    nik.innerText = data.username;
 
});