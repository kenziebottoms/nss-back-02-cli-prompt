const prompt = require("prompt");
const colors = require("colors/safe");

prompt.message = "";
// prompt.delimiter = colors.green("<>");

const userPrompts = [
  {
    name: "username",
    validator: /^[a-zA-z\s\-]+$/,
    warning: "Username must only contain letters, spaces, and dashes"
  },
  {
    name: "password",
    description: "Enter your password",
    type: "string",
    validator: /^\w+$/,
    message: "Password must be letters",
    hidden: true,
    replace: "*",
    required: true
  }
];

prompt.get(userPrompts, (err, result) => {
  err ? handle(err) : console.log(`input received: ${result.username}, ${result.password}`);
});

const handle = err => console.log(err);