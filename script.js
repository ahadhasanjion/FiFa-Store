function getInputFieldbyId(Id) {
    const inputField = document.getElementById(Id);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    return inputFieldValue;

}
document.getElementById('calculate').addEventListener('click', function () {
    let perPlayerBudget = getInputFieldbyId('per-player');
    let playerBudget = perPlayerBudget * playername.length;
    let playerExpense = document.getElementById('player-Expense')
    playerExpense.innerText = playerBudget;

})
document.getElementById('calculate-total').addEventListener('click', function () {
    let perPlayerBudget = getInputFieldbyId('per-player');
    let playerBudget = perPlayerBudget * playername.length;

    let managerExpense = getInputFieldbyId('manager');
    let coachExpense = getInputFieldbyId('coach');
    let totalBudget = managerExpense + coachExpense + playerBudget;

    let myTotal = document.getElementById('total');
    myTotal.innerText = totalBudget;
})