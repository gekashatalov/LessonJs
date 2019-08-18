
let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd'),
    but = document.getElementById('one');
    

inputRub.addEventListener('input', ()=> {
    let request = new XMLHttpRequest();

    request.open('GET', 'current.json');
    request.setRequestHeader('Contetnt-type', 'application/json', 'charset=utf-8');
    request.send();

    request.addEventListener('readystatechange', function() {
        if (request.readyState === 4 && request.status == 200){
            let data = JSON.parse(request.response);

            inputUsd.value = inputRub.value / data.usd;
        } else {
            inputUsd.value = 'что то пошло не так';
        }
    });
});

 