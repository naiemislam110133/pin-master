function getPin(){
const pin = generatePin();
const pinString = pin + '';
if(pinString.length === 4){
    return pin;
}
else{
    return getPin();
}
};

function generatePin(){
const random = Math.round(Math.random()*10000);
return random;
};

document.getElementById("generate-pin").addEventListener("click", function(){

    const password = getPin();

const displayField = document.getElementById('display-field');
displayField.value = password;

});

document.getElementById('calculator').addEventListener('click', function(event){
    const number = event.target.innerText;
    const typedNumberField = document.getElementById('typed-numbers');
    const previousTypedNumber = typedNumberField.value;
    if(isNaN(number)){
        if(number === 'C'){
            typedNumberField.value = ''; 
            // akane idNaN ar moddhe if and else if thakbe 
        }
        else if (number === '<'){
            const digits = previousTypedNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typedNumberField.value = remainingDigits;
        }
    }
    else{
        const newTypedNumber = previousTypedNumber + number;
        typedNumberField.value = newTypedNumber;
    }
})



document.getElementById("verify-pin").addEventListener("click", function(){

    const displayPinField = document.getElementById('display-field');
    const currentPin = displayPinField.value;

    const typedNumberField = document.getElementById('typed-numbers');
    const currentTypedNumbers = typedNumberField.value;

    const sucessMessage = document.getElementById("sucess-notification");
    const failureMessage = document.getElementById("faile-notification");

    if(currentTypedNumbers === currentPin){
         
        sucessMessage.style.display = "block";
        failureMessage.style.display = "none";
    }
    else{
        failureMessage.style.display = "block";
        sucessMessage.style.display = "none";
    }
});