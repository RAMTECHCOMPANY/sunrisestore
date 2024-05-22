function validateEmail(event) {
    event.preventDefault();

    var emailInput = document.getElementById("email");
    var nameInput = document.getElementById("name");
    var numberInput = document.getElementById("number");
    var detailInput = document.getElementById("detail");
    var errorEmail = document.getElementById("errorEmail");
    var errorName = document.getElementById("errorName");
    var errorNumber = document.getElementById("errorNumber");
    var errorDetail = document.getElementById("errorDetail");
    var success = document.getElementById("success");
    errorEmail.textContent = "";
    errorName.textContent = "";
    errorNumber.textContent = "";
    errorDetail.textContent = "";
    success.textContent = "";
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (nameInput.value == "") {
        errorName.textContent = "Enter Your Name";
    }
    else if (emailInput.value == "") {
        errorEmail.textContent = "Enter email";
    }
    else if (!emailInput.value.match(emailRegex)) {
        errorEmail.textContent = "The email is wrong";
    }
    else if (numberInput.value == "") {
        errorNumber.textContent = "Enter Your Phone Number";
    }
    else if (detailInput.value == "") {
        errorDetail.textContent = "Enter Details";
    }
    else {
        success.textContent = "Your contact is successfully, Thanks";
    }
}

var form = document.getElementById("myForm");
form.addEventListener("submit", validateEmail);