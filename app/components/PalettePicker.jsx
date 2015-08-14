var React = require('react');

var PaletteForm = React.createClass({
	//Used for type validation
	propTypes: {
		value: React.PropTypes.number,
		onChange: React.PropTypes.func
	},
	//gets called by onChange prop when value changes
	//this is not a special React function, just one we created
	//to handle a change to the form
	handleChange: function(e) {
		this.props.onChange(e.target.value);
	},
	render: function() {
		return (
			this.props.data.colors.map(function(color) {
				return (
					<ColorSlider onChange={this.handleChange} value={color.h} type="h" />
					<ColorSlider onChange={this.handleChange} value={color.s} type="s" />
					<ColorSlider onChange={this.handleChange} value={color.l} type="l" />
				)
			})
		);
	}
});

module.exports = BlueBird;
