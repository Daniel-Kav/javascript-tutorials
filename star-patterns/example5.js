for (let i = 1; i <= 5; i++) {
    line = ''
    for (let j = 1; j <= 5 - i; j++) {
        line += ' ';
    }

    for (let k = 1; k <= i; k++) {
        line += '*';
    }
    console.log(line);
}
for (let i = 5 ; i >= 1; i--){
    line='';
    for (let j = 1; j <= 5-i; j++) {
        line += ' ';
    }
    for (let k = 1; k <= i; k++) {
        line += '*';
    }
    console.log(line);
}