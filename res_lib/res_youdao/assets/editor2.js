var currentEditObj = null;

function findParent(obj, filter){
    while (obj.nodeType !== Node.DOCUMENT_NODE) {
        if (filter(obj)) {
            return obj;
        }
        obj = obj.parentNode;
    }
    return null;
}

function edit(obj) {
    currentEditObj = obj;
    var content = currentEditObj.nodeValue;
    console.log(content);
    window.Htmlout.editContent(content);
}

function editDone(value) {
	var values = value.split('\n');
	
	var parent = currentEditObj.parentNode;
	var next = currentEditObj.nextSibling;
	var br = document.createElement('br');
	while (values.length > 0) {
		var str = values.shift();
		var text = document.createTextNode(str);
		parent.insertBefore(text, next);
		
		if (values.length > 0) {
			parent.insertBefore(br.cloneNode(), next)
		}
	}
	parent.removeChild(currentEditObj);
}

function recover() {
	els = document.getElementsByClassName("rborder");
	for (i = 0; i < els.length; i++) {
		imgElement = els[i].getElementsByClassName("arrow")[0];
		if (imgElement.getAttribute("src") == "file:///android_asset/juhua.gif") {
			imgElement.setAttribute("src", "file:///android_asset/download.png");
		}
		//window.View.updateResourceButton(imgElement.getAttribute('id'));
	}
}

document.addEventListener('click', function(evt) {
	
    var range;
    range = document.caretRangeFromPoint(evt.clientX, evt.clientY);
    if (range && range.collapsed) {
    	
        var text = range.commonAncestorContainer;
        if (text.nodeType === Node.TEXT_NODE) {
            if (findParent(text, function(obj) {
                return obj.nodeType === Node.ELEMENT_NODE && (obj.getAttribute('contenteditable') === false || obj.getAttribute('contenteditable') === 'false');
            }) === null) {
                edit(text);	
            }
        }
    }
});

window.onload = recover;