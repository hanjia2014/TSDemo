module HelloWorld_Sample {
    export class Greeter {
        constructor(public greeting: string) { }
        greet() {
            return "<h1>" + this.greeting + "</h1>";
        }
    };
}

var greeter = new HelloWorld_Sample.Greeter("Hello, world!");

document.body.innerHTML = greeter.greet();