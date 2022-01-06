import concat from "../node_modules/lodash-es/concat.js";
import flatMap from "../node_modules/lodash-es/flatMap.js";


const array = [1, 2, 3];

const  other = concat(array,[4,5,6,]);
console.log(other);



function duplicate(n) {
    return [n, n];
  }
console.log(flatMap([1, 2], duplicate));