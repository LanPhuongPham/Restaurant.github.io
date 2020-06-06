
// Modal

var modal_ctm = document.getElementById('simpleModal');

var modal_ty = document.getElementById('simpleModal02');

var submitButton = document.getElementById('submitbtn');
submitButton.addEventListener('click', submitBooking);

var closeModalButton = document.getElementById('thanks_closeBtn');
closeModalButton.addEventListener('click', closeThanks);


function submitBooking() {
    closeModal();
    openThanks();

}

var modalBtn = document.getElementById('modalBtn');
var closeB = document.getElementsByClassName('closeBtn')[0];


// Music Player

var playBtn = document.getElementById('playbutton');
var pauseBtn = document.getElementById('pausebutton');

var play = document.getElementById('playbutton');
var stop = document.getElementById('pausebutton');

modalBtn.addEventListener('click', openModal);
closeB.addEventListener('click', closeModal);




play.addEventListener('click', playFile);
stop.addEventListener('click', pauseFile);

playBtn.addEventListener('click', playMusic);
pauseBtn.addEventListener('click', pauseMusic);

function playMusic() {
    pauseBtn.style.display = 'block';
    playBtn.style.display = 'none';
}

function pauseMusic() {
    playBtn.style.display = 'block';
    pauseBtn.style.display = 'none';
}
function playFile() {
    $("#mp3File")[0].play();
}
function pauseFile() {
    $("#mp3File")[0].pause();
}

// Modal
function openModal() {
    modal_ctm.style.display = 'block';
}

function closeModal() {
    modal_ctm.style.display = 'none';
}

function openThanks() {
    modal_ty.style.display = 'block';
}

function closeThanks() {
    modal_ty.style.display = 'none';
}


// navigaton bar
const selectElement = (element) => document.querySelector(element);

selectElement('.menu-icons').addEventListener('click', () => {
    selectElement('nav').classList.toggle('active');
});

// the electric clock

const getTime = () => {
    const date = new Date();
    let hours = date.getHours();
    const amPm = hours >= 12 ? 'PM' : 'AM';
    if (hours > 12) {
        hours -= 12;
    }
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const timeComponents = [hours, minutes, seconds, amPm]
        .map(cmp => `<span>${String(cmp).padStart(2, '0')}</span>`);
    return `${timeComponents.join(':')}`;
}

const init = () => {
    setInterval(() => {
        document.getElementById('time')
            .innerHTML = getTime();
    }, 1000);
};

init();

// check empty tables

var animalContainer = document.getElementById("animal-info");
var check_btn = document.getElementById("checkbtn");


check_btn.addEventListener("click", function () {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://api.myjson.com/bins/1gfe12');
    ourRequest.onload = function () {
        var ourData = JSON.parse(ourRequest.responseText);
        renderHTML(ourData);
        // console.log(ourData[0]);

    };
    ourRequest.send();
});



function renderHTML(data) {
    var htmlString = "";
    for (i = 0; i < data.length; i++) {
        htmlString += "<p>" + data[i].numberOfTable + " are available " + data[i].address + "</p>";

    }
    animalContainer.insertAdjacentHTML('beforeend', htmlString);
}



var checkbutton = document.getElementById('checkbtn');

checkbutton.addEventListener('click', showbookbutton);

function showbookbutton() {
    book_btn.style.display = "block";
}
