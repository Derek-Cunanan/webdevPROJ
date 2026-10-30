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
const login = document.getElementById("login")
login.addEventListener("submit", async (event) => {
    event.preventDefault();
    const loginForm = new FormData(login)

    try {
        const response = await fetch("http://127.0.0.1:3000/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            credentials: "include",
            body: JSON.stringify({ 
                username: loginForm.get("name"), 
                password: loginForm.get("password")}),
        })

        const result = await response.json();

        if (result.ok === true){
            document.getElementById("lblLogin").textContent = result.message;
            localStorage.setItem("userId", result.userId)
            window.location.href = "/frontend/main.html"
        }
        else{
            document.getElementById("lblLogin").textContent = result.message;
        }
    } catch (error) {
        console.error(error);
    }
})

