// get value
const getValue = (ID, isInputField) => {
  const element = document.getElementById(ID);
  if (isInputField) {
    let value = parseInt(element.value);
    return value;
  } else {
    let value = parseFloat(element.innerText);
    return value;
  }
};

// set value
const setValue = (ID, value, isInputField) => {
  const element = document.getElementById(ID);
  if (isInputField) {
    element.value = value;
  } else {
    element.innerText = value;
  }
};

// check input
const inputValidation = (InputFieldID) => {
  const inputField = document.getElementById(InputFieldID);
  if (inputField.value == "" || inputField.value < 1) {
    return false;
  } else {
    return true;
  }
};

// quantity
const productQuantity = (quantityInputID, isPlus) => {
  let quantity = getValue(quantityInputID, true);

  if (isPlus) {
    quantity += 1;
    setValue(quantityInputID, quantity, true);
  } else {
    if (quantity > 1) {
      quantity -= 1;
    } else {
      quantity = 1;
    }
    setValue(quantityInputID, quantity, true);
  }
};

// Set ProductTotal
const SetProductTotal = (quantity, price, productTotalID) => {
  let productTotal = quantity * price;
  setValue(productTotalID, productTotal, false);
};

// Calculate
const calc = () => {
  const product1total = getValue("product-1-total", false);
  const product2total = getValue("product-2-total", false);

  //   subtotal
  const subTotal = product1total + product2total;
  setValue("sub-total", subTotal, false);
  //   tax
  const taxString = (subTotal * (10 / 100)).toFixed(2);
  const tax = parseFloat(taxString);
  setValue("tax", tax, false);
  //   total
  const total = subTotal + tax;
  setValue("total", total, false);
};
