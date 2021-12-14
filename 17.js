const header = document.getElementsByTagName("header");
let urlComp = "https://random-data-api.com/api/restaurant/random_restaurant";
let urlUser = "https://random-data-api.com/api/users/random_user";
const promise = fetch(urlComp);
let company = document.getElementById("company");
company.className = "activ";

const render = (promise, argument) => {
    promise
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let logo = document.getElementById("0");
      let name = document.getElementById("1");
      let type = document.getElementById("2");
      let phone = document.getElementById("3");

      if(argument === "company"){
        logo.src = data.logo;
        name.innerText = data.name;
        phone.innerText = data.phone_number;
        type.innerText = data.type;
      }
      if(argument === "user"){
        logo.src = data.avatar;
        type.innerText = data.first_name;
        phone.innerText = data.last_name;
        name.innerText = data.username;
      }
    });
}

render(promise, 'company')

header[0].addEventListener("click", function (event) {
  if (event.target.id === "company") {
    const promise = fetch(urlComp);

    render(promise, 'company')

    let company = document.getElementById("company");
    company.className = "activ";
    let user = document.getElementById("user");
    user.className = "dis";
  }
  if (event.target.id === "user") {
    const promise = fetch(urlUser);
    
    render(promise, 'user')
    
    let user = document.getElementById("user");
    user.className = "activ";
    let company = document.getElementById("company");
    company.className = "dis";
  }
});