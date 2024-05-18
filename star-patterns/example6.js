for(let i=1; i <= 5; i+=2) {
    let line = '';
    for(let j=1; j <= (5-i)/2; j++) {
        line += ' ';
    }
    for(let k=1; k <= i; k++) {
        line += '*';
    }
    console.log(line);
}

for (let i = 5; i >= 1; i -= 2) {
  let line = '';
  for (let j = 1; j <= (5 - i) / 2; j++) {
    line += ' ';
  }
  for (let k = 1; k <= i; k++) {
    line += '*';
  }
  console.log(line);
}
