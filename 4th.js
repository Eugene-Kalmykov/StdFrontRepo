//занятие №6 - объекты.
/*
let object = {
    name: "J",
    city: "M",
};
object.name;
object.city = "S";
delete object.name;
const array [object];

array[0].city; // получаем "M"
*/
/*
let array = [{name: "John", age: 12}, {name: "Ann", age: 14},{name: "Ivy", age: 16},{name: "May", age: 18},{name: "Jack"},];

function incrementFunc () {

    let array2 = array.map(function(item, index) {
       if(item.age === undefined) {
        item.age = 20;
        return item;
      } else {
        item.age++;
        return item;
        } 
    });
    return array2;
}
     
      console.log(incrementFunc());
*/
/*
let obj = {name:"M", age: 12};

for (let key in obj) {

    console.log(key);
    console.log(key, obj[key]);
}
*/
function isEmpty(obj) {//доделать вспомнить функции
    for (let key in obj) {
        return false;
    }
    return true;
    /*let a;
    return a
        if (key) {
            a = false;
        } else {
            a = true;
        }
       // return a
    }
    return a*/
}

console.log(isEmpty({name: "M"}))