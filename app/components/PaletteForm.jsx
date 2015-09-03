var React = require('react'),
    HslSelector = require('./HslSelector');

var PaletteForm = React.createClass({
    render: function() {
        var sliders = this.props.palette.map(function(color, i) {
            return (
                <HslSelector key={i} color={color} />
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
