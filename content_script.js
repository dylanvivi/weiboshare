/*
	var selection = window.getSelection ();      //get the selection object     
	var focusNodeProp = selection.focusNode;     //get the node containing the end of selection 
	var mid = focusNodeProp.parentNode.parentNode.parentNode.parentNode.getAttribute("mid"); //get selected mid
*/

var tooltip = document.createElement("div");
var img = document.createElement("img");
var url = chrome.extension.getURL("share.gif");
img.src = url;
document.body.appendChild(tooltip);
tooltip.id = "tooltip";
tooltip.appendChild(img);  

//选中分享
var $sinaMiniBlogShare = function(eleShare, eleContainer) {
	var eleTitle = document.getElementsByTagName("title")[0];
	eleContainer = eleContainer || document;
	var funGetSelectTxt = function() {
		var txt = "";
		if(document.selection) {
			txt = document.selection.createRange().text;	// IE
		} else {
			txt = document.getSelection();
		}
		return txt.toString();
	};
	eleContainer.onmouseup = function(e) {
		e = e || window.event;
		var txt = funGetSelectTxt(), sh = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
		var left = (e.clientX - 40 < 0) ? e.clientX + 20 : e.clientX - 40, top = (e.clientY - 40 < 0) ? e.clientY + sh + 20 : e.clientY + sh - 40;
		if (txt) {
			eleShare.style.display = "inline";
			eleShare.style.left = left + "px";
			eleShare.style.top = top + "px";
			eleShare.style.position = "absolute";
		} else {
			eleShare.style.display = "none";
		}
	};
	eleShare.onclick = function() {
		var txt = funGetSelectTxt(), title = (eleTitle && eleTitle.innerHTML)? eleTitle.innerHTML : "未命名页面";
		if (txt) {
			window.open('http://v.t.sina.com.cn/share/share.php?title=' + txt + '→来自页面"' + title + '"的文字片段&url=' + window.location.href);	
		}
	};
};

$sinaMiniBlogShare(tooltip);
