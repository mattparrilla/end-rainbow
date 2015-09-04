var Reflux = require('reflux'),
    PalettePickerActions = require('../actions/PalettePickerActions');

var PalettePickerStore = Reflux.createStore({
    listenables: [PalettePickerActions],
    onSliderChange: function(newValue) {
        console.log('store: slider change');
        this.trigger(newValue);
    }
});

module.exports = PalettePickerStore;
