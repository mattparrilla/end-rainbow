var React = require('react'),
    HslSelector = require('./HslSelector'),
    PalettePickerActions = require('../actions/PalettePickerActions.jsx');

var PaletteForm = React.createClass({
    handleChange: function() {
        PalettePickerActions.sliderChange(this.props.palette);
    },
    render: function() {
        var handleChange = this.handleChange;
        var sliders = this.props.palette.map(function(color, i) {
            return (
                <HslSelector key={i} color={color} onChange={handleChange}/>
            )
        });

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
                {sliders}
            </div>
        )
    }
});

module.exports = PaletteForm;
