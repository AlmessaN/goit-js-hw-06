const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', OnSubmit)
function OnSubmit(evt) {
    evt.preventDefault()
    console.dir(evt.currentTarget)
     const {email, password} = evt.currentTarget.elements;
     const data = {
        email: email.value,
        password: password.value
     }
     console.log(data);
     event.currentTarget.reset();
}
