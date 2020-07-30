/* REGISTER FORM VALIDATION */
    
    //  Validating Password
    function checkPassword()    {
        let pswd = document.getElementById('signup-pswd');
        let confirmPswd = document.getElementById('signup-cpswd');
        let confirmPswdError = document.getElementById('pswd-error-field');

        if(pswd.value != confirmPswd.value) {
            confirmPswdError.style.display = "block";
            confirmPswd.style.borderColor = "tomato";
            confirmPswdError.textContent = "Passwords Must be Match!!";
            return false;
        }
        else    {
            confirmPswdError.style.display = "none";
            confirmPswd.style.borderColor = "lightgrey";
        }
    }



    // const submit = document.querySelector('#registerForm');
    // submit.addEventListener('submit', checkPassword);
    // submit.addEventListener('submit', checkContact);

    // const contact = document.querySelector('#contactNum');
    // contact.addEventListener('change', checkContact);

    // const confirmPswd = document.querySelector('#confirmPswd');
    // confirmPswd.addEventListener('change', checkPassword);
