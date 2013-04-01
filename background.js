// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Called when the user clicks on the browser action.
var flag = true;

chrome.browserAction.onClicked.addListener(function(tab) {
	if(flag){
		chrome.browserAction.setIcon({path: "icon2.png"});
		chrome.tabs.executeScript(null, {file: "content_script.js"});
		flag = false;
	}else{
		chrome.browserAction.setIcon({path: "icon.png"});
		flag = true;

	}
	
});