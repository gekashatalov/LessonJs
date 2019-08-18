"use strict";

// Инкапсуляция - отделение и скрытие от внешнего мира внутриностей программы т.е. ее переменных, функций и т.д.

function User(name, age) {
    this.name = name;
    //this.age = age; //таким способом кто угодно может легко поменять значение на свое
    let userAge = age; // инкапсуляция, теперь не то что поменять значиние не возможно, а не возможно и просмотреть его
    // создаем метод геттер, который позволит нам достучаться до значения "age"
    this.getAge = function() {
        return userAge;
    };

    //что бы устанавливать какие то значения нужно восользоваться методом сеттер:
    this.setAge = function(age){
        if( typeof age === 'number' && age > 0 && age < 110){ // c помощью сеттера мы еще допольнительно можем проверить получанные данные при помощи условия if
            userAge = age;
        } else {
            console.log('Недопустимое значение');
        };
    };
    this.say = function() {
        console.log(`Имя пользователя ${this.name} и возраст : ${this.userAge}`);
    };
};

let user = new User('Ivan', 25);
console.log(user.name);
console.log(user.userAge);
user.say()
console.log(user.getAge()); // вывели значение при помощи нашего геттера
user.setAge(35);// так мы сменили значение нашей переменной, передав новое значение как аргумент метода сеттер
console.log(user.getAge());