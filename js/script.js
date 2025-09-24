function toggleDescription(btn) {
    const desc = btn.previousElementSibling;
    if (desc.classList.contains("hidden")) {
        desc.classList.remove("hidden");
        btn.textContent = "Read Less";
    } else {
        desc.classList.add("hidden");
        btn.textContent = "Read More";
    }
}
function submitForm(event){
    event.preventDefault();
    document.getElementById("form-status").textContent = "Thank you! Your message has been received.";
    document.getElementById("contact-form").reset();
}
