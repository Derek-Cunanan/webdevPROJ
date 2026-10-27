const usernameInput = document.getElementById("name");
const passwordInput = document.getElementById("password")

document.getElementById("btnRegister").addEventListener("click", async (event) => {
    event.preventDefault();
    if (!document.getElementById("login").reportValidity()) return;
    const userName = usernameInput.value;
    const password = passwordInput.value;

    try {
        const response = await fetch("http://127.0.0.1:3000/api/auth/register", {
           method: "POST",
           headers: { "Content-Type": "application/json" },
           credentials: "include",
           body: JSON.stringify({userName, password}), 
        })

        const result = await response.json();
        document.getElementById("lblLogin").textContent = result.message || "Registration Failed.";
    } catch (error) {
        console.error(error);
    }
})

document.getElementById("login").addEventListener("submit", async (event) => {
    event.preventDefault();
    const userName = usernameInput.value;
    const password = passwordInput.value;

    try {
        const response = await fetch("http://127.0.0.1:3000/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            credentials: "include",
            body: JSON.stringify({ username: userName, password}),
        })

        const result = await response.json();
        document.getElementById("lblLogin").textContent = result.message;
    } catch (error) {
        console.error(error);
    }
})