function copyToClipboard(commandId) {
    var copyText = document.getElementById(commandId).cloneNode(true);


    var spanElement = copyText.querySelector('span');
    if (spanElement) {
        spanElement.parentNode.removeChild(spanElement);
    }

    var textArea = document.createElement("textarea");
    textArea.value = copyText.textContent.trim();
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");

    // document.body.removeChild(textArea);
    // alert("Command copied to clipboard!");
}