function copyToClipboard(commandId) {
    var copyText = document.getElementById(commandId);
    var textArea = document.createElement("textarea");
    textArea.value = copyText.textContent.trim(); // Trim whitespace
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    document.body.removeChild(textArea);
    alert("Command copied to clipboard!");
}