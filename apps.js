const seats = document.getElementsByClassName("seat");
const availableSeat = document.getElementById("availableSeats");
const total = document.getElementById("total");
const rightbutton = document.getElementById("right-button");
const maxTickets = document.getElementById("max-ticket");
const couponField = document.getElementById("coupon-field");
const couponBtn = document.getElementById("coupon-btn");
const discountContainer = document.getElementById('discount-container');
const discountText = document.getElementById('discounts');
const couponContainer = document.getElementById('coupon-container')
const grandTotal = document.getElementById('grand-total');
const phoneNumbers = document.getElementById('phone');
const submitBtn = document.getElementById('submit')

let seatCount = 0;
let totalTk = 0;
let seatAvailAbles = 8;
for (const seat of seats) {
  seat.addEventListener("click", function (even) {
    seat.style.backgroundColor = "#1DD100";
    seat.style.color = "white";

    const tbody = document.querySelector("tbody");
    const tr = document.createElement("tr");
    tr.innerHTML = `
            <td>${even.target.innerText}</td>
            <td>Economics</td>
            <td>550</td>  `;
    tbody.appendChild(tr);

    seatCount++;
    totalTk = totalTk + 550;
    seatAvailAbles--;
    seat.disabled = true;
    phoneNumbers.disabled = false
 
    availableSeat.innerText = seatCount;
    total.innerText = totalTk;
    rightbutton.innerText = seatAvailAbles;
    grandTotal.innerText = totalTk

    if (seatCount >= 4) {
      for (const seat of seats) {
        seat.disabled = true;
        maxTickets.innerText = "Ticket reach out";
        couponField.disabled = false;
        couponBtn.disabled = false;
      }
    }

  });
}


couponBtn.addEventListener('click', function(){
    const coupon = couponField.value;
    if(coupon === 'NEW15' || coupon === 'Couple 20'){
        if(coupon === 'NEW15'){
            const discounts = totalTk*0.15;
            discountContainer.classList.remove('hidden');
            discountText.innerText = discounts;
            couponContainer.classList.add('hidden');

            const totalPrices = totalTk - discounts;
            grandTotal.innerText = totalPrices
        }

        if(coupon === 'Couple 20'){
            const discounts = totalTk * 0.2;
            discountContainer.classList.remove('hidden');
            discountText.innerText = discounts;
            couponContainer.classList.add('hidden');

            const totalPrice = totalTk - discounts;
            grandTotal.innerText = totalPrice
            
        }
    }else{
        document.getElementById('invalid').classList.remove('hidden')
    }

    
})

phoneNumbers.addEventListener('input',function (){
    const number = phoneNumbers.value;
    if(seatCount > 0 && number.length > 0){
        submitBtn.disabled = false
    }else{
        submitBtn.disabled = true
    }
})