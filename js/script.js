const form = document.getElementById('form')
const email = document.querySelector('[data-input]')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    checkInput()
})

function checkInput() {
     //get the value from the inputs
    //trim function removes all of the white space
    const emailValue = email.value.trim();
    if(emailValue === ''){
        //show error
        //add error class
        setErrorFor(email, 'Email cannot be blank')
    }else if (!isEmail(emailValue)){
        setErrorFor(email, 'Please provide a valid email');
    }else{
        clearErrors(email);
        //added this alert so that it can first clear off any errors left
        setTimeout(alertSuccess, 0);
    }   
}

//clear off any error signs
function clearErrors(input) {
    const formControl = input.parentElement.parentElement;
     //.form

    //add error class
    formControl.className = '';
}

function alertSuccess() {
    alert(`Success!`);
}

function setErrorFor(input, message){
    const formControl = input.parentElement.parentElement;
     //.form
    const small = formControl.querySelector('span');

    //add error message inside small
    small.innerText = message;

    //add error class
    formControl.className = 'error';

    // //adding error class to input
    // input.className = 'display error';
}

//checks to see if email is valid
function isEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}