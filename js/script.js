// function 1: for expanding the description
function toggleDescription(btn) {
    const desc = btn.previousElementSibling; // this will give us the long description
    // if the class is hidden --> long description
    if (desc.classList.contains("hidden")) {
        desc.classList.remove("hidden");
        btn.textContent = "Read Less";
        // if the class is not hidden --> short description
    } else {
        desc.classList.add("hidden");
        btn.textContent = "Read More";
    }
}
// for the contact form
function submitForm(event){
    event.preventDefault();
    // message to be shown
    document.getElementById("form-status").textContent = "Thank you! Your message has been received.";
    document.getElementById("contact-form").reset(); // clear contact form
}
