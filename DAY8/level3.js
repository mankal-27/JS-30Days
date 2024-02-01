const personAccount = {
    firstName: 'John',
    lastName: 'Doe',
    incomes: [],
    expenses: [],
  
    addIncome: function (description, amount) {
      this.incomes.push({ description, amount });
    },
  
    addExpense: function (description, amount) {
      this.expenses.push({ description, amount });
    },
  
    totalIncome: function () {
      return this.incomes.reduce((total, income) => total + income.amount, 0);
    },
  
    totalExpense: function () {
      return this.expenses.reduce((total, expense) => total + expense.amount, 0);
    },
  
    accountInfo: function () {
      return `Account Information:\nName: ${this.firstName} ${this.lastName}\nTotal Income: $${this.totalIncome()}\nTotal Expense: $${this.totalExpense()}\nAccount Balance: $${this.accountBalance()}`;
    },
  
    accountBalance: function () {
      return this.totalIncome() - this.totalExpense();
    },
  };
  
  // Example usage
  personAccount.addIncome('Salary', 3000);
  personAccount.addIncome('Freelance', 500);
  personAccount.addExpense('Rent', 1000);
  personAccount.addExpense('Utilities', 200);
  
  console.log(personAccount.accountInfo());
  