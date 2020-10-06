// variable scope in function
function message() {
	//Local variable
	var greet = "Hello JavaScript";
	//Local variables are accessible n the function
	console.log("Message from inside the function: " + greet);
}
message();
//Local variable cannot be accessed outside the function
console.log("Message from outside the function: " + greet);
//Message from inside the function: Hello JavaScript
//Uncaught ReferenceError: greet is not defined

