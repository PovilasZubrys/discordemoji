function textToEmoji() {
    const text = document.getElementById('text').value;
    const arr = text.split('');
    const form = document.getElementById('form');
    form.addEventListener("submit", function (event) {
        event.preventDefault();
    })
    textArray = [];
    arr.forEach(element => {
        let el = element.toLowerCase();
        if (el.match(/\s/g)) {
            let string = ':construction: ';
            textArray.push(string);
        } else if (el.match(/[?]/g)) {
            let string = ':question: ';
            textArray.push(string);
        } else if (el.match(/[!]/g)) {
            let string = ':exclamation: ';
            textArray.push(string);
        } else if (el.match(/[-’/`~#*$@_%+=.,^&(){}[\]|;:”<>\\]/g)) {
            let string = '';
            textArray.push(string);
        } else {
            let string = ':regional_indicator_' + el + ': ';
            textArray.push(string);
        }
    });

    const resultingText = textArray.join('');

    const result = document.getElementById('result');
    result.innerHTML = resultingText;
}