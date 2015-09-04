var React = require('react'),
    Reflux = require('reflux'),
    Palette = require('./Palette'),
    PalettePicker = require('./PalettePicker'),
    PalettePickerActions = require('../actions/PalettePickerActions'),
    PalettePickerStore = require('../stores/PalettePickerStore');

var PalettePickerContainer = React.createClass({
    mixins: [Reflux.connect(PalettePickerStore, "newPalette")],
    nwsPalette: [
        [152, 84, 198],
        [248, 0, 253],
        [188, 0, 0],
        [212, 0, 0],
        [253, 0, 0],
        [253, 139, 0],
        [229, 188, 0],
        [253, 248, 2],
        [0, 142, 0],
        [1, 197],
        [2, 253, 2],
        [3, 0, 244],
        [1, 159, 244],
        [4, 233, 231],
        [225, 225, 225],
        [227, 227, 227],
        [230, 230, 230],
        [232, 232, 232],
        [235, 235, 235],
        [238, 238, 238],
        [240, 240, 240],
        [255, 255, 255]
    ],
    render: function() {
        console.log('PP state: ' + JSON.parse(JSON.stringify(this.state)));
        console.dir(this.state);
        return (
            <div className="color-picker">
                <div className="col-xs-1">
                    <Palette palette={this.nwsPalette} colorSpace="rgb" />
                </div>
                <PalettePicker palette={this.state.newPalette} />
            </div>
        );
    }
});

module.exports = PalettePickerContainer;
