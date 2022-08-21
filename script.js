const playername = [];

function display(playernames){
    const tbody = document.getElementById('player-names');
    tbody.innerHTML= " ";
    for(let i = 0; i < playername.length; i++){
        // console.log(playername[i].playerName);
        const name = playername[i].playerName;
        const tr = document.createElement("tr");
        tr.innerHTML = ` 
            <th>${i + 1}</th>
            <td>${name}</td>
        `
        tbody.appendChild(tr);
    }
}


function addPlayers(element){

    // console.log(element.parentNode.children);
    // console.log(element.parentNode.children[0].innerText);

    const playerName = element.parentNode.children[0].innerText;
    // console.log(playerName);
    const PlayerNames ={
        playerName: playerName,
    }
    playername.push(PlayerNames);

    display(playername);
    // console.log(playername.length);

}







// function getInputFieldbyId(Id) {
//     const inputFeild = document.getElementById(Id);
//     const inputFieldValueString = inputFeild.value;
//     const inputFieldValue = parseFloat(inputFieldValueString);
//     return inputFieldValue;
// }
// function getElementTextbyId(Id, newValue) {
//     const elementField = document.getElementById(Id);
//     const elementFieldString = elementField.innerText;
//     const elementFiel = parseFloat(elementFieldString);
//     elementField.innerText = newValue;
//     return elementFiel;
// }
// function setElementVbyId(Id) {
//     const elementField = document.getElementById(Id);
//     const elementFieldString = elementField.innerText;
//     const elementFiel = parseFloat(elementFieldString);
//     return elementFiel;
// }


// document.getElementById('calculate').addEventListener('click', function () {
//     let perPlayer = getInputFieldbyId('per-player');
//     let playerexpense = perPlayer * 5; 
//     getElementTextbyId('player-Expense', playerexpense);

// })

// document.getElementById('calculate-total').addEventListener('click', function(){
//     let coachCost = getInputFieldbyId('coach');
//     let managerCost = getInputFieldbyId('manager');
//     let playerExpense =setElementVbyId('player-Expense')
//     let totalCost = coachCost + managerCost + playerExpense;
//     getElementTextbyId('total', totalCost);
// })
