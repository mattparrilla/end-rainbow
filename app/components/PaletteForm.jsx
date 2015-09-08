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
        var handleChange = this.handleChange;

        return (
            <div className="col-sm-6">
                <div className="row hsl-labels">
                    <div className="col-sm-4">
                        <p>Hue</p>
                    </div>
                    <div className="col-sm-4">
                        <p>Saturation</p>
                    </div>
                    <div className="col-sm-4">
                        <p>Luminosity</p>
                    </div>
                </div>
                {
                    this.props.palette.map(function(color, i) {
                        return (
                            <HslSelector key={i} color={color} onChange={handleChange.bind(null, i)}/>
                        )
                    })
                }
            </div>
        )
    }
});

module.exports = PaletteForm;
