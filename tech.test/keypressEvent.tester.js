const stdin = process.stdin;
stdin.setRawMode(true);
stdin.resume();
stdin.setEncoding('utf-8');

stdin.on('data',(key) => {
  if (key === 'w') {
    console.log('key down');
  }

  if (key == '\u0003') process.exit();
});

/*
function holdKey(key,isHeld){
  while(isHeld){
    if(key !== 'w');
    console.log('key is held');
  }
}
*/
