function displayer() {
    let value = document.querySelector(".custom-range").value;
    document.querySelector(".custom-display").innerHTML = value;
}

// Make text required or unrequired based on radio value
function nextUnrequired() {
    document.querySelector("#InputWhyNo").required = false;
    document.querySelector("#InputWhyNo").classList.remove('needs-validation');
    document.querySelector("#InputWhyNo").classList.remove('is-invalid');
}
function nextRequired() {
    document.querySelector("#InputWhyNo").required = true;
    document.querySelector("#InputWhyNo").classList.add('needs-validation');
    document.querySelector("#InputWhyNo").classList.remove('is-valid');

}

// Gets reset to also reset the displayed range value
function custom_reset() {
    document.querySelector(".custom-display").innerHTML = 5;
}

// Only make the text box red for invalid inputs after the user submits the form
function validate_form(e) {
    // every time you add is-valid, you add one to the counter. form is valid if counter == formsArr.length + 2 (1 from date and 1 from date both of which will not contain needs-validation class)
    // if (counter != formsArr.length + 1) =>> i.e. there is at least one invalid form{
    // e.preventDefault() =>> makes form action not take place and highlights red and green boxes based on submission
    // }
    var validity_check = 0;
    validity_check += validate_date();
    var forms = document.querySelectorAll('.needs-validation');
    // querySelectorAll returns a node list. Array.from converts the nodelist to an array for easier manipulation of data
    var formsArr = Array.from(forms);
    for (let i=0;i<formsArr.length;i++) {
        // Don't use was-validated. Use a custom validator so that you can count the number of valid and invalid form elements
        if (formsArr[i].checkValidity()) {
            formsArr[i].classList.remove('is-invalid');
            formsArr[i].classList.add('is-valid');
            validity_check += 1;
        } else {
            formsArr[i].classList.remove('is-valid');
            formsArr[i].classList.add('is-invalid');
        }
    }

    // If there is at least one invalid form, prevent default behaviour (submit button does not submit the form)
    // Radio buttons adds two to validity_check and formsArr.length 
    // Date of visit adds one to validity_check but not to formsArr.length (since it has its own custom validation)
    if (validity_check-1 != formsArr.length) {
        e.preventDefault();
        return false;
    }
}

// Custom validate the date
function validate_date() {
    var date = document.querySelector("#custom-date");
    // No input at all
    if (!date.checkValidity()) {
        date.classList.remove('is-valid');
        date.classList.add('is-invalid');
        return 0;
    } else  {
        // Ensure user does not input a date from the future
        if (new Date(date.value) > new Date()) {
            date.classList.remove('is-valid');
            date.classList.add('is-invalid');
            return 0;
        }
    }

    // Valid input
    date.classList.remove('is-invalid');
    date.classList.add('is-valid');
    return 1;
}


