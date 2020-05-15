const numberInput = document.getElementById('number-input');
    const submitButton = document.getElementById('submit-button');

        numberInput.addEventListener('input', () => {
            if (numberInput.value.match(/^\d{7}$/))
            {
                        submitButton.disabled = false;
            }
            else{
                submitButton.disabled = true;
            }
        })