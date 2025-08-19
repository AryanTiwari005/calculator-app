let displayName = document.querySelector('#display');
let buttons = document.querySelectorAll('button');
let string = "";

// ✅ Mouse click support
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        handleInput(e.target.innerHTML);
    })
})


document.addEventListener('keydown', (e) => {
    if(e.key >= '0' && e.key <= '9'){
        handleInput(e.key);
    }
    else if(['+', '-', '*', '/'].includes(e.key)){  // operators
        handleInput(e.key);
    }
    else if(e.key === 'Enter'){   // equals
        handleInput('=');
    }
    else if(e.key === 'Backspace'){   // delete
        handleInput('DEL');
    }
    else if(e.key === 'Escape'){   // clear all
        handleInput('AC');
    }
})


function handleInput(value){
    if(value === '='){
        try {
            string = eval(string).toString();
        } catch {
            string = "Error";
        }
        displayName.value = string;
    }
    else if(value === 'AC'){
        string = "";
        displayName.value = string;
    }
    else if(value === 'DEL'){
        string = string.substring(0,string.length-1);
        displayName.value = string;
    }
    else {
        string += value;
        displayName.value = string;
    }
}