//outputs
const output_name = document.querySelector(".name");
const output_cardNumber = document.querySelector(".frontNumber");
const output_MM = document.querySelector(".mm");
const output_YY = document.querySelector(".yy");
const output_CVC = document.querySelector(".backNumber");
const form = document.querySelector(".form");
const complete = document.querySelector(".complete");

//inputs
const input_name = document.querySelector("#name");
const input_cardNumber = document.querySelector("#cardnumber");
const input_MM = document.querySelector("#MM");
const input_YY = document.querySelector("#YY");
const input_CVC = document.querySelector("#CVC");
const submit_btn = document.querySelector(".submit");

//error
const error_number = document.querySelector("#cardNumberError");
const error_date = document.querySelector("#dateError");
const error_cvc = document.querySelector("#cvcError");

submit_btn.addEventListener('click', ()=>{
    output_name.innerText = input_name.value;
  
    error_number.innerHTML="";
    input_cardNumber.classList.remove("error");
    input_MM.classList.remove("error");
    error_date.innerText ="";
    input_YY.classList.remove("error");
    input_CVC.classList.remove("error");
    error_cvc.innerText="";
    
    if(input_cardNumber.value ==''||input_cardNumber.value.length!=16)
    {
        error_number.innerHTML="Wrong formant,numeber only";
        input_cardNumber.classList.add("error");
    }
    else{
        output_cardNumber.innerText = input_cardNumber.value;
    }
    if(input_MM.value ==''){
        input_MM.classList.add("error");
        error_date.innerText ="Can't be blank";
    }
    else{
        output_MM.innerText = input_MM.value;
    }
    if(input_YY.value==''){
        input_YY.classList.add("error");
        error_date.innerText ="Can't be blank";
    }
    else{
        output_YY.innerText = input_YY.value;
    }
    if(input_CVC.value ==''||input_CVC.value.length!=3){
        input_CVC.classList.add("error");
        error_cvc.innerText="Can't be blank";
    }
    else{
        output_CVC.innerText = input_CVC.value;
    }

    if(error_number.innerText ==''&&error_date.innerText==''&&error_cvc.innerText ==''){
        form.classList.add("hidden");
        complete.classList.remove("hidden");
    }
})