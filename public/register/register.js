import {emitRegisterUser} from "./socket-front-register.js";
const form = document.getElementById("form-register");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = form["input-user"].value;
    const pass = form["input-pass"].value;

    emitRegisterUser({ name, pass });
})