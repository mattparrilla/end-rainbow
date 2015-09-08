var Reflux = require('reflux'),
    PalettePickerActions = require('../actions/PalettePickerActions');

var PalettePickerStore = Reflux.createStore({
    newPalette: [
        [66, 100, 100],
        [66, 100, 95],
        [66, 100, 90],
        [66, 100, 85],
        [66, 100, 80],
        [16, 100, 75],
        [360, 100, 60],
        [345, 100, 55],
        [330, 100, 50],
        [315, 100, 45],
        [300, 100, 40],
        [285, 100, 35],
        [270, 100, 30],
        [255, 100, 25]
    ],
    getInitialState: function() {
        return this.newPalette;
    },
    listenables: [PalettePickerActions],
    onSliderChange: function(newValue) {
        this.trigger(newValue);
    }
});

module.exports = PalettePickerStore;
