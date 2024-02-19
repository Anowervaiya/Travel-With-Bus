function seatNumberCount(event) {
  const finalValue = getInnterTextById("badge-id");
  const totalPrice = getInnterTextById("totalPrice");
  const grandPrice = getInnterTextById("grandTotal");
  const leftSeat = getInnterTextById("left-seats");
  const leftSeatFinalValue = leftSeat - 1;
  const setFinalValue = finalValue + 1;
  const totalFinalPrice = totalPrice + 550;
  const grandFinalPrice = grandPrice + 550;

  if (setFinalValue < 5) {
    // button disabled
    if (setFinalValue > 3) {
      document.getElementById("Apply-btn").removeAttribute("disabled");
    }

    setValue("badge-id", setFinalValue);
    setValue("totalPrice", totalFinalPrice);
    setValue("grandTotal", grandFinalPrice);
    setValue("left-seats", leftSeatFinalValue);
    event.target.classList.add("bg-lime-600");
    const parentAppend = document.getElementById("parent-append");
    const ul = document.createElement("ul");
    const li1 = document.createElement("li");
    li1.innerText = event.target.innerText;
    const li2 = document.createElement("li");
    li2.innerText = "economy";
    const li3 = document.createElement("li");
    li3.innerText = "550";
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    parentAppend.appendChild(ul);
  } else {
    alert(`you can't buy over 4 sit`);
  }
}

function couponCode() {
  const inputValue = document.getElementById("inputValue").value;
  if (inputValue === "NEW15") {
    const label = document.getElementById("labelId");
    label.parentNode.removeChild(label);

    const totalPrice = getInnterTextById("totalPrice");
    const grandTotal = totalPrice - (totalPrice * 15) / 100;
    setValue("grandTotal", grandTotal);
  }
  if (inputValue === "Couple 20") {
    const label = document.getElementById("labelId");
    label.parentNode.removeChild(label);

    const totalPrice = getInnterTextById("totalPrice");
    const grandTotal = totalPrice - (totalPrice * 20) / 100;
    setValue("grandTotal", grandTotal);
  }
}
