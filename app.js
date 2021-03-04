let outerContainer = document.getElementById("id-outer-container");
// back the project button on main page
let backProduct = document.getElementById("back-project-button");
// modal display
let modal = document.getElementById("modal-display");
let modalCloseButton = document.getElementById("close-modal-button");
// bookmark icon

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
// main page option buttons
let mainOption2 = document.getElementById("bamboo-stand-reward");
let mainOption3 = document.getElementById("black-edition-reward");

// main page back this project button
backProduct.addEventListener("click", toggleModal);
backProduct.addEventListener("click", scrollToTop);
// modal close button
modalCloseButton.addEventListener("click", closeModal);
// reward options in modal view
modalOption1.onclick = function() {checkRadioOptions(1)};
modalOption2.onclick = function() {checkRadioOptions(2)};
modalOption3.onclick = function() {checkRadioOptions(3)};
modalOption4.onclick = function() {checkRadioOptions(4)};
// reward card options on main page
mainOption2.onclick = function() {checkRadioOptions(2); toggleModal(); scrollToTop()};
mainOption3.onclick = function() {checkRadioOptions(3); toggleModal(); scrollToTop()};

// when modal opens darken the screen
function toggleModal() {
    if(outerContainer.classList.contains("darken-screen")){
        return;
    } else {
        outerContainer.classList.toggle("darken-screen");
        modal.classList.toggle("hide");
    }   
}

// close modal
function closeModal() {
    outerContainer.classList.toggle("darken-screen");
    modal.classList.toggle("hide");
}

// pass a number to reference the reward option selected from the main or modal view
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

// make sure only one reward style is displayed at a time
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

// scroll to top when modal gets opened
function scrollToTop(){
    window.scroll({
        top: 0, 
        behavior: 'smooth'
    });
}