const person = {
  name: 'Lee',
  age: 29,
  greet() {
    console.log('Hi, I am ' + this.name)
  }
}

const hobbies = ['Sports', 'Cooking']
//for (let hobby of hobbies) {
//console.log(hobby);
//}
console.log(hobbies.map(hobby => 'hobby: ' + hobby));
console.log(hobbies);