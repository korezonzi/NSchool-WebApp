for(var num = 1; num <= 100; num++){
    if(num % 3 === 0 && num % 15 ===0) document.write('Fizz Buzz ');
    else if (num % 3 === 0) document.write('Fizz ');
    else if (num % 5 === 0) document.write('Buzz ');
    else document.write(num + ' ');
}