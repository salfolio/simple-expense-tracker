//Elements 

const nameInput = document.getElementById('name-input');
const dateInput = document.getElementById('date-input');
const amountInput = document.getElementById('amount-input');
const submitBtn = document.getElementById('submit-btn');
const expenseTable = document.querySelector('.expense-items');
const defaultText = document.getElementById('text-default-value');
const clearAllBtn = document.getElementById('clear-all-btn')

//Functions
const addExpense = () => {
    if(nameInput.value === '' || dateInput.value === '' || amountInput.value === ''){
        alert('please enter values');
    }else{
        createExpenseElement(nameInput.value, dateInput.value, amountInput.value);
        toggleDefaultText();
        setBackToDefault();
        console.log(expenseTable.children.length);
    }
}

const createExpenseElement = (name, date, amount) => {
    const element = document.createElement('tr');
    const attribute = document.createAttribute('data-id');
    attribute.value = generateId();
    element.setAttributeNode(attribute);
    element.innerHTML = 
    `
    <td>${name}</td>
    <td>${date}</td>
    <td>$${amount}</td>
    <td><button type="button" class="delete-btn">X</button></td>
    `;

    const deleteBtn = element.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', deleteItem);

    expenseTable.append(element);

    console.log(attribute.value);
    console.log(nameInput.value);
    console.log(dateInput.value);
    console.log(amountInput.value);
}

const generateId = () => {
    return Math.floor(Math.random() * Date.now())
}

const setBackToDefault = () => {
    nameInput.value = '';
    dateInput.value = '';
    amountInput.value = '';
}

const deleteItem = (event) => {
    const element = event.currentTarget.parentElement.parentElement;
    expenseTable.removeChild(element);
    toggleDefaultText();
}

const clearAll = () => {
    while(expenseTable.children.length > 1){
        expenseTable.removeChild(expenseTable.children[1]);
    }
    toggleDefaultText();
}

const toggleDefaultText = () => {
    if(expenseTable.children.length > 1){
        defaultText.classList.add('default-text-display-invisible');
    }
    else{
        defaultText.classList.remove('default-text-display-invisible');
    }
}

//Event Listeners
submitBtn.addEventListener('click', addExpense)
clearAllBtn.addEventListener('click', clearAll)