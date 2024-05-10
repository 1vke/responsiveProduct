const variantSelectionDiv = document.querySelector(".variant-selection");

Array.prototype.slice.call(variantSelectionDiv.children).forEach(optionSelection => {
    const header = optionSelection?.querySelector(".header");
    const radioInputs = optionSelection?.querySelectorAll("input[type=radio]");

    const onRadioChange = (e) => {
        header.innerText = `${header.innerText.split(":")[0]}: ${e.currentTarget.value}`
    }
    radioInputs.forEach(radioInput => radioInput.onchange = onRadioChange);
    
    radioInputs[0].checked = true;
});