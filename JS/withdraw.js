document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');

    const newWithdrawAmount = withdrawField.value;

    withdrawField.value = '';


    if (isNaN(parseFloat(newWithdrawAmount))) {
        alert('Please provide a valid number');
        return;
    }

    const withdrawTotal = document.getElementById('withdraw-total');

    const previousWithdrawTotal = withdrawTotal.innerText;





    const balanceTotal = document.getElementById('balance-total');
    const currentBalance = balanceTotal.innerText;

    if (parseFloat(newWithdrawAmount) > parseFloat(currentBalance)) {
        alert('Baap er bank e eto taka nei.');
        return;
    }

    const newWithdrawTotal = parseFloat(previousWithdrawTotal) + parseFloat(newWithdrawAmount);

    withdrawTotal.innerText = newWithdrawTotal;

    const newBalance = parseFloat(currentBalance) - parseFloat(newWithdrawAmount);
    balanceTotal.innerText = newBalance;
})