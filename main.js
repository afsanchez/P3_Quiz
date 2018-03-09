const readline = require('readline');
const model = require('./model');
const{log, biglog, errorlog, colorize}= require('./out');
const cmds = require('./cmds');




//Mensaje inicial
biglog('LA CHANA', 'magenta');

const rl = readline.createInterface({

  input: process.stdin,

  output: process.stdout,

  prompt: colorize('quiz > ', 'blue'),

  completer : (line)=> {
  const completions = 'help p show edit test q quit h list add delete play credits '.split(' ');
  const hits = completions.filter((c) => c.startsWith(line));
  // show all completions if none found
  return [hits.length ? hits : completions, line];
}

});

rl.prompt();

rl.
on('line', (line) => {

    let args = line.split(" ");
    let cmd = args[0].toLowerCase().trim(); 

  switch (cmd) {

    case '':
      rl.prompt(rl);
      break;

    case 'h':
    case 'help':
      cmds.helpCmd(rl);
      break;

    case 'add':
      cmds.addCmd(rl);
      break;

    case 'credits':
      cmds.creditsCmd(rl);
      break;

    case 'list':
      cmds.listCmd(rl);
      break;

    case 'show':
      cmds.showCmd(rl,args[1]);
      break;

    case 'delete':
      cmds.deleteCmd(rl,args[1]);
      break;

    case 'edit':
      cmds.editCmd(rl,args[1]);
      break;

    case 'test':
      cmds.testCmd(rl,args[1]);
    break;    

    case 'play':
    case 'p':
      cmds.playCmd(rl,args[1]);
      break;

  case 'quit':
  case 'q':
    cmds.quitCmd(rl);
    break;

  default:
    log(`Comando desconocido: '${colorize(cmd, 'Red')}'`);
    log('Use el Comando help para obtener ayuda');
    rl.prompt();

    break;
  }
  
})
.on('close', () => {

  log('Hasta luego Lucas!', 'blue');

  process.exit(0);

});
