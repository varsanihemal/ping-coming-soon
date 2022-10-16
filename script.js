const form = document.getElementById('form');
const btn = document.getElementById('btn-notify');
const inputInfo = document.querySelectorAll('.input-info');

//Validation
const formValidation = () => {
    const email = document.getElementById('email');
    //trim for white spaces
    const InputEmail = email.value.trim();

    const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (InputEmail === "" || InputEmail === null) {
        inputInfo[0].classList.add("error");
    } else {
        inputInfo[0].classList.remove("error")
    }

    if(InputEmail.match(regEx)){
        inputInfo[0].classList.remove("error");
    } else {
        inputInfo[0].classList.add("error");
    }
}

btn.addEventListener('click', (e) => {
    e.preventDefault();
    formValidation();
})

// END