//------------------Navigation toggle----------------

//Capture classes in variables
const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navBarLinks = document.getElementsByClassName('mobile-nav')[0];
let menuOpen = false;

//Toggle event listener
toggleButton.addEventListener('click', () => {
    navBarLinks.classList.toggle('active')

    if (!menuOpen) {
        toggleButton.classList.add('open');
        menuOpen = true;
    } else {
        toggleButton.classList.remove('open');
        menuOpen = false;
    }
});


//-------------------Form validation--------------------

//Capture tags/classes in variables
const form = document.querySelector("form");
const input = document.querySelector("input");
const errorMsg = document.querySelector(".error-box");

//event listener submit for form
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    //if the input is not valid display the error message
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData.get("email"))) {
        errorMsg.classList.add('show'); //error text
        input.classList.add('error'); //error box
    } else {
        errorMsg.classList.remove('show'); //error text
        input.classList.remove('error'); //error border
    }
});