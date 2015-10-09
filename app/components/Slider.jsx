var React = require('react');

var Slider = React.createClass({
    propTypes: {
        part: React.PropTypes.object,
        value: React.PropTypes.number,
        onChange: React.PropTypes.func
    },
    handleChange: function(e) {
        this.props.onChange(e.target.name, e.target.value);
    },
    render: function() {
        return (
            <input
                className='slider'
                type='range'
                name={this.props.part.name}
                min={this.props.part.min}
                max={this.props.part.max}
                step={this.props.part.step || 1}
                value={this.props.value}
                onChange={this.handleChange}
            />
        )
    }
});

module.exports = Slider;
