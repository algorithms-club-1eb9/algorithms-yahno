const readline = require('readline');

function main(){
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
    
    rl.question('Type "X" ', input =>{
        if(Number.isInteger(+input)){
            findNumbers(+input);
        }
        else {
            console.log('it is not a number');
        }
        rl.close();
    })
}

function findNumbers(X){
    const len = X.toString().length,
          flag = X - 9*len;
    let numCounter = 0,
        i = X; 
        numArr = [];
    for(i; i >= flag; i--){
        let subSum = 0;
        let numbers = i.toString().split('');
        numbers.forEach(element => {
            subSum += Number(element);
        });
        if(i+subSum == X){
            numCounter++
            numArr.unshift(i);
        }   
    }
    console.log(numCounter);
    numArr.forEach(el=>{
        console.log(el);
    })
}

main();