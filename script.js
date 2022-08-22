
function getInputFieldbyId(Id) {
    const inputFeild = document.getElementById(Id);
    const inputFieldValueString = inputFeild.value;
    const inputFieldValue = parseInt(inputFieldValueString);
    return inputFieldValue;
}
document.getElementById('calculate').addEventListener('click', function () {
    let perPlayerBudget = getInputFieldbyId('per-player');
    let playerBudget = perPlayerBudget * playername.length; 
    const playerExpense = document.getElementById('player-Expense')
    playerExpense.innerText = playerBudget;
    // console.log(playerExpense);
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