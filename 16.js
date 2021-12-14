/*const hours = {
  mon: {
      a: 1,
      b: 2,
  },
 tue: {
    a:1,
    b:2,
},
wens: {
    a:1,
    b:2,
}
}

const  keys = Object.keys(hours);

const filteredArray = keys.filter((key) => {
    const value = hours[key];
    if(value.is_closed === false) {
        return key;
    }
})
const mapedArray = filteredArray.map((key) => {
    return {
        opens_at: hours[key].opens_at,
        is_closed: hours[key].opens_at,
            day: key;
    }
})


const result = keys.reduce((acc, key) => {
    const value = hours.[key];




}, []);*/
/*
async function f() {
    const result = await fetch("https://random-data-api.com/api/restaurant/random_restaurant")
    const json = await result.json();
    console.log(json);

}
console.log(f());
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

    logo.src = data.logo;
    name.innerText = data.name;
    phone.innerText = data.phone_number;
    type.innerText = data.type;
});
