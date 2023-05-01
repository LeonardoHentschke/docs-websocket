import { emitLoginUser } from "./socket-front-login.js";
const form = document.getElementById("form-login");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = form["input-user"].value;
    const pass = form["input-pass"].value;

    emitLoginUser({ name, pass });
})