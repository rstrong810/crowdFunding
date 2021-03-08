let outerContainer = document.getElementById("id-outer-container");
// back the project button on main page
let backProduct = document.getElementById("back-project-button");
// nav links container
let navLinksContainer = document.getElementById("nav-links-container");
let hamburgerBar = document.getElementById("hamburger-bar-id");
let mobileOpenHamburger = document.getElementById("mobile-open-hamburger");
let mobileCloseHamburger = document.getElementById("mobile-close-hamburger");
// bookmark
let bookmarkAfter = document.getElementById("bookmark-after");
// modal display
let modal = document.getElementById("modal-display");
let modalCloseButton = document.getElementById("close-modal-button");
// modal success display
let modalSuccess = document.getElementById("modal-success-display");
// dynamic data for current backers and money amount backed
let currentBackerData = document.getElementById("current-backers");
let currentMoneyBackedData = document.getElementById("current-cash-backed");
let quantityChoice1Data = document.getElementsByClassName("quantity-choice-1");
let quantityChoice2Data = document.getElementsByClassName("quantity-choice-2");
let quantityChoice3Data = document.getElementsByClassName("quantity-choice-3");
// main page option buttons
let mainOption2 = document.getElementById("bamboo-stand-reward");
let mainOption3 = document.getElementById("black-edition-reward");
// bookmark
let bookmark = document.getElementById("bookmark-outer");
let bookmarkFill = document.getElementById("bookmark-fill");
// modal reward options
let modalOption1 = document.getElementById("no-reward-checkbox");
let modalOption2 = document.getElementById("reward-checkbox-above-25");
let modalOption3 = document.getElementById("reward-checkbox-above-75");
let modalOption4 = document.getElementById("reward-checkbox-above-200");
// modal reward cards
let rewardCardOption1 = document.getElementById("reward-card-option1");
let rewardCardOption2 = document.getElementById("reward-card-option2");
let rewardCardOption3 = document.getElementById("reward-card-option3");
let rewardCardOption4 = document.getElementById("reward-card-option4");
// modal reward card hidden bottoms
let rewardCardOption1Bottom = document.getElementById("option1-selected-bottom");
let rewardCardOption2Bottom = document.getElementById("option2-selected-bottom");
let rewardCardOption3Bottom = document.getElementById("option3-selected-bottom");
let rewardCardOption4Bottom = document.getElementById("option4-selected-bottom");
// modal reward card continue buttons
let continueButtonNoReward = document.getElementById("continue-button-rewardless");
let continueButtonOption1 = document.getElementById("continue-button-option1");
let continueButtonOption2 = document.getElementById("continue-button-option2");
let continueButtonOption3 = document.getElementById("continue-button-option3");
// modal money inputs
let moneyInputOption1 = document.getElementById("input-option1");
let moneyInputOption2 = document.getElementById("input-option2");
let moneyInputOption3 = document.getElementById("input-option3");
// modal success button
let modalSuccessButton = document.getElementById("success-button");

// nav link display mobile
hamburgerBar.onclick = function() {navToggle()};
// main page back this project button
backProduct.onclick = function() {toggleModal(); scrollToTop()};
//main page bookmark icon
bookmark.addEventListener("click", toggleBookmark);
// modal close button
modalCloseButton.addEventListener("click", closeModal);
// reward card checkboxes in modal view
modalOption1.onclick = function() {checkRadioOptions(1)};
modalOption2.onclick = function() {checkRadioOptions(2)};
modalOption3.onclick = function() {checkRadioOptions(3)};
modalOption4.onclick = function() {checkRadioOptions(4)};
// reward card selections in modal view
rewardCardOption1.onclick = function() {checkRadioOptions(1)};
rewardCardOption2.onclick = function() {checkRadioOptions(2)};
rewardCardOption3.onclick = function() {checkRadioOptions(3)};
// reward card options on main page
mainOption2.onclick = function() {checkRadioOptions(2); toggleModal(); scrollToTop()};
mainOption3.onclick = function() {checkRadioOptions(3); toggleModal(); scrollToTop()};
// modal continue buttons for selected reward
continueButtonNoReward.onclick = function() {openModalSuccess(); incrementBackerNumber(); scrollToTop()};
continueButtonOption1.onclick = function() {if(getMoneyValue(1)){openModalSuccess(); incrementBackerNumber(); decrementChoice1(); scrollToTop()}};
continueButtonOption2.onclick = function() {if(getMoneyValue(2)){openModalSuccess(); incrementBackerNumber(); decrementChoice2(); scrollToTop()}};
continueButtonOption3.onclick = function() {if(getMoneyValue(3)){openModalSuccess(); incrementBackerNumber(); decrementChoice3(); scrollToTop()}};
// modal success button
modalSuccessButton.onclick = function() {changeDynamicValues(); closeModalSuccess()}

// get the inner html values of the dynamic data
// current amount of backers
let currentBackerNumber = currentBackerData.innerHTML.split(",");
currentBackerNumber = currentBackerNumber[0] + currentBackerNumber[1];
let currentBackerNumberFinal = currentBackerData.innerHTML; //incase first variable is not used
// current amount of backed money
let currentMoneyBackedNumber = currentMoneyBackedData.innerHTML.split("$");
currentMoneyBackedNumber = currentMoneyBackedNumber[1];
let currentMoneyBackedNumberFinal = currentMoneyBackedNumber; //incase first variable is not used
currentMoneyBackedNumber = currentMoneyBackedNumber.split(",");
currentMoneyBackedNumber = currentMoneyBackedNumber[0] + currentMoneyBackedNumber[1];
// item reward quantities
let quantityChoice1Number = quantityChoice1Data[0].innerHTML;
let quantityChoice2Number = quantityChoice2Data[0].innerHTML;
let quantityChoice3Number = quantityChoice3Data[0].innerHTML;

// bookmark clicked functionality
function toggleBookmark(){
    bookmark.classList.toggle("bookmark-selected");
    bookmarkFill.classList.toggle("bookmark-fill-item");
    if (bookmarkAfter.innerHTML === "Bookmark") {
        bookmarkAfter.innerHTML = "Bookmarked";
    } else {
        bookmarkAfter.innerHTML = "Bookmark";
    }
}

// when a new backer supports the project
function incrementBackerNumber() {
    currentBackerNumber = parseInt(currentBackerNumber);
    currentBackerNumber += 1;
    currentBackerNumberFinal = numberWithCommas(currentBackerNumber);
}

// add pledge money value to the total money backed
function incrementMoneyBacked(value){
    value = parseInt(value);
    currentMoneyBackedNumber = parseInt(currentMoneyBackedNumber);
    currentMoneyBackedNumber += value;
    currentMoneyBackedNumberFinal = numberWithCommas(currentMoneyBackedNumber);
}

// decrement quantity of choice 1 reward
function decrementChoice1(){
    quantityChoice1Number = parseInt(quantityChoice1Number);
    quantityChoice1Number -= 1;
}

// decrement quantity of choice 2 reward
function decrementChoice2(){
    quantityChoice2Number = parseInt(quantityChoice2Number);
    quantityChoice2Number -= 1;
}

// decrement quantity of choice 3 reward
function decrementChoice3(){
    quantityChoice3Number = parseInt(quantityChoice3Number);
    quantityChoice3Number -= 1;
}

// if data changes need to be made this will execute when modal success closes
function changeDynamicValues() {
    currentBackerData.innerHTML = currentBackerNumberFinal;
    currentMoneyBackedData.innerHTML = "$" + currentMoneyBackedNumberFinal;
    for(let i=0; i < quantityChoice1Data.length; i++) {
        quantityChoice1Data[i].innerHTML = quantityChoice1Number;
        quantityChoice2Data[i].innerHTML = quantityChoice2Number;
        quantityChoice3Data[i].innerHTML = quantityChoice3Number;
    }
}

// get the users pledge amount from the input
function getMoneyValue(optionNumber) {
    let value = "";
    switch (optionNumber) {
        case 1:
            value = moneyInputOption1.value;
            break;
        case 2:
            value = moneyInputOption2.value;
            break;
        case 3:
            value = moneyInputOption3.value;
            break;
        default:
            console.log("error getting money data");
            break;
    }

    if(checkMoneyValue(value)){
        incrementMoneyBacked(value);
        return true;
    } else {
        return false;
    }
}


function checkMoneyValue(value) {
    if(Number.isInteger(parseInt(value))){
        if(value >= 1){
            return true;
        } else {
            return false;
        }
    }
}

// convert number to string with commas
function numberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// when modal opens darken the screen and disable main page buttons
function toggleModal() {
    disableButtonsToggle();
    outerContainer.classList.toggle("darken-screen");
    modal.classList.toggle("hide");
     
}

// open modal success
function openModalSuccess() {
    modal.classList.toggle("hide");
    modalSuccess.classList.toggle("hide");
}

// close modal
function closeModal() {
    outerContainer.classList.toggle("darken-screen");
    modal.classList.toggle("hide");
    disableButtonsToggle();
}

//close modal success
function closeModalSuccess() {
    outerContainer.classList.toggle("darken-screen");
    modalSuccess.classList.toggle("hide");
    disableButtonsToggle();
}

// pass a number to reference the reward option selected from the main or modal view.
// the selected reward will display the hidden bottom to the reward card
function checkRadioOptions(optionNumber) {
    removeSelectedOption();
    switch (optionNumber) {
        case 1:
            rewardCardOption1.classList.add("selected-option");
            rewardCardOption1Bottom.classList.remove("hide");
            modalOption1.checked = true;
            break;
        case 2:
            rewardCardOption2.classList.add("selected-option");
            rewardCardOption2Bottom.classList.remove("hide");
            modalOption2.checked = true;
            break;
        case 3:
            rewardCardOption3.classList.add("selected-option");
            rewardCardOption3Bottom.classList.remove("hide");
            modalOption3.checked = true;
            break;
        case 4:
            rewardCardOption2.classList.add("selected-option");
            rewardCardOption2Bottom.classList.remove("hide");
            modalOption4.checked = true;
            break;
    
        default:
            console.log("error with switch statement");
            break;
    }
}

// to make sure only one reward gets the selected style
function removeSelectedOption() {
    rewardCardOption1.classList.remove("selected-option");
    rewardCardOption1Bottom.classList.add("hide");

    rewardCardOption2.classList.remove("selected-option");
    rewardCardOption2Bottom.classList.add("hide");

    rewardCardOption3.classList.remove("selected-option");
    rewardCardOption3Bottom.classList.add("hide");
    
    rewardCardOption4.classList.remove("selected-option");
    rewardCardOption4Bottom.classList.add("hide");
}

// scroll to top of page
function scrollToTop(){
    window.scroll({
        top: 0, 
        behavior: 'smooth'
    });
}

// disables buttons on the main page
function disableButtonsToggle(){
    backProduct.classList.toggle("disabled-button");
    mainOption2.classList.toggle("disabled-button");
    mainOption3.classList.toggle("disabled-button");
}

function navToggle() {
    navLinksContainer.classList.toggle("hide");
    mobileOpenHamburger.classList.toggle("hide");
    mobileCloseHamburger.classList.toggle("hide");
}