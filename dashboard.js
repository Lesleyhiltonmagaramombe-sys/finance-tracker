const user = localStorage.getItem("loggedInUser");

if (!user) {
    window.location.href = "index.html";
}

document.getElementById("user").innerText = user;

// User-specific keys
const incomeKey = `${user}_income`;
const expensesKey = `${user}_expenses`;

let income = Number(localStorage.getItem(incomeKey)) || 0;
let expenses = Number(localStorage.getItem(expensesKey)) || 0;

// Load saved data (IMPORTANT UPGRADE)
income = Number(localStorage.getItem("income")) || 0;
expenses = Number(localStorage.getItem("expenses")) || 0;

document.getElementById("user").innerText = user;

function updateUI() {
    document.getElementById("income").innerText = income;
    document.getElementById("expenses").innerText = expenses;
    document.getElementById("balance").innerText = income - expenses;

    // SAVE to browser memory
   localStorage.setItem(incomeKey, income);
localStorage.setItem(expensesKey, expenses);
}

function addIncome() {
    let amount = Number(document.getElementById("amount").value);

    if (amount > 0) {
        income += amount;
        updateUI();
    }
}

function addExpense() {
    let amount = Number(document.getElementById("amount").value);

    if (amount > 0) {
        expenses += amount;
        updateUI();
    }
}

// show saved values immediately
updateUI();
function resetData() {
    income = 0;
    expenses = 0;

   localStorage.removeItem(incomeKey);
localStorage.removeItem(expensesKey);
    updateUI();
}

function logout() {
    localStorage.removeItem("loggedInUser");
    window.location.href = "index.html";
}
let budget = Number(localStorage.getItem(`${user}_budget`)) || 0;

function setBudget(){

    budget = Number(
        document.getElementById("budget").value
    );

    localStorage.setItem(
        `${user}_budget`,
        budget
    );

    alert("Budget Saved");
}