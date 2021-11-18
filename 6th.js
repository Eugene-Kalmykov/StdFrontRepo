//lesson №8
/*
let animal = {
    eats: true,
    walk() {
        console.log("YES");
    }
  };
  let rabbit = {
    jumps: true,
    __proto__ : animal
  };
  let cat = {
    jumps: false,
    eats: false,
    __proto__ : rabbit
  };
  
  //cat.__proto__ = animal;

console.log( cat.walk() );
console.log( rabbit.eats );

for(let prop in rabbit) {
    let isOwn = rabbit.hasOwnProperty(prop);
  
    if (isOwn) {
      console.log(`Our: ${prop}`); // Our: jumps
    } else {
      console.log(`Inherited: ${prop}`); // Inherited: eats
    }
  }
  */
 /*
  let animal = {
    eats: true,
    color: "white"
  };
  
  function Rabbit(name) {
    this.name = name;
  }
  function Cat(name) {
    this.name = name;
  }

  Rabbit.prototype = animal;

  let rabbit = new Rabbit("White Rabbit");

  Cat.prototype = rabbit;
  
  let cat = new Cat("White Cat");
  
  console.log( rabbit.eats );
  console.log( cat.color ); 
  */
 /*
  let getSomeAge = () => {
    return 100;
  };
  
  function User() {

  }
    User.prototype = {getSomeAge} ;// перезаписование!!! свойств в прототип

    let user = new User();

  console.log( user.getSomeAge() );
*/
/*
  let getSomeAge = () => {
    return 100;
  };
  
  function User() {

  }
    User.prototype.getSomeAge = getSomeAge();//добавление!!! а не перезаписование!!! свойств в прототип

    let user = new User();

  console.log( user.getSomeAge);
  */
  let arr = [1, 2, 3];

  // наследует ли от Array.prototype?
  console.log( arr.__proto__ === Array.prototype ); // true
  
  // затем наследует ли от Object.prototype?
  console.log( arr.__proto__.__proto__ === Object.prototype ); // true
  
  // и null на вершине иерархии
  console.log( arr.__proto__.__proto__.__proto__ ); // null

  String.prototype.show = function() {
    console.log(this);
  };
  
  "BOOM!".show(); // BOOM!