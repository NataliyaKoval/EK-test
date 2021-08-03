const email = document.querySelector('[data-email]');
const password = document.querySelector('[data-password]');
const passwordMessage = document.querySelector('[data-password-message]');
const emailMessage = document.querySelector('[data-email-message]');

email.addEventListener('keyup', () => {
    checkEmail();
});

password.addEventListener('keyup', () => {
    checkPassword();
});

function checkEmail() {
    const char = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!char.test(email.value.trim())) {
        email.classList.add('error');
        emailMessage.classList.remove('hidden');
    } else {
        email.classList.remove('error');
        email.classList.add('success');
        emailMessage.classList.add('hidden');
    }
}

function checkPassword() {
    if (password.value.trim().length < 6) {
        password.classList.add('error');
        passwordMessage.classList.remove('hidden');
    } else {
        password.classList.remove('error');
        password.classList.add('success');
        passwordMessage.classList.add('hidden');
    }
}
