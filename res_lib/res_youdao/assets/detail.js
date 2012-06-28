
function updateResourceDownloadProgress(resourceId, progress) {
	document.getElementById(resourceId).parentElement.parentElement.nextElementSibling.firstChild.textContent = progress;
}

function updateResourceButtonImage(resourceId, imgSrc) {
	document.getElementById(resourceId).parentElement.nextElementSibling.nextElementSibling.firstChild.src = imgSrc;
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
/**
* This method will call java to check every resource's status and then update their buttons.
*/

window.onload = recover;