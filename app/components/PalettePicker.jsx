var React = require('react'),
    Palette = require('./Palette'),
    PaletteForm = require('./PaletteForm');

var PalettePicker = React.createClass({
    propTypes: {
        palette: React.PropTypes.array
    },
    render: function() {
        return (
            <div className="new-palette-picker" style={{ display: "inline-block"}}>
                <Palette palette={this.props.palette} colorSpace="hsl" noHue={true} />
                <Palette palette={this.props.palette} colorSpace="hsl" />
                <PaletteForm palette={this.props.palette} />
            </div>
        );
    }
});

module.exports = PalettePicker;
