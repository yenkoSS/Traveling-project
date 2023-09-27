
document.querySelector('#btn-more').addEventListener('click', function() {
    document.querySelector('#section-about').scrollIntoView({behavior: 'smooth'})
})


document.querySelectorAll('.nav-link').forEach(function(element) {

    element.addEventListener('click', function(e) {
        e.preventDefault();

        const sectionID = element.getAttribute('href')

        document.querySelector(sectionID).scrollIntoView({behavior: 'smooth'});
    })
})


// Contact Form Validation

const firstNameEl = document.querySelector('#firstName');
const lastNameEl = document.querySelector('#lastName');
const emailEl = document.querySelector('#emailAddress');
const textMessageEl = document.querySelector('#textMessage');
const formsSubmitBtnEl = document.querySelector('#formSubmitBtn');

const isEmpty = inputValue => inputValue === '' ? true : false;
const isString = inputValue => /\d/.test(inputValue) ? false: true;
const isEmailPattern = inputValue => inputValue.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) ? true : false;
const isMin = inputValue => (inputValue.length >= 30) ? true : false;

//Show error function

const showError = function(element, message) {
    element.style.borderColor = 'red';
    element.parentElement.querySelector('small').innerHTML = message;
}

//Hide Error (success) function

const hideError = function(element) {
    element.style.borderColor = 'green';
    element.parentElement.querySelector('small').innerHTML = '';
}

//Check Name Label

const checkNameLabel = function(element) {

    let valid = false;

    const nameValue = element.value;
    console.log(nameValue)

    if (isEmpty(nameValue)) {
        showError(element, 'This label should not be empty!')
    } else if (!isString(nameValue)) {
        showError(element, 'You cannot have numbers in your first name!')
    } else {
        hideError(element);
        valid = true;
        return valid;
    }
}

//Check Email Label

const checkEmailLabel = function(element) {

    const emailValue = element.value;

    if (isEmpty(emailValue)) {
        showError(element, 'This label should not be empty!')
    } else if (!isEmailPattern(emailValue)) {
        showError(element, 'E-mail address not valid.')
    } else {
        hideError(element);
        return true
    };
}

const checkMessageLabel = function(element) {
    const messageValue = element.value;

    if (!isMin(messageValue)) {
        showError(element, 'Your message must have minimum 30 chars.')
    } else {
        hideError(element);
        return true;
    }
}

//Form submit

document.querySelector('#formSubmitBtn').addEventListener('click', function(e) {

    e.preventDefault();

    const isFNameValid = checkNameLabel(firstNameEl);
    const isLNameValid = checkNameLabel(lastNameEl);
    const isEmailvalid = checkEmailLabel(emailEl);
    const isMessageValid = checkMessageLabel(textMessageEl);


    const isFormValid = isFNameValid && isLNameValid && isEmailvalid && isMessageValid;

    if (isFormValid) {
        alert('Thank you for your message!')
    }
})
