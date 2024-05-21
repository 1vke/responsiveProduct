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

const carousel = document.querySelector(".image-carousel");
const leftArrow = document.querySelector(".arrow.left");
const rightArrow = document.querySelector(".arrow.right");
const paginationDotsWrapper = document.querySelector(".pagination-dots");

Array.prototype.slice.call(carousel.children).map((_, index) => {
    const dotDiv = document.createElement("div")
    dotDiv.className = "dot";
    dotDiv.draggable = false;
    dotDiv.onclick = () => {
        carousel.scrollTo({
            left: carousel.clientWidth * (index),
            behavior: 'smooth',
        });
    };
    paginationDotsWrapper.appendChild(dotDiv);
});

leftArrow.onclick = () => {
    carousel.scrollTo({
        left: carousel.scrollLeft - carousel.clientWidth ,
        behavior: 'smooth',
    });
};
rightArrow.onclick = () => {
    carousel.scrollTo({
        left: carousel.scrollLeft + carousel.clientWidth ,
        behavior: 'smooth',
    });
};

carousel.onscroll = () => {
    Array.prototype.slice.call(paginationDotsWrapper.children).map((dotDiv, index) => {
        const opacity = Math.max((100 - Math.abs(carousel.scrollLeft - (carousel.clientWidth * index)) * .25), 25);
        dotDiv.style.opacity = `${opacity.toFixed(2)}%`;
    });
};
carousel.onscroll();