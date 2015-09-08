var React = require('react'),
    Palette = require('./Palette'),
    PaletteForm = require('./PaletteForm');

var PalettePicker = React.createClass({
    propTypes: {
        palette: React.PropTypes.array
    },
    render: function() {
        return (
            <div>
                <div className="col-xs-1">
                    <Palette palette={this.props.palette} colorSpace="hsl" noHue={true} />
                </div>
                <div className="col-xs-1">
                    <Palette palette={this.props.palette} colorSpace="hsl" />
                </div>
                <PaletteForm palette={this.props.palette} />
            </div>
        );
    }
});

module.exports = PalettePicker;
