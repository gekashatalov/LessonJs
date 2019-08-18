'use strict'
var onebuy = 0; // стоимость одной покупки всех аксесуарров
var buyValue = 0; // общая сумма на которую скупляемся
var phone = 99.99, // стоимость тел
    acess = 9.99; //  стоимость аксесуара
const nal = 0.08; // налог от покупки
var bankMoney = 400;
const shopMoney = 200; // деньги на счету

    let i = function (ph,ac,nl) {
        let nalSum = 0;
        let korz = 0;
        nalSum = (ph+ac)*nl;
        korz = nalSum + ph + ac;
        return korz.toFixed(2);
    };
    
    onebuy = i(phone,acess,nal);
    console.log(onebuy);

while (buyValue <= shopMoney) {
    buyValue = buyValue + parseFloat(onebuy);
};

buyValue = '$' + buyValue;
console.log(buyValue);

