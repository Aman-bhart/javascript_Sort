const PS1 = "fakeShell %";

let pwd = PS1;

const doEcho = function (argument) {
  return argument.join(" ");
};

const runCommand = function (command, ...argument) {
  switch (command) {
    case "echo": return doEcho(argument);
  };
};

const shellRun = function () {
  while (true) {
    const command = prompt(PS1).split(" ");

    console.log(runCommand(...command));
  }
};

shellRun();