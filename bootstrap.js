const {classes: Cc, interfaces: Ci, utils: Cu} = Components;
const self = {
	name: 'MouseMarks',
	path: {
		chrome: 'chrome://mousemarks/content/'
	},
	aData: 0,
};

const myServices = {};
Cu.import('resource://gre/modules/Services.jsm');
Cu.import('resource://gre/modules/XPCOMUtils.jsm');
Cu.import('resource://gre/modules/devtools/Console.jsm');
XPCOMUtils.defineLazyGetter(myServices, 'as', function(){ return Cc['@mozilla.org/alerts-service;1'].getService(Ci.nsIAlertsService) });

function startup(aData, aReason) {
	self.aData = aData;
}

function shutdown(aData, aReason) {
	if (aReason == APP_SHUTDOWN) return;
}

function install() {}

function uninstall() {}