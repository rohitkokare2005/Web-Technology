const form = document.getElementById('subscribeForm');

// Only run if the form exists on this page
if (form) {
    const emailInput = document.getElementById('emailInput');
    const errorMsg = document.getElementById('emailError');
    const inputGroup = document.querySelector('.input-group');

    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function setError(message) {
        inputGroup.classList.add('error');
        inputGroup.classList.remove('success');
        errorMsg.innerText = message;
    }

    function setSuccess() {
        inputGroup.classList.remove('error');
        inputGroup.classList.add('success');
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailValue = emailInput.value.trim();

        if (emailValue === '') {
            setError('Email address cannot be empty');
        } else if (!isValidEmail(emailValue)) {
            setError('Please enter a valid email');
        } else {
            setSuccess();
            alert('Success! You are now subscribed.');
            form.reset();
            setTimeout(() => {
                inputGroup.classList.remove('success');
            }, 3000);
        }
    });

    emailInput.addEventListener('input', () => {
        if (inputGroup.classList.contains('error')) {
            inputGroup.classList.remove('error');
        }
    });
}