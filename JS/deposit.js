document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-feild');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    const currentDepositTotal = previousDepositTotal + newDepositAmount;

    depositTotalElement.innerText = currentDepositTotal;

    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = balanceTotal.innerText;

    const newBalanceTotal = parseFloat(previousBalanceTotal) + newDepositAmount;

    balanceTotal.innerText = newBalanceTotal;



    depositField.value = '';
})