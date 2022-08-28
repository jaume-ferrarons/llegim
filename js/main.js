let correct = 0;
let total = 0;
let time = 0;

function setRandomWord() {
    const words = vocabulary.es;
    const n = Math.floor(Math.random() * words.length);
    $("#word").text(words[n]);
}

function renderCounters() {
    $("#n_error").text(total - correct);
    $("#n_ok").text(correct);
}

function renderClock() {
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor((time - hours * 3600) / 60);
    let seconds = time % 60;
    hours = hours >= 10 ? hours : "0" + hours;
    minutes = minutes >= 10 ? minutes : "0" + minutes;
    seconds = seconds >= 10 ? seconds : "0" + seconds;
    $("#clock_view").text(hours + ":" + minutes + ":" + seconds);
}

function wireButtons() {
    $("#error_btn").click(() => {
        total += 1;
        renderCounters();
        setRandomWord();
    });
    $("#ok_btn").click(() => {
        total = total + 1;
        correct = correct + 1;
        renderCounters();
        setRandomWord();
    });
    $("#reset_btn").click(reset);
}

function updateClock() {
    time += 1;
    renderClock();
}

function reset() {
    correct = 0;
    total = 0;
    time = 0;
    renderCounters();
    renderClock();  
    setRandomWord(); 
}

function init() {
    wireButtons();
    reset();
    setInterval(updateClock, 1000);
}

$(init);

