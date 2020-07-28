const loginOpt = document.querySelector('#login-opt');
const signupOpt = document.querySelector('#signup-opt');

const loginBorder = document.querySelector('#login-opt + hr');
const signupBorder = document.querySelector('#signup-opt + hr');

const login = document.querySelector('#login-form');
const signup = document.querySelector('#signup-form');

loginOpt.addEventListener('click', function()   {
    // Link and Border
    signupOpt.classList.remove("active-opt");
    signupBorder.classList.remove("active-border");

    loginOpt.classList.add("active-opt");
    loginBorder.classList.add("active-border");

    // Form
    signup.classList.remove("d-block");
    signup.classList.add("d-none");

    login.classList.remove("d-none");
    login.classList.add("d-block");
});

signupOpt.addEventListener('click', function()   {
    // Link and Border
    loginOpt.classList.remove("active-opt");
    loginBorder.classList.remove("active-border");

    signupOpt.classList.add("active-opt");
    signupBorder.classList.add("active-border");

    // Form
    login.classList.remove("d-block");
    login.classList.add("d-none");

    signup.classList.remove("d-none");
    signup.classList.add("d-block");
});