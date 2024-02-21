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
        var totalPrice = calPrice(totalSelected);
        const div = document.getElementById('ticInfo');
        const grandTotal= document.getElementById('grandTotal');
        grandTotal.innerText=totalPrice;
        if(totalSelected==4){
            const btn=document.getElementById('btnForCoupon');
            btn.removeAttribute('disabled');
            discount(totalPrice);
        }

        div.classList.add('flex');
        const clonedDiv = div.cloneNode(true);
        clonedDiv.classList.remove('hidden');
        
        const paragraph =clonedDiv.querySelector('#paragraph1');
        paragraph.innerText = seatId;

        const ticInfoHold = document.getElementById('ticInfoHolder');
        ticInfoHold.appendChild(clonedDiv);

        const nextBtn=document.getElementById('next-btn');
        nextBtn.removeAttribute('disabled');

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

// price calculation
function calPrice(totalSelected){
    var totalPrice = totalSelected * 550;
    const tp=document.getElementById('total-price');
    tp.innerText=totalPrice;

    return totalPrice;
}

// discount
function discount(totalPrice){
    
    document.getElementById('btnForCoupon').addEventListener('click',function(){
   
        const inputField=document.getElementById('inputField');
        const inputText=inputField.value;

        if(inputText==='NEW15'){
            var grandPrice=totalPrice-(totalPrice*(15/100));
            const grandTotal= document.getElementById('grandTotal');
            grandTotal.innerText=grandPrice;

            var offerField=document.getElementById('offerField');
            offerField.classList.add('hidden');
        }
        else if(inputText==='Couple 20'){
            var grandPrice=totalPrice-(totalPrice*(20/100));
            const grandTotal= document.getElementById('grandTotal');
            grandTotal.innerText=grandPrice;

            var offerField=document.getElementById('offerField');
            offerField.classList.add('hidden');
        }

        inputField.value='';

    })

}
