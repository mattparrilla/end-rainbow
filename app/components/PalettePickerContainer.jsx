var React = require('react'),
    Reflux = require('reflux'),
    Palette = require('./Palette'),
    PalettePicker = require('./PalettePicker'),
    PalettePickerActions = require('../actions/PalettePickerActions'),
    PalettePickerStore = require('../stores/PalettePickerStore');

var PalettePickerContainer = React.createClass({
    mixins: [Reflux.connect(PalettePickerStore, "palettes")],
    render: function() {
        return (
            <div className="color-picker">
                <Palette palette={this.state.palettes.nwsPalette} colorSpace="rgb" />
                <PalettePicker palette={this.state.palettes.newPalette} />
            </div>
        );
    }
});

module.exports = PalettePickerContainer;
