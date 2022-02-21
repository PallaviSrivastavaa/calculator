let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText=='D')
        {
            screenValue = screen.value.slice(0,-1);
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            try{
            screen.value = eval(screenValue);
            }
            catch(err)
            {
                alert("enter a valid value!")

            }
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}



