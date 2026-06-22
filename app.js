function loginUser(event) {
    event.preventDefault();

    const username = document.querySelector("input[type='text']").value;

    localStorage.setItem("loggedInUser", username);

    window.location.href = "dashboard.html";
}