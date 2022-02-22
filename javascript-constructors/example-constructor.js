function ExampleConstructor() {
}
console.log('value of exampleConstructor:', ExampleConstructor.prototype);
console.log('typeof exampleConstructor:', typeof ExampleConstructor.prototype);

var newFunction = new ExampleConstructor();
console.log(newFunction);

var instanceCheck = newFunction instanceof ExampleConstructor;
console.log(instanceCheck);
