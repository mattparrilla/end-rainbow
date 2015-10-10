const React = require('react');
const ColorPicker = require('./ColorPicker.jsx');

const PalettePicker = React.createClass({
    propTypes: {
        oldPalette: React.PropTypes.array,
        newPalette: React.PropTypes.array,
    },
    handleColorChange: function(index, color) {
        console.log(index, color);
        this.setState({
            nwsPalette: this.props.oldPalette,
            newPalette: this.props.newPalette,
        });
    },

    render: function() {
        const colorPickers = this.props.newPalette.map(function(color, i) {
            return (
                <ColorPicker key={i}
                                onChange={this.handleColorChange.bind(null, i)}
                                oldColor={this.props.oldPalette[i]}
                                newColor={color} />
            );
        }.bind(this));

        return (
            <div className="new-palette-picker">
                {colorPickers}
            </div>
        );
    },
});

module.exports = PalettePicker;
