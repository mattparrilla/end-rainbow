var Reflux = require('reflux'),
	ColorPickerActions = require('../actions/ColorPickerActions');

var Store = Reflux.createStore({
	listenables: [ColorPickerActions],
	init: function() {},
	getInitialState: function() { return ""; },
	// onInputChange gets linked to inputChange in BlueBirdActions
	onInputChange: function(newValue) {
		this.trigger(newValue);
	}
});

module.exports = Store;
