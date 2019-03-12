
var delay;var delay1;
// Initialize CodeMirror editor with a nice html5 canvas demo.
var editor = CodeMirror.fromTextArea(document.getElementById('code'), {
    mode: 'text/html',
    lineNumbers: true,
    gutters: ["CodeMirror-linenumbers", "breakpoints"]
});
editor.on("change", function() {
    clearTimeout(delay);
    delay = setTimeout(updatePreview, 300);
});
editor.on("gutterClick", function(cm, n) {
    var info = cm.lineInfo(n);
    cm.setGutterMarker(n, "breakpoints", info.gutterMarkers ? null : makeMarker());
});

function updatePreview() {
    var previewFrame = document.getElementById('preview');

    var preview =  previewFrame.contentDocument ||  previewFrame.contentWindow.document;
    preview.open();
    preview.write(editor.getValue());
    preview.close();
}

function makeMarker() {
    var marker = document.createElement("div");
    marker.style.color = "#822";
    marker.innerHTML = "●";
    return marker;
}
setTimeout(updatePreview, 300);
//////////////////////////
var editor1 = CodeMirror.fromTextArea(document.getElementById('code1'), {
    mode: 'text/html',
    lineNumbers: true,
    gutters: ["CodeMirror-linenumbers", "breakpoints"]
});
editor1.on("change", function() {
    clearTimeout(delay1);
    delay1 = setTimeout(updatePreview1, 300);
});
editor1.on("gutterClick", function(cm, n) {
    var info = cm.lineInfo(n);
    cm.setGutterMarker(n, "breakpoints", info.gutterMarkers ? null : makeMarker1());
});
function updatePreview1() {
    var previewFrame = document.getElementById('preview1');

    var preview =  previewFrame.contentDocument ||  previewFrame.contentWindow.document;
    preview.open();
    preview.write(editor1.getValue());
    preview.close();
}
function makeMarker1() {
    var marker = document.createElement("div");
    marker.style.color = "#822";
    marker.innerHTML = "●";
    return marker;
}
setTimeout(updatePreview1, 800);

///

