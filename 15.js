//lesson 14
/*let promise = new Promise(function(resolve, reject) {
    reject('error');
    setTimeout(()=> resolve("done"), 1000);
  });
  promise.then((data)=>{
        console.log(data);
  }).catch((error)=>{
    console.log(error);
  }).finally(()=>{

  });*//*
  div.oncopy = function(event) {
    event.preventDefault()
   // return false;
  };*//*
let url = "https://random-data-api.com/api/users/random_user";

const promise = fetch(url);

promise.then((response)=> {
 return response.json();
}).then((data) => {
 let img = document.getElementById("0");
 let nik = document.getElementById("1");
 let name = document.getElementById("2");
 let surname = document.getElementById("3");
 let id = document.getElementById("4");
 let contry = document.getElementById("5");
 let city = document.getElementById("6");
 let state = document.getElementById("7");
 let zip = document.getElementById("8");
 let phone = document.getElementById("9"); 
 let sex = document.getElementById("10");
 let dataB = document.getElementById("11");
 let email = document.getElementById("12");

    contry.innerText = data.address.country;
    state.innerText = data.address.state;
    city.innerText = data.address.city;
    zip.innerText = data.address.zip_code;
    img.src = data.avatar;
    email.innerText = data.email;
    dataB.innerText = data.date_of_birth;
    name.innerText = data.first_name;
    sex.innerText = data.gender;
    surname.innerText = data.last_name;
    id.innerText = data.id;
    nik.innerText = data.username;
    phone.innerText = data.phone_number;

    console.log(data)
});
*/

let url = "https://random-data-api.com/api/restaurant/random_restaurant";

const promise = fetch(url);

promise.then((response)=> {
 return response.json();
}).then((data) => {
    let logo = document.getElementById("0");
    let name  = document.getElementById("1");
    let type = document.getElementById("2");
    let phone = document.getElementById("3");
    let desc= document.getElementById("4");
    let address= document.getElementById("5");
    let rev= document.getElementById("6");
    let id= document.getElementById("7");

    logo.src = data.logo;
    desc.innerText = data.description;
    name.innerText = data.name;
    id.innerText = data.id;
    rev.innerText = data.review;
    address.innerText = data.address;
    phone.innerText = data.phone_number;
    type.innerText = data.type;

    console.log(data)

//=============================================
    const hours = data.hours//{M:{},T:{}}

    const hoursKeys= Object.keys(hours)
    const arr = hoursKeys.map((hour)=>{
    if(hours[hour].is_closed === false){
        return{
            [hour]:hours[hour]
        }
    }
})
arr.filter((item) => Boolean(item))
});

