const { stdin, stdout } = require('process');
const readline = require('readline');

const question = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

question.question('Enter your Name:',(ans)=>{
    console.log('hello',ans)
    question.close()
})