const texts = ["Data Entry Expert", "Transcription Specialist", "Virtual Assistant"];
let count = 0;
let index = 0;
let currentText = '';
let isDeleting = false;
let delay = 100;

(function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    let displayText = isDeleting ? currentText.substring(0, index--) : currentText.substring(0, index++);
    document.querySelector(".animated-text").textContent = displayText;

    if (!isDeleting && index === currentText.length + 1) {
        isDeleting = true;
        delay = 100;
    } else if (isDeleting && index === 0) {
        isDeleting = false;
        count++;
        delay = 300;
    }

    setTimeout(type, delay);
})();
