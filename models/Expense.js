const mongoose = require('mongoose');

const ExpenseSchema = mongoose.Schema({
    expense_name : {
        type: String,
        required: true
    },
    cost : {
        type : Number,
        required: true,
    },
    date : {
        type: Date,
        required: true
    },
    description : {
        type: String,
    }
}) ;

module.exports = Expense = mongoose.model('expense',ExpenseSchema);