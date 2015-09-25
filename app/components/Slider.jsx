var React = require('react'),
    Actions = require('../Actions.js');

var Slider = React.createClass({
    handleChange: function(colorIndex, colorPartsIndex, e) {
        Actions.sliderChange({
            colorIndex: colorIndex,
            colorPartsIndex: colorPartsIndex,
            value: e.target.value
        });
    },
    render: function() {
        return (
            <input
                className="slider"
                type="range"
                name={this.props.part.name}
                min={this.props.part.min}
                max={this.props.part.max}
                step={this.props.part.step || 1}
                value={this.props.value}
                onChange={this.handleChange.bind(this,
                    this.props.colorIndex,
                    this.props.colorPartIndex)}
            />
        )
    }
});

module.exports = Slider;
