// quantity plus phone
const plusPhonebtn = document.getElementById("quantity-plus-phone");
plusPhonebtn.addEventListener("click", () => {
  const isInputValidated = inputValidation("quantity-input-phone");
  if (isInputValidated) {
    productQuantity("quantity-input-phone", true);
    // product value
    const quantity = getValue("quantity-input-phone", true);
    SetProductTotal(quantity, 1219, "product-1-total");
    // calc
    calc();
  } else {
    alert("Invalid!! Min quantity is 1");
    setValue("quantity-input-phone", 1, true);
  }
});

// quantity plus phone
const minusPhonebtn = document.getElementById("quantity-minus-phone");
minusPhonebtn.addEventListener("click", () => {
  const isInputValidated = inputValidation("quantity-input-phone");
  if (isInputValidated) {
    // set quantity
    productQuantity("quantity-input-phone", false);
    // product value
    const quantity = getValue("quantity-input-phone", true);
    SetProductTotal(quantity, 1219, "product-1-total");
    // calc
    calc();
  } else {
    alert("Invalid!! Min quantity is 1");
    setValue("quantity-input-phone", 1, true);
  }
});

// quantity plus case
const plusCasebtn = document.getElementById("quantity-plus-case");
plusCasebtn.addEventListener("click", () => {
  const isInputValidated = inputValidation("quantity-input-case");
  if (isInputValidated) {
    productQuantity("quantity-input-case", true);
    // product value
    const quantity = getValue("quantity-input-case", true);
    SetProductTotal(quantity, 59, "product-2-total");
    // calc
    calc();
  } else {
    alert("Invalid!! Min quantity is 1");
    setValue("quantity-input-case", 1, true);
  }
});

// quantity plus phone
const minusCasebtn = document.getElementById("quantity-minus-case");
minusCasebtn.addEventListener("click", () => {
  const isInputValidated = inputValidation("quantity-input-case");
  if (isInputValidated) {
    // set quantity
    productQuantity("quantity-input-case", false);
    // product value
    const quantity = getValue("quantity-input-case", true);
    SetProductTotal(quantity, 59, "product-2-total");
    // calc
    calc();
  } else {
    alert("Invalid!! Min quantity is 1");
    setValue("quantity-input-case", 1, true);
  }
});
