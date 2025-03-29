const KEY = "feedback-form-state";

const formData = {
    email: "",
    message:""
}

const form = document.querySelector(".feedback-form");
const emailUser = form.querySelector("input[name='email']");
const textArea = form.querySelector("textarea[name='message']");

populateTextarea();

form.addEventListener("submit", handleSubmit);
form.addEventListener("input", handleInput);


function handleInput(event) {
    formData.email = emailUser.value.trim();
    formData.message = textArea.value.trim();
    localStorage.setItem(KEY, JSON.stringify(formData));

}

function populateTextarea() {
    const savedData = JSON.parse(localStorage.getItem(KEY));
    if (savedData) {
        textArea.value = savedData.message;
        emailUser.value = savedData.email;
    }
}

function handleSubmit(event) {
    event.preventDefault();
    if ( !formData.email || !formData.message) {
        alert('Fill please all fields');
        return;
    }
    else {
        console.log(formData);
        
    }

    event.currentTarget.reset();
    localStorage.removeItem(KEY);

}



