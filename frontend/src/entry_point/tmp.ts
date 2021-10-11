function greeter(person:any) {
	return "Hello, " + person;
}

let user = "Jane User";

document.body.textContent = greeter(user);