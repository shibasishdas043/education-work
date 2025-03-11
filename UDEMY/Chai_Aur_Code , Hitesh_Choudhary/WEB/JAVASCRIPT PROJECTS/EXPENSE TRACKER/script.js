
document.addEventListener("DOMContentLoaded", () => {

    const expenseForm = document.getElementById("expense-form");
    const expenseNameInput = document.getElementById("expense-name");
    const expenseAmountInput = document.getElementById("expense-amount");
    const expenseListDisplay = document.getElementById("expense-list");
    const totalAmountDisplay = document.getElementById("total-amount");

    let expensesArray = JSON.parse(localStorage.getItem("expensesArray")) || [];
    let totalAmount = calculateTotal();

    renderExpenses();

    expenseForm.addEventListener("submit", (e) => {
        e.preventDefault()
        const name = expenseNameInput.value.trim();
        const amount = parseFloat(expenseAmountInput.value.trim());

        if(amount !== "" && !isNaN(amount) && amount > 0){
            const newExpenses = {
                id : Date.now(),
                name : name,
                amount : amount,
            }
            expensesArray.push(newExpenses);
            saveExpensesToLocal();
            renderExpenses();
            updateTotal();

            // Clear The Input Section
            expenseNameInput.value = "";
            expenseAmountInput.value = "";
        }
    });

    function renderExpenses(){
        expenseListDisplay.innerHTML = "";
        expensesArray.forEach(iterator => {
            const li = document.createElement("li");
            li.innerHTML = `${iterator.name} - $${iterator.amount} <button data-id = "${iterator.id}">Remove</button>`;
            expenseListDisplay.appendChild(li);

        });
    }

    expenseListDisplay.addEventListener("click", (event) => {
        if(event.target.tagName === "BUTTON"){
            const expenseId = parseInt(event.target.getAttribute("data-id"));
            expensesArray = expensesArray.filter(iterator => iterator.id !== expenseId);

            updateTotal();
            renderExpenses();
            saveExpensesToLocal();
        }
    });

    function calculateTotal(){
        return expensesArray.reduce((sum, expense) => sum + expense.amount, 0);
    }

    function saveExpensesToLocal(){
        localStorage.setItem("expensesArray", JSON.stringify(expensesArray));
    }

    function updateTotal(){
        totalAmount = calculateTotal();
        totalAmountDisplay.textContent = totalAmount.toFixed(2);
    }




























});
