var React = require('react'),
    HslSelector = require('./HslSelector'),
    PalettePickerActions = require('../actions/PalettePickerActions.jsx');

var PaletteForm = React.createClass({
    propTypes: {
        palette: React.PropTypes.array,
    },
    handleChange: function(i, newColor) {
        var newPalette = this.props.palette;
        newPalette[i] = newColor;
        PalettePickerActions.sliderChange(newPalette);
    },
    render: function() {
        var handleChange = this.handleChange,
            hslSelectors = this.props.palette.map(function(color, i) {
                return (
                    <HslSelector key={i} color={color} onChange={handleChange.bind(null, i)}/>
                )
            });

        return (
            <div className="palette-form">
                <div className="hsl-labels">
                    <div>HUE</div>
                    <div>SATURATION</div>
                    <div>LUMINOSITY</div>
                </div>
                {hslSelectors}
            </div>
        )
    }
});

module.exports = PaletteForm;
