// seat selected
const seatSel = document.getElementById('seatSelected');
var seat = seatSel.innerText;
var seatNum = parseInt(seat);

function updateSeat() {
    seatNum += 1;
    seatSel.innerText = seatNum;
}

// Remaining Seat
const seatRem = document.getElementById('remainingSeat');
var remSeat = seatRem.innerText;
var remSeatNum = parseInt(remSeat);

function updateRemSeat() {
    remSeatNum -= 1;
    seatRem.innerText = remSeatNum;
}

// Select count
var totalSelected = 0;
const clickCounters = {
    A1: 0,
    A2: 0,
    A3: 0,
    A4: 0,
    B1: 0,
    B2: 0,
    B3: 0,
    B4: 0
};
function updateClickCount(seatId) {

    if (!clickCounters[seatId] && totalSelected < 4) {
        clickCounters[seatId]++;
        document.getElementById(seatId).style.backgroundColor = 'green';
        document.getElementById(seatId).style.color = 'white';
        totalSelected++;

        updateSeat();
        updateRemSeat();

        const div = document.getElementById('ticInfo');
        
        div.classList.add('flex');
        const clonedDiv = div.cloneNode(true);
        clonedDiv.classList.remove('hidden');
        
        const paragraph =clonedDiv.querySelector('#paragraph1');
        paragraph.innerText = seatId;

        const ticInfoHold = document.getElementById('ticInfoHolder');
        ticInfoHold.appendChild(clonedDiv);
    }
    else if (!clickCounters[seatId] && totalSelected >= 4) {
        alert('Already selected 4 seats');
    }
}

document.getElementById('seatContainer').addEventListener('click', function (event) {
    if (event.target.classList.contains('clickable')) {
        const seatId = event.target.id;
        updateClickCount(seatId);
    }
})


