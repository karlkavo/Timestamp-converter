const chalk = require('chalk');

console.log(' \n');
console.log(chalk.red('*** TIMESTAMP CONVERTER ***'));

const time = new Date().getTime();
console.log(chalk.blue('Timestamp= ' + time));

//returns current time and date
const date = new Date(time);

//Look up a specific timestamp
//const date = <Timestamp Here>;
console.log(chalk.yellow('Human readable = ' + date.toString()));

if (time > 1595603723469) {
  console.log(chalk.redBright('YOU ARE LATE!!!'));
}
