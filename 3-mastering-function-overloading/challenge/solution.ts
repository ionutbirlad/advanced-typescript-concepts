type HTML = {
  html: string;
}

function sendMessage(content: string): void ;
function sendMessage(content: HTML): void ;
function sendMessage(content: string | HTML): void {
  if (typeof content === "string") {
    console.log("Sending text message:", content);
  } else {
    console.log("Sending HTML message:", content.html);
  }
}

// Usage example
sendMessage("Hello, world!"); // Sends a text message
sendMessage({ html: "<p>Hello, world!</p>" }); // Sends an HTML message


// NOTE

// Queste contano anche se non sembra, provare a togleire per vedere
function getData(id: number): string;
function getData(name: string): string;
function getData(name: string, age: number): string;

function getData(value: number | string, age?: number): string {
  if (typeof value === 'number') {
    return `User ID: ${value}`; 
  } else if (age !== undefined) {
    return `User Name: ${value}, Age: ${age}`;
  } else {
    return `User Name: ${value}`;
  }
}
  
  
console.log(getData(23, 'Zia'));
