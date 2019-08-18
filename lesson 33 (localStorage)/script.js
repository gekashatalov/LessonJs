"use strict";

//LocalStorage - метода обьекта Window, который хранит в себе данные в ввиде "ключ" - значение;
// Методы обьекта LocalStorage:

/*window.localStorage.setItem("number", 1);// добавление значения в бызу localStorage
console.log(localStorage.getItem("number")); // получаем значение свойства "number" в localStorage
localStorage.removeItem("number"); // удаляем свойство из localStorage
localStorage.clear(); //очищаем все значения localStorage*/

window.addEventListener("DOMContentLoaded", function() {
    
    let checkbox = document.getElementById('custom-checkbox'),
        changeBtn = document.getElementById('chenge'),
        form = document.querySelector('.form');

        if(localStorage.getItem('isChecked') === "true") {
            checkbox.checked = true;
        };

        if(localStorage.getItem('bg') === "change") {
            form.style.backgroundColor = "#ff4261";
        };

        checkbox.addEventListener('click', function () {
            window.localStorage.setItem('isChecked', true)
        });

        changeBtn.addEventListener('click', function () {
            window.localStorage.setItem('bg', 'change');
            form.style.backgroundColor = "#ff4261";
        });

        //что бы добавить обьект в localStorage

        let persone = {
            name: "Alex",
            age: 25,
            device:["mobile","notebook"]
        };


        let serializedPersone = JSON.stringify(persone);//переводим обьект в формат читабельный для сервера
        localStorage.setItem('Alex', serializedPersone);
            //выводи наш обьект в консоль , и изменяем его со строки на обьект
        console.log(JSON.parse(localStorage.getItem('Alex')));


});


