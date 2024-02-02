class PersonAccount {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.incomes = [];
        this.expenses = [];
    }

    addIncome(amount, description) {
        this.incomes.push({ amount, description });
    }

    addExpense(amount, description) {
        this.expenses.push({ amount, description });
    }

    totalIncome() {
        return this.incomes.reduce((total, income) => total + income.amount, 0);
    }

    totalExpense() {
        return this.expenses.reduce((total, expense) => total + expense.amount, 0);
    }

    accountBalance() {
        return this.totalIncome() - this.totalExpense();
    }

    accountInfo() {
        console.log(`Account Information for ${this.firstname} ${this.lastname}:`);
        console.log(`Total Income: $${this.totalIncome()}`);
        console.log(`Total Expense: $${this.totalExpense()}`);
        console.log(`Account Balance: $${this.accountBalance()}`);
        console.log("Incomes:");
        this.incomes.forEach(income => console.log(`- ${income.description}: $${income.amount}`));
        console.log("Expenses:");
        this.expenses.forEach(expense => console.log(`- ${expense.description}: $${expense.amount}`));
    }
}

// Example usage:
const person = new PersonAccount("John", "Doe");
person.addIncome(2000, "Salary");
person.addIncome(500, "Freelance Work");
person.addExpense(800, "Rent");
person.addExpense(200, "Groceries");

person.accountInfo();
