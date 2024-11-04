function sum() {
  let inputX = document.getElementsByName("X")[0];
  let a = inputX.value;
  let inputY = document.getElementsByName("Y")[0];
  let b = inputY.value;

  let c = Number(a) + Number(b);
  let span = document.getElementById("calcResult");
  span.innerHTML = "РЕЗУЛЬТАТ: " + c;

  return c;
}

function min() {
  let inputX = document.getElementsByName("X")[0];
  let a = inputX.value;
  let inputY = document.getElementsByName("Y")[0];
  let b = inputY.value;

  let c = Number(a) - Number(b);
  let span = document.getElementById("calcResult");
  span.innerHTML = "РЕЗУЛЬТАТ: " + c;

  return c;
}

function mult() {
  let inputX = document.getElementsByName("X")[0];
  let a = inputX.value;
  let inputY = document.getElementsByName("Y")[0];
  let b = inputY.value;

  let c = Number(a) * Number(b);
  let span = document.getElementById("calcResult");
  span.innerHTML = "РЕЗУЛЬТАТ: " + c;

  return c;
}

function divide() {
  let inputX = document.getElementsByName("X")[0];
  let a = inputX.value;
  let inputY = document.getElementsByName("Y")[0];
  let b = inputY.value;
  let span = document.getElementById("calcResult");

  if (Number(b) === 0) {
    span.innerHTML = "Делить на ноль нельзя";
    return; // Stop further execution
  } else {
    let c = Number(a) / Number(b);
    span.innerHTML = "РЕЗУЛЬТАТ: " + c;
  }

  return c;
}

function saleStep() {
  let step = document.getElementById('step').value;
  let sale = document.getElementById('sale');
  sale.innerHTML = step + "%";
  coursePrice(); // Call to update course price with discount
}

function coursePrice() {
  let courseName = document.getElementById("courseName").value;
  let coursePriceInput = document.getElementById("coursePrice");
  let step = +document.getElementById("step").value;

  const PYTHON_PRICE = 12000000;
  const FRONT_PRICE = 14000000;
  const UX_PRICE = 16000000;

  let basePrice;
  
  if (courseName === "Python") {
    basePrice = PYTHON_PRICE;
  } else if (courseName === "Frontend") {
    basePrice = FRONT_PRICE;
  } else if (courseName === "UX") {
    basePrice = UX_PRICE;
  }

  if (basePrice) {
    let finalPrice = basePrice * (100 - step) / 100;
    coursePriceInput.value = finalPrice.toFixed(2); // Format to 2 decimal places
  }
}
