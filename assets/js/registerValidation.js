/* REGISTER FORM VALIDATION */
    

    // Validating Contact Number
    function checkContact() {    
        let contactField = document.getElementById('signup-contact');
        let contactError = document.getElementById('contact-error-field');

        let contact = contactField.value;
        contact = contact.toString();

        if(contact.length == 10) {
            if(Number(contact[0]) >= 6 && Number(contact[0]) <= 9) {
                contact = Number(contact);
                contactError.style.display = "none";
                contactField.style.borderColor = "lightgrey";
            }
            else {
                window.alert("Contact Number Format is Invalid!!! \n Format- [6-9]{1}-[0-9]{9}");
                return errorMessage();
            } 
        }
        else {
            window.alert("Contact Number Format is Invalid!!! \n Format- [6-9]{1}-[0-9]{9}");
            return errorMessage();
        }        

        let errorMessage = () => {
            contactError.style.display = "block";
            contactError.textContent = "Invalid Contact Number Format!!";
            contactField.style.borderColor = "tomato";
            return false;
        }
    }

    
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
