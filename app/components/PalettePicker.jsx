var React = require('react'),
    ColorPicker = require('./ColorPicker.jsx');

var PalettePicker = React.createClass({
    propTypes: {
        newPalette: React.PropTypes.array,
        oldPalette: React.PropTypes.array
    },
    render: function() {
        var newPalette = this.props.newPalette,
            oldPalette = this.props.oldPalette,
            colorPickers = newPalette.map(function(color, i) {
                return (
                    <ColorPicker key={i}
                                 colorIndex={i}
                                 oldColor={oldPalette[i]}
                                 newColor={newPalette[i]} />
                )
            });
        return (
            <div className="new-palette-picker">
                {colorPickers}
            </div>
        );
    }
});

module.exports = PalettePicker;
