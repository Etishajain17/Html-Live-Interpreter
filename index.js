function refresh() {
    var text = document.getElementById('editor-textarea').value; document.getElementById('viewer').srcdoc = text;
}
