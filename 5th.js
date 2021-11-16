//lesson №7
//методы в объектах
let obj = {name:"M", 
           age: 12,
           sayHi(){
            console.log(this);
           }
};
obj.sayHi();
/*
function name() {
    console.log(this);
}*/
/*
let calculator = {
    read() {
        this.first = Number(prompt("укажите первое число"));
        this.second = Number(prompt("укажите второе число"));
    },
    sum() {
       return this.first + this.second;
    },
    mul(){
        return this.first * this.second;
    }
  };
  
  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );
*//*
let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep: function() { // показывает текущую ступеньку
      alert( this.step );
      return this;
    }
  };


  let lad = ladder
  ladder = null

lad.up().up().down().showStep(); // 1
*/
//==============================
//class
/*
function User( _admin, _name) {
    this.admin = _admin;
    this.name = _name;
    this.show=function() {
        alert( this.admin + this.name);
    }
}
var user1=new User( true, "Mike");
var user2=new User( false, "Nik");
var user3=new User( true, "Jack");

user1.show();
user2.show();
user3.show();
*/
/*
class User {
    constructor( _name, _admin ) { 
        this.admin = _admin;
        this.name = _name; 
    }
    show=function() {
        alert( this.admin + this.name);
    }
}
var user1 = new User( true, "Mike");
var user2 = new User( false, "Nik");
var user3 = new User( true, "Jack");

user1.show();
user2.show();
user3.show();
*/
/*
class City {
    constructor( _name, _value ) { 
        this.name = _name;
        this.value = _value;    
    }
    endCount = function() {
        return this.value + Number(prompt("укажите прирост"));
        
    }
    show = function() {
        alert( this.value + this.name);
    }
}
var city1 = new City( "Minsk", 3000);
var city2 = new City( "Grodno", 2000);
var city3 = new City( "Brest", 1000);

city1.show().endCount();
//city2.show();
//city3.show();
*/