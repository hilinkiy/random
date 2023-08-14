function randExample(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function sample() {
    for (let i = 1; i <= 10; i++) {
        var num1 = randExample(min,max);
        var num2 = randExample(min,max);
    
        var answer = num1 + num2;
    
        let task = +prompt(`${i} \n ${num1} + ${num2} = X`);
    
        if(answer == task) {
            alert('Верно');
        } else {
            alert(`Не правильно, правильный ответ: ${answer}`);
        }
       
    
        console.log(task);
    }
    
}

min = +prompt('Введите минимальное число');
max = +prompt('Введите максимальное число');

sample();
mathExample();