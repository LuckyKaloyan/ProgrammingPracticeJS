
function solve() {
    const inputText = document.getElementById('input').value;
    const sentences = inputText.split('.').filter(sentence => sentence.trim().length > 0);

    // Clear the output div
    const outputElement = document.getElementById('output');
    while (outputElement.firstChild) {
        outputElement.removeChild(outputElement.firstChild);
    }

    // Generate and append paragraphs
    for (let i = 0; i < sentences.length; i += 3) {
        const paragraph = document.createElement('p');
        let paragraphText = '';

        if (sentences[i]) {
            paragraphText += sentences[i].trim() + '. ';
        }
        if (sentences[i + 1]) {
            paragraphText += sentences[i + 1].trim() + '. ';
        }
        if (sentences[i + 2]) {
            paragraphText += sentences[i + 2].trim() + '. ';
        }

        paragraph.textContent = paragraphText.trim();
        outputElement.appendChild(paragraph);
    }
}

