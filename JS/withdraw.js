document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');

    const newWithdrawAmount = withdrawField.value;

    const withdrawTotal = document.getElementById('withdraw-total');

    const previousWithdrawTotal = withdrawTotal.innerText;

    const newWithdrawTotal = parseFloat(previousWithdrawTotal) + parseFloat(newWithdrawAmount);

    withdrawTotal.innerText = newWithdrawTotal;

    const balanceTotal = document.getElementById('balance-total');
    const currentBalance = balanceTotal.innerText;
    const newBalance = parseFloat(currentBalance) - parseFloat(newWithdrawAmount);
    balanceTotal.innerText = newBalance;


    withdrawField.value = '';





})